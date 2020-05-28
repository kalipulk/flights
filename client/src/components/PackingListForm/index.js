import React from "react";

function PackingListForm (props){
    
    return(
        <div className="packing-list-container">
          <div className="form-group">
            <div>
              <label htmlFor="Query" className="item-label">
                Packing List For This Trip:
              </label>
            </div>
            <div >
              <input class="enter-item"
                className="form-control"
                className="item-input"
                id="Item"
                type="text"
                value={props.item}
                placeholder="ex: sunglasses, swimsuit"
                name="item"
                onChange={props.handleInputChange}
                required
              />
            </div>
          </div>
        <div className="pull-right">
          <button onClick = {(events)=>props.handleFormSubmit(events, props.id)} type="submit">
            Add To Packing List
          </button>
        </div>
      </div>
    )
}

export default PackingListForm;