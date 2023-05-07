/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BookList from "./BookList";

const getBookFromLs=()=>{
    const bookData=localStorage.getItem('bookItem');
    if(bookData){
        return JSON.parse(bookData)
    }else{
        return [];
    }
}

const Books = () => {
  const [books, setBooks] = useState(getBookFromLs());
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      isbn,
    };
    setBooks([...books, book]);
    setTitle(""), setAuthor(""), setIsbn("");
  };

  const deleteItem=(id)=>{
    console.log(id);
    const filterItem=books.filter(bookId=> bookId.isbn !== id);
    // console.log(filterItem);
    setBooks(filterItem)

  }

  useEffect(()=>{
    localStorage.setItem('bookItem',JSON.stringify(books))
  },[books])
  return (
    <div className="container">
      <h3>Books</h3>
      <div className="row g-5">
        <div className="col-lg-8 card p-5">
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label className="form-label">Book Name</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                id="author"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Isbn</label>
              <input
                type="text"
                className="form-control"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                id="isbn"
                required
              />
            </div>

            <input type="submit" className="btn btn-primary" value="Submit"/>
              
          </form>
        </div>
        <div className="col-lg-4">
          <h2>Book List</h2>

          {books?.length < 1 && (
            <div className="card p-3">
              <h3>No books added.</h3>
            </div>
          )}
          {books?.length > 0 &&
            books.map((book) => (
              // console.log(book)
              <BookList book={book} key={book.isbn} deleteItem={deleteItem} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
