// import { useState, useEffect } from "react";
// import axios from "axios";

export default function CommentList({ comments }) {
  // const [comments, setComments] = useState({});

  // const fechData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );

  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   fechData();
  // }, []);

  // The "TypeError: map is not a function" occurs when we call the map() method on
  // a value that is not an array.

  const renderedComments =
    comments.length > 0
      ? comments.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })
      : [];

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedComments}
    </div>
  );
}
