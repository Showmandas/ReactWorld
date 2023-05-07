/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Post = () => {
    const[post,setPost]=useState([]);
    const[postInfo,setPostInfo]=useState('');

    const handlePost=(e)=>{
        e.preventDefault();
        const form=e.target;
        let postInfo=form.value;
        setPost([...post,postInfo])
        setPostInfo('')
    
    }
  return (
    <div className="container row gx-5 mt-5">
<div className="col-lg-7 card p-3 w-50">
      <form onSubmit={handlePost}>
      <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:'200px'}} value={postInfo}></textarea>
  <label>Comments</label>
      </div>
      <input type="submit" value="post" className="btn bg-dark mt-3 text-white p-1 px-4 w-25 fw-bold fs-5" />
      </form>
    </div>
    <div className="card col-lg-5">
        {postInfo}

    </div>
    </div>
    
    
  );
};

export default Post;
