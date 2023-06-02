import React, { useEffect, useState } from "react";
import "./Posts.css";

const AllUserPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="m-2 postcontainer">
      {posts.map((post) => (
        <div key={post._id} id="card" className="card">
          <div className="card-header">{post.author}</div>
          <div className="card-body">
            <h6 className="card-title">{post.course}</h6>
            <p className="card-text">{post.message}</p>
            <p className="card-date">{formatDate(post.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUserPosts;
