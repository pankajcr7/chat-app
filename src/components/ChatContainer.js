import React from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

class ChatContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: []
        };
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(message) {
        this.setState(prevState => ({
            messages: [...prevState.messages, message]
        }));
    }

    render() {
        return (
            <div className="chat-container">
                <MessageList messages={this.state.messages} />
                <SendMessageForm addMessage={this.addMessage} />
            </div>
        );
    }
}

export default ChatContainer;