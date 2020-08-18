import * as PropTypes from "prop-types";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

export function MealRow(props) {
  return (
    <tr>
      <td>
        <input onChange={props.onNameChange} value={props.name} type="text" />
      </td>
      <td>
        <input
          onChange={props.onPriceChange}
          value={props.price}
          type="number"
        />
      </td>
      <td>
        <input
          onChange={props.onDescriptionChange}
          value={props.description}
          type="text"
        />
      </td>
      {props.meals.length > 1 && (
        <td>
          <BsFillTrashFill style={{ color: "white", cursor: "pointer" }} onClick={props.onDelete}/>
        </td>
      )}
    </tr>
  );
}

MealRow.propTypes = {
  onNameChange: PropTypes.func,
  name: PropTypes.any,
  onPriceChange: PropTypes.func,
  price: PropTypes.any,
  onDescriptionChange: PropTypes.func,
  description: PropTypes.any,
  meals: PropTypes.any,
  onDelete: PropTypes.func
};
