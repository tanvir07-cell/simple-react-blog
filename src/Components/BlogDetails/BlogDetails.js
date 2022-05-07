import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const [blogs, setBlogs] = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const blog = blogs.find((blog) => blog._id === id);
  console.log(blog);

  return (
    <>
      <div className="header-gradient" />

      <div>
        <button className="back-button" onClick={() => navigate("/")}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
