import { useState, useEffect } from "react";
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fechPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fechPosts();
  }, []);

  // Object.values return an array of all the values of an object
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}
