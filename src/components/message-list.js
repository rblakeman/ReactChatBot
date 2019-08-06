import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import BeatLoader from 'react-spinners/BeatLoader'

const styles = {
  chatWindowCenter: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflowY: 'scroll',
    padding: '10px 20px'
  },
  loadingSpinner: {
    alignSelf: 'center',
    paddingTop: '100px'
  },
  receipientName: {
    color: '#354058'
  },
  authorName: {
    color: '#5294FC'
  },
  chatMessage: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 0px'
  },
  chatText: {
    color: '#B7BFC8' //'#CBD3DC'
  }
}

class MessageList extends Component {
  componentDidUpdate() {
    let chatScrollContainer = document.getElementById('chat-scroll')
    chatScrollContainer.scrollTop = chatScrollContainer.scrollHeight
  }

  render() {
    const { messages } = this.props
    return (
      <div style={styles.chatWindowCenter} id={'chat-scroll'}>
        {messages.length < 1 ? (
          <div style={styles.loadingSpinner}>
            <BeatLoader size={15} color={'#C6EEF0'} />
          </div>
        ) : (
          _.map(messages, (ele, idx) => {
            return (
              <div key={idx} style={styles.chatMessage}>
                <div
                  style={
                    ele.author === this.props.user
                      ? styles.authorName
                      : styles.receipientName
                  }
                >
                  {ele.author}
                </div>
                <div style={styles.chatText}>
                  {ele.style === 'password'
                    ? _.map(ele.message.split(''), (ele) => {
                        return '*'
                      })
                    : ele.message}
                </div>
              </div>
            )
          })
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    onboardingJSON: state.json,
    messages: state.messages,
    currentID: state.id
  }
}

export default connect(mapStateToProps)(MessageList)
