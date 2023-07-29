import React from 'react';

class SendMessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const timestamp = new Date().toLocaleTimeString();
        this.props.addMessage({
            username: this.state.username,
            text: this.state.message,
            timestamp: timestamp
        });
        this.setState({ message: '' });
    }

    handleKeyUp = () => {
        this.props.setTypingStatus(this.state.username);
    }
    render() {
        return (
            <form className="send-message-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Your name"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Type your message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    onKeyUp={this.handleKeyUp}
                    autoFocus
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default SendMessageForm;