import React from "react";

function PackingListForm (props){
    
    return(
        <form>
          <div className="form-group">
            <div className="item-label">
              <label htmlFor="Query">
                Items to Pack
              </label>
            </div>
            <div className="item-input">
              <input
                className="form-control"
                id="Item"
                type="text"
                value={props.item}
                placeholder="Packing Item"
                name="item"
                onChange={props.handleInputChange}
                required
              />
            </div>
          </div>
        <div className="pull-right">
          <button onClick = {(events)=>props.handleFormSubmit(events, props.id)} type="submit">
            ADD TO PACKING LIST
          </button>
        </div>
      </form>
    )
}

export default PackingListForm;