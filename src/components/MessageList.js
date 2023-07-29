import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
    constructor() {
        super();
        this.messagesEndRef = React.createRef();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => (
                    <Message 
                        key={index} 
                        username={message.username} 
                        text={message.text} 
                        timestamp={message.timestamp}
                    />
                ))}
                <div ref={this.messagesEndRef} />
            </div>
        );
    }
}

export default MessageList;