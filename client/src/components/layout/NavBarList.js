import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import React from "react";

export function NavBarList(props) {
  //console.log("u-navi- ",props.user)
  return (
    <>
      { props.user.role === "manager" ?
      <li className="nav-item active">
        <Link className="nav-link" to="/restaurants/create"> Create Restaurants And Meals  </Link>
      </li>
      : <li className="nav-item"></li>  }
      { props.user.role === "manager" ?
      <li className="nav-item">
      <Link className="nav-link" to="/restaurants">My Restaurants</Link>
      </li> :
      <li className="nav-item">
        <Link className="nav-link" to="/restaurants">All Restaurants</Link>
      </li>}
      { props.user.role === "manager" ?
      <li className="nav-item">        
        <Link className="nav-link" to="/orders">Orders for Me</Link>
      </li> :
       <li className="nav-item">        
      <Link className="nav-link" to="/orders">Your Orders</Link>
      </li> }
      <li className="nav-item">
      <Link className="nav-link" to="/restaurants"> <b>Hi,</b> {(props.user.name )}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={props.onClick} to=""> Logout</Link>
      </li>
    </>
  );
}

NavBarList.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};
