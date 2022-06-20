import React, { useState } from "react";
import Comments from "./Comments";

function InteractiveBtns({ videoInfo }) {
  const [likes, setLikes] = useState(videoInfo.upvotes);
  const [dislikes, setDislikes] = useState(videoInfo.downvotes);
  const [comment, setComments] = useState(true);

  function handleComments() {
    setComments(!comment);
  }
  function handleLikes() {
    setLikes(likes + 1);
  }

  function handleDislikes() {
    setDislikes(dislikes - 1);
  }

  return (
    <>
      <button onClick={handleLikes}> {likes} 👍🏿 </button>
      <button onClick={handleDislikes}>{dislikes} 👎 </button>

      <div>
        <button onClick={handleComments}>
          {comment ? "Hide Comments" : "Show Comment"}
        </button>
        {comment ? <Comments vidInfo={videoInfo} /> : null}
      </div>
     
    </>
  );
}

export default InteractiveBtns;
