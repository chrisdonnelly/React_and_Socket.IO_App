import React from 'react';

const Message = ({ author, text }) => {
    return (
        <blockquote className="message">
            <h3>{author} said:</h3>
            <p>{text}</p>
        </blockquote>
    );
};

export default Message;