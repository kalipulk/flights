import React from "react";

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">SEARCH:</label>
        <input
          onChange={props.handleInputChange}
          value={props.email}
          name="search"
          type="text"
          className="form-control"
          placeholder=" "
          id="search"
        />
        <br />
        <input
          onChange={props.handleInputChange}
          value={props.password}
          name="search"
          type="text"
          className="form-control"
          placeholder=""
          id="search"
        />
      </div>
    </form>
  );
}

export default Form;