/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BookList = ({book,deleteItem}) => {
  const { title, author, isbn } = book;
//   const {deleteItem}=deleteItem;
  return (
    <div className="card p-4 mb-3">
      <h5>Isbn:{isbn}</h5>
      <h5>Title:{title}</h5>
      <h5>Author:{author}</h5>
      <div className="d-flex justify-content-center align-items-center gap-5">
        <button className="btn bg-danger" onClick={()=>deleteItem(isbn)}><i className="fa-solid fa-trash text-white"></i></button>
        <button className="btn bg-warning-subtle"><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  );
};

export default BookList;
