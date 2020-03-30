import React from "react";

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.email}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <input
          onChange={props.handleInputChange}
          value={props.password}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
      </div>
    </form>
  );
}

export default Form;