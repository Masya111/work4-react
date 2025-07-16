import { useEffect, useRef, useState } from "react";
import Message from "./Message";

export default function Messanger() {
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");

  const chatRef = useRef(null);

  function handleSand(e) {
    e.preventDefault();
    setChat((prev) => [...prev, text]);
    setText("");
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      <div className="task">
        <div className="chat" ref={chatRef}>
          {chat.map((el, index) => (
            <Message key={index} text={el} index={index} />
          ))}
        </div>

        <form onSubmit={(e) => handleSand(e)}>
          {" "}
          <input
            type="text"
            placeholder="Type a new message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}
