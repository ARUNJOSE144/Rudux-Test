import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("Dispatching Coomons : ",state);
  return { books: state.commmons };

};

const ConnectedBookList = ({ books }) => (
  <ul className="list-group list-group-flush">
    {books.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.bookName}
      </li>
    ))}
  </ul>
);

const BookList = connect(mapStateToProps)(ConnectedBookList);



export default BookList;
