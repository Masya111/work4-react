import { useState } from "react";

export default function Message({ text, index }) {
  const [likesCounter, setLikeCounter] = useState(0);
  const [dislikesCounter, setDislikeCounter] = useState(0);

  return (
    <div className={index % 2 === 0 ? "message-Ben" : "message-Toby"}>
      <p>{text}</p>
      <div className="reactions">
        <button
          className="reaction-button"
          onClick={() => setLikeCounter((prev) => prev + 1)}
        >
          <img
            src="src/assets/free-icon-thumb-up-17350216.png"
            className="reaction"
            alt="Like"
          />
        </button>
        <span>{likesCounter}</span>
        <button
          className="reaction-button"
          onClick={() => setDislikeCounter((prev) => prev + 1)}
        >
          <img
            src="src/assets/free-icon-thumb-down-2717402.png"
            className="reaction"
            alt="Dislike"
          />
        </button>
        <span>{dislikesCounter}</span>
      </div>
    </div>
  );
}
