import * as PropTypes from "prop-types";
import React from "react";
import { BsPlus,BsDash } from "react-icons/bs";

export function MealCard(props) {
  const {
    onItemAdd,
    meal: { description, name, price, total },
    onItemRemove
  } = props;
  return (
    <div className="col-3 mb-3">
      <div className="card center-align">
        <div className="card-content text-white">
          <span className="card-title">
            {name} - Rs.{price}
          </span>
          <p>{description}</p>  
        </div>
        <div className="card-action">
          <a className="cbtn btn-small">
          <BsPlus onClick={onItemAdd} style={{ color: "white", cursor: "pointer", fontSize: "30px",  }} />
          
            {total || 0}
            <BsDash onClick={onItemRemove} style={{ color: "white", cursor: "pointer", fontSize: "30px",  }} />
            
          </a>
        </div>
      </div>
    </div>
  );
}

MealCard.propTypes = {
  meal: PropTypes.any,
  onItemAdd: PropTypes.func,
  onItemRemove: PropTypes.func
};
