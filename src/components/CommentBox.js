import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchComments, saveComment } from "../actions";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(comment));
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={() => dispatch(fetchComments())}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default CommentBox;
