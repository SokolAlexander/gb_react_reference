import { useCallback } from "react";

import { MessageForm } from "../MessageForm";
import { Message } from "../Message";
import "./styles.css";

export const MessageFeild = ({ onAddMessage, messageList }) => {
  const renderMessage = useCallback((message) => {
    return <Message text={message.text} author={message.author} />;
  }, []);

  return (
    <div className="messageField">
      {messageList.map(renderMessage)}
      <MessageForm onAddMessage={onAddMessage} />
    </div>
  );
};
