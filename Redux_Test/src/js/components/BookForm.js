import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { commonAction } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => dispatch(commonAction(book,"ADD_ARTICLE1"))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      bookName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    //console.log("State on handler cahnge : ",this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { bookName } = this.state;
    console.log("bookName : ",bookName);
    const id = uuidv1();
    this.props.addBook({ bookName, id });
    this.setState({ bookName: "" });
  }

  render() {
    const { bookName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">bookName</label>
          <input
            type="text"
            className="form-control"
            id="bookName"
            value={bookName}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const BookForm = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addBook: PropTypes.func.isRequired
};

export default BookForm;
