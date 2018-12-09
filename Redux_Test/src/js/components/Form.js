import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle,deleteArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    deleteArticle: article => dispatch(deleteArticle(article))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
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
    const { title } = this.state;
    console.log("title : ",title);
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }


  deleteArticle = (event) =>{
    alert("Delete button clicked---");
    event.preventDefault();
    const { title } = this.state;
    console.log("title1 : ",title);
    const id = uuidv1();
    this.props.deleteArticle({ title, id });
    this.setState({ title: "" });
  }


  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>

        <button type="button" className="btn btn-success btn-lg" onClick={this.deleteArticle}>
          DELETE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired
};

export default Form;
