import { useState, useCallback, useEffect } from "react";

import { MessageFeild } from "./components/MessageField";
import { AUTHORS } from "./utils/constants";
import "./App.css";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = useCallback((message) => {
    setMessageList((prevMessageList) => [...prevMessageList, message]);
  }, []);

  useEffect(() => {
    if (!messageList.length) {
      return;
    }

    const lastMessage = messageList[messageList.length - 1];
    let timeout;
    if (lastMessage.author === AUTHORS.ME) {
      timeout = setTimeout(
        () =>
          setMessageList((prevMessageList) => [
            ...prevMessageList,
            { text: "I AM BOT", author: AUTHORS.BOT },
          ]),
        1500
      );
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="app">
      <div className="headerWrap">
        <h3 className="header">My messenger</h3>
      </div>
      <MessageFeild onAddMessage={handleAddMessage} messageList={messageList} />
    </div>
  );
}

export default App;
