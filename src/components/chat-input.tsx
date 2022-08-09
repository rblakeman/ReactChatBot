import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Button, TextField } from '@material-ui/core';
import SendICON from '@material-ui/icons/SendOutlined';

import { setJSON, sendMessage, updateID } from '../action';
import type { Json, ReduxState } from '../typings';

const styles = {
    chatWindowBottom: {
        backgroundColor: '#EBF5F6', //'#CBD3DC',
        height: '60px',
        display: 'flex',
        flexDirection: 'row' as 'row',
        padding: '20px'
    },
    inputBox: {
        backgroundColor: '#FFFFFF',
        marginRight: '10px',
        borderRadius: '5%',
        marginBottom: '0',
        width: '100%',
        height: '93%'
    },
    sendButton: {
        color: '#FFFFFF',
        backgroundColor: '#5294FC',
        marginLeft: '10px',
        height: '93%'
    }
};

type NewMessage = {
    author: string;
    message: string;
    style?: 'password';
}

type Props = {
    author: string;
    currentID: number;
    onboardingJSON: Json[];
    sendMessage: ({ message, author }: NewMessage) => void;
};
type State = {
    input: string
};

class ChatInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { input: '' };
    }

    sendInput(message: string) {
        const { onboardingJSON, currentID} = this.props;
        let newMessage: NewMessage = {
            message: message,
            author: this.props.author
        };
        if (onboardingJSON[currentID].style === 'password') {
            newMessage.style = 'password';
        }

        this.props.sendMessage(newMessage);
        this.setState({ input: '' });
    }

    render() {
        const { onboardingJSON, currentID } = this.props;
        const { input } = this.state;

        const disabled = onboardingJSON.length && !onboardingJSON[currentID].validation || false;

        return (
            <div style={styles.chatWindowBottom}>
                <TextField
                    disabled={disabled}
                    variant="outlined"
                    onChange={(ev) => this.setState({ input: ev.target.value })}
                    placeholder="Type here..."
                    style={styles.inputBox}
                    value={input}
                    type={
                        onboardingJSON.length > 0 && onboardingJSON[currentID].style === 'password'
                            ? 'password'
                            : 'default'
                    }
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter' && input.length > 0) {
                            ev.preventDefault();
                            this.sendInput(input);
                        }
                    }}
                />
                <Button
                    disabled={disabled}
                    onClick={(ev) => {
                        ev.preventDefault();
                        if (input.length > 0) {
                            this.sendInput(input);
                        }
                    }}
                    style={styles.sendButton}
                >
                    <SendICON />
                </Button>
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
)(ChatInput);
