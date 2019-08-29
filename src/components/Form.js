import React from "react";

class Form extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const book = { ...this.state };
    this.props.addBook(book);
    this.setState({ title: null, author: null, img: null });
    e.target.reset();
  };

  render() {
    return (
      <React.Fragment>
        <h2>New Book Form</h2>
        <form onSubmit={this.handleSubmit} action="">
          <input
            onChange={this.handleChange}
            name="title"
            placeholder="Title"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="author"
            placeholder="Author"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="img"
            placeholder="Image Url"
            type="text"
          />
          <input onChange={this.handleChange} type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
