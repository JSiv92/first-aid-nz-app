import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Posts.css";

const AllUserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  //get all posts from db using fetch api
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

  //convert date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  //delete post confirmation inside modal box
  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Remove the deleted post from the list
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
      } else {
        throw new Error("Failed to delete post");
      }
    } catch (error) {
      console.log(error);
    } finally {
      handleCloseModal();
    }
  };

  //delete button opens confirmation modal
  const handleOpenModal = (postId) => {
    setSelectedPostId(postId);
    setModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPostId(null);
    setModal(false);
  };

  return (
    <div className="m-2 postcontainer">
      {posts.map((post) => (
        <div key={post._id} id="card" className="card">
          <div className="card-header">
            {post.author}
            {"  "}{" "}
            <i
              class="fa-solid fa-trash deleteBtn"
              onClick={() => handleOpenModal(post._id)}
            ></i>
          </div>
          <div className="card-body">
            <h6 className="card-title">{post.course}</h6>
            <p className="card-text">{post.message}</p>
            <p className="card-date">{formatDate(post.createdAt)}</p>
          </div>
        </div>
      ))}

      {/*confirm delete post*/}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Student Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Permanently delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="fanzGreen" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button
            variant="fanzRed"
            onClick={() => handleDelete(selectedPostId)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllUserPosts;
