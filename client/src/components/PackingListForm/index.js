import React from "react";

function PackingListForm (props){
    return(
        <form>
        <div className="form-group">
          <label htmlFor="Query">
            <strong>Items to Pack</strong>
          </label>
          <input
            className="form-control"
            id="Item"
            type="text"
            value={props.item}
            placeholder="Bathing Suit"
            name="item"
            onChange={props.handleInputChange}
            required
          />
        </div>
        <div className="pull-right">
          <button
            onClick={props.handleFormSubmit}
            type="submit"
            
          >
            Add to Packing List
          </button>
        </div>
      </form>
    )
}

export default PackingListForm;