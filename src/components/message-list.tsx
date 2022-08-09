import React, { Component } from 'react';
import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import type { Message, ReduxState } from '../typings';

const styles = {
    chatWindowCenter: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column' as 'column',
        flex: 1,
        overflowY: 'scroll' as 'scroll',
        padding: '10px 20px'
    },
    loadingSpinner: {
        alignSelf: 'center',
        paddingTop: '100px'
    },
    recipientName: {
        color: '#354058'
    },
    authorName: {
        color: '#5294FC'
    },
    chatMessage: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        padding: '5px 0px'
    },
    chatText: {
        color: '#B7BFC8' //'#CBD3DC'
    }
};

type Props = {
    messages: Message[];
    user: string;
};
type State = {};

class MessageList extends Component<Props, State> {
    componentDidUpdate() {
        let chatScrollContainer = document.getElementById('chat-scroll')!;
        chatScrollContainer.scrollTop = chatScrollContainer.scrollHeight;
    }

    render() {
        const { messages, user } = this.props;

        return (
            <div style={styles.chatWindowCenter} id='chat-scroll'>
                {messages.length < 1 ? (
                    <div style={styles.loadingSpinner}>
                        <BeatLoader size={15} color='#C6EEF0' />
                    </div>
                ) : (
                    messages.map((ele: Message, idx) => {
                        return (
                            <div key={idx} style={styles.chatMessage}>
                                <div
                                    style={
                                        ele.author === user
                                            ? styles.authorName
                                            : styles.recipientName
                                    }
                                >
                                    {ele.author}
                                </div>
                                <div style={styles.chatText}>
                                    {ele.style === 'password'
                                        ? ele.message.split('').map((ele: string) => {
                                            return '*';
                                        })
                                        : ele.message}
                                </div>
                            </div>
                        );
                    })
                )}
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

export default connect(mapStateToProps)(MessageList);
