import React, { Component, useState, useEffect  } from 'react';
import{getBooks} from '../services/bookService';



const Books = () => {
    const [books, setBooks] = useState(getBooks());
    // const [other, setOther] = useState();
    // console.log(books);


    const handleDelete = (bookId) =>{
        const newbooks = books.filter(book=>book._id!=bookId);
        setBooks(newbooks);
    }
    return ( <>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Action(s)</th>

            </tr>
        </thead>
        <tbody>
            {books.map(book=>{
                console.log("creating book: ", book);
                return (
                <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.category.name}</td>
                    <td>{book.author}</td>
                    <td>{book.numberInStock}</td>
                    <td></td>
                    <td><button onClick={()=>{handleDelete(book._id)}} className="btn btn-outline-danger">Delete</button></td>
                </tr>
                );
            })}
        </tbody>
    </table>
    
    </> );
}
 
export default Books;

