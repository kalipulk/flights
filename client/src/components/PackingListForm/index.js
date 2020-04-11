import React from "react";

function PackingListForm (props){
    
    return(
        <div className="packing-list-container">
          <div className="form-group">
            <div>
              <label htmlFor="Query" className="item-label">
                PACKING LIST FOR THIS TRIP
              </label>
            </div>
            <div >
              <input
                className="form-control"
                className="item-input"
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
      </div>
    )
}

export default PackingListForm;