import React from "react";
import "./style.css";

function AddBtn(props) {
  return (
    <span className="add-btn" {...props} role="button" tabIndex="0">
      +
    </span>
  );
}

export default AddBtn;