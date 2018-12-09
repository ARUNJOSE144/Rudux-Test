import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("Dispatching Articles : ",state.articles);
  return { articles1: state.articles };
};

const ConnectedList = ({ articles1 }) => (
  <ul className="list-group list-group-flush">
    {articles1.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List1 = connect(mapStateToProps)(ConnectedList);



export default List1;
