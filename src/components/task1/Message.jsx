import { useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
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
          <img src={like} className="reaction" alt="Like" />
        </button>
        <span>{likesCounter}</span>
        <button
          className="reaction-button"
          onClick={() => setDislikeCounter((prev) => prev + 1)}
        >
          <img src={dislike} className="reaction" alt="Dislike" />
        </button>
        <span>{dislikesCounter}</span>
      </div>
    </div>
  );
}
