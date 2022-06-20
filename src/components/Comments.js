import React from "react";

function Comments({ vidInfo }) {
  console.log(vidInfo);
  let mapComm = vidInfo.comments.map(comm => (
      <div>
        <h3> {comm.user} </h3>

        <p>{comm.comment}</p>
      </div>
  ));

  return (
    <div>
      <h1>2 Comments</h1>
      {mapComm}
    </div>
  );
}
export default Comments;
