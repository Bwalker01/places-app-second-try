import React, { useEffect, useState } from "react";
import "./Posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      console.log("data", data);
      setPosts(data);
      setIsLoading(false);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>

      {isLoading && <span>Loading ...</span>}

      <ul className="postList">
        {!isLoading &&
          posts.map((post, idx) => <li key={post.id}>Title: {post.title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
