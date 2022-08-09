import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button } from '@material-ui/core';
import ChatICON from '@material-ui/icons/ChatOutlined';
import DownArrowICON from '@material-ui/icons/KeyboardArrowDown';

import { setJSON, sendMessage, updateID } from './action';
// @ts-expect-error IGNORE
import logo from './logo.svg';
import './App.css';
import MessageList from './components/message-list';
import ChatInput from './components/chat-input';
import { Json, Message, ReduxState } from './typings';

const styles = {
    root: {
        backgroundColor: '#B1E8EC',
        backgroundImage:
      'linear-gradient( -7deg, #B1E8EC 0%, #B1E8EC 50%, #BEEEF0 50%, #BEEEF0 50%)',
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    supportWindow: {
        backgroundColor: '#354058',
        width: '225px',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        boxShadow: '0px -2px 40px -10px rgba(0,0,0,0.3)',
        borderRadius: '5px 5px 0px 0px'
    },
    supportIcon: {
        color: '#5294FC'
    },
    supportText: {
        color: '#CBD3DC',
        textTransform: 'none' as 'none',
        fontSize: '16px'
    },
    supportFakeButton: {
        color: '#5294FC'
    },
    chatWindow: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '450px',
        height: '450px',
        boxShadow: '0px 12px 40px -10px rgba(0,0,0,0.3)'
    },
    chatWindowTop: {
        backgroundColor: '#EBF5F6', //'#CBD3DC',
        height: '70px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '10px'
    },
    recipientPic: {
        // borderRadius: '100%',
        width: '70px'
    },
    recipientName: {
        color: '#354058'
    }
};

const BOT_NAME = 'React Bot';
const USER_NAME = 'You';

type ReduxProps = {
    sendMessage: typeof sendMessage;
    setJSON: typeof setJSON;
    updateID: typeof updateID;
};
type Props = {
    messages: Message[];
    onboardingJSON: Json[];
    currentID: number;
} & ReduxProps;
type State = {};

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};

        console.log('last updated: Aug 8, 2022');
    }

    componentDidMount() {
        this.getOnboardingQuestions();
    }

    componentDidUpdate() {
        const { messages } = this.props;

        let length = messages.length - 1;
        if (length > 0) {
            if (messages[length].author !== BOT_NAME)
                this.checkResponse(messages[length].message);
        }
    }

    async getOnboardingQuestions() {
        const URL = 'https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json';
        fetch(URL)
            .then((res) => {
                // In case the gist is deleted or doesn't load
                if (!res.ok) {
                    return [
                        {
                            "id": -1,
                            "question": "Sorry, we can't help you at this time. Have a nice day!",
                            "validation": false
                        },
                        {
                            "id": 1,
                            "question": "Sorry, we encountered an error. Please try again later!",
                            "validation": false,
                            "paths": -1
                        }
                    ];
                }

                return res.json();
            })
            .then((data) => {
                this.props.setJSON(data);
                this.props.sendMessage({
                    message: data[1].question,
                    author: BOT_NAME
                });
            });
    }

    checkResponse(message: string) {
        const { onboardingJSON, currentID } = this.props;
        const currentPrompt = onboardingJSON[currentID];

        if (currentPrompt.validation === false) return;

        //remove leading/trailing whitespace and lowercase response
        const originalMessage = message;
        message = message.trim().toLowerCase();
        if (typeof currentPrompt.validation === 'boolean') {
            //no need to verify, succeeded
            this.postMessage(originalMessage, currentID);

            const nextPath = currentPrompt.paths as number;

            this.props.sendMessage({
                message: onboardingJSON[nextPath].question,
                author: BOT_NAME
            });

            this.props.updateID(currentPrompt.paths as number);

            return;
        } else if (typeof currentPrompt.validation === 'string') {
            //regex
            let regexString = new RegExp(currentPrompt.validation);
            if (regexString.test(message)) {
                //succeeded
                this.postMessage(originalMessage, currentID);

                let newPath = currentPrompt.paths as number;
                let nextPrompt = onboardingJSON[newPath];
                this.props.sendMessage({
                    message: nextPrompt.question,
                    author: BOT_NAME
                });
                this.props.updateID(newPath);

                return;
            } else {
                //failed
                this.props.sendMessage({
                    message: `Your response didn't meet the criteria, please try again`,
                    author: BOT_NAME
                });
                this.props.sendMessage({
                    message: currentPrompt.question,
                    author: BOT_NAME
                });

                return;
            }
        } else {
            //multiple options
            if (currentPrompt.validation.includes(message)) {
                //succeeded
                this.postMessage(originalMessage, currentID);

                let newPath = -1;
                if (Object.keys(currentPrompt.paths as {}).length > 1) {
                    const potentialPaths = currentPrompt.paths as {};

                    newPath = potentialPaths[message as keyof {}];
                } else {
                    newPath = currentPrompt.paths as number;
                }
                if (newPath === -1) newPath = 0;
                let nextPrompt = onboardingJSON[newPath];
                this.props.sendMessage({
                    message: nextPrompt.question,
                    author: BOT_NAME
                });
                this.props.updateID(newPath);

                return;
            } else {
                //failed response
                this.props.sendMessage({
                    message: `I don't understand your response, please try again`,
                    author: BOT_NAME
                });
                this.props.sendMessage({
                    message: currentPrompt.question,
                    author: BOT_NAME
                });

                return;
            }
        }
    }

    postMessage(originalMessage: string, id: number) {
        const PUT_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(PUT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(originalMessage)
        }).then((res) => {
            // console.log(res.json)
        });
    }

    render() {
        // const { onboardingJSON, messages, currentID } = this.props
        return (
            <div style={styles.root}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '225px', height: '50px' }} />
                    <Button style={styles.supportWindow}>
                        <div style={styles.supportIcon}>
                            <ChatICON />
                        </div>
                        <div style={styles.supportText}> Live Support </div>
                        <div style={styles.supportFakeButton}>
                            <DownArrowICON />
                        </div>
                    </Button>
                </div>
                <div style={styles.chatWindow}>
                    <div style={styles.chatWindowTop}>
                        <img src={logo} style={styles.recipientPic} alt="Bot Icon" />
                        <div style={styles.recipientName}>{BOT_NAME}</div>
                    </div>
                    <MessageList user={USER_NAME} />
                    <ChatInput author={USER_NAME} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: ReduxState) {
    return {
        onboardingJSON: state.json,
        messages: state.messages,
        currentID: state.id
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ setJSON, sendMessage, updateID }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
