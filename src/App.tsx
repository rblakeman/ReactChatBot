import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from '@material-ui/core';
import ChatICON from '@material-ui/icons/ChatOutlined';
import DownArrowICON from '@material-ui/icons/KeyboardArrowDown';

import { setJSON, sendMessage, updateID } from './action';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/message-list';
import ChatInput from './components/chat-input';

const styles = {
    root: {
        backgroundColor: '#B1E8EC',
        backgroundImage:
      'linear-gradient( -7deg, #B1E8EC 0%, #B1E8EC 50%, #BEEEF0 50%, #BEEEF0 50%)',
        display: 'flex',
        flexDirection: 'column',
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
        textTransform: 'none',
        fontSize: '16px'
    },
    supportFakeButton: {
        color: '#5294FC'
    },
    chatWindow: {
        display: 'flex',
        flexDirection: 'column',
        width: '450px',
        height: '450px',
        boxShadow: '0px 12px 40px -10px rgba(0,0,0,0.3)'
    },
    chatWindowTop: {
        backgroundColor: '#EBF5F6', //'#CBD3DC',
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '10px'
    },
    receipientPic: {
        // borderRadius: '100%',
        width: '70px'
    },
    receipientName: {
        color: '#354058'
    }
};

const BOT_NAME = 'React Bot';
const USER_NAME = 'You';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        console.log('last updated: June 17, 2022');
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

    checkResponse(message) {
        const { onboardingJSON, currentID } = this.props;
        if (onboardingJSON[currentID].validation === false) return;

        //remove leading/trailing whitespace and lowercase response
        const originalMessage = message;
        message = message.trim().toLowerCase();
        if (typeof onboardingJSON[currentID].validation === 'boolean') {
            //no need to verify, succeeded
            this.postMessage(originalMessage, currentID);

            this.props.sendMessage({
                message: onboardingJSON[onboardingJSON[currentID].paths].question,
                author: BOT_NAME
            });
            this.props.updateID(onboardingJSON[currentID].paths);

            return;
        } else if (typeof onboardingJSON[currentID].validation === 'string') {
            //regex
            let regexString = new RegExp(onboardingJSON[currentID].validation);
            if (regexString.test(message)) {
                //succeeded
                this.postMessage(originalMessage, currentID);

                let newPath = onboardingJSON[currentID].paths;
                this.props.sendMessage({
                    message: onboardingJSON[newPath].question,
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
                    message: onboardingJSON[currentID].question,
                    author: BOT_NAME
                });

                return;
            }
        } else {
            //mulitple options
            if (onboardingJSON[currentID].validation.includes(message)) {
                //succeeded
                this.postMessage(originalMessage, currentID);

                let newPath = -1;
                if (Object.keys(onboardingJSON[currentID].paths).length > 1) {
                    newPath = onboardingJSON[currentID].paths[message];
                } else {
                    newPath = onboardingJSON[currentID].paths;
                }
                if (newPath === -1) newPath = 0;
                this.props.sendMessage({
                    message: onboardingJSON[newPath].question,
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
                    message: onboardingJSON[currentID].question,
                    author: BOT_NAME
                });

                return;
            }
        }
    }

    postMessage(originalMessage, id) {
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
                        <img src={logo} style={styles.receipientPic} alt="Bot Icon" />
                        <div style={styles.receipientName}>{BOT_NAME}</div>
                    </div>
                    <MessageList user={USER_NAME} />
                    <ChatInput author={USER_NAME} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        onboardingJSON: state.json,
        messages: state.messages,
        currentID: state.id
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setJSON, sendMessage, updateID }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
