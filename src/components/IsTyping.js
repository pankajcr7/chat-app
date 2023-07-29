import React from 'react';

class IsTyping extends React.Component {
    render() {
        return (
            <div className="is-typing">
                {this.props.username} is typing...
            </div>
        );
    }
}

export default IsTyping;