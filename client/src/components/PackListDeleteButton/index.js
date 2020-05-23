import React from "react";
import "./style.css";

function PackingListDelete(props) {
    console.log(props);
    return ( 
    <button class="packedItemDeleteButton" onClick = {props.delete}> remove </button>)
}
export default PackingListDelete