import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

import "./index.css";
import { NavBarList } from "./NavBarList";

class NavBar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    //console.log("u-navibar- ",this.props.auth.user)
    return (
      <React.Fragment>

        <nav className="navbar navbar-expand-lg ">
          <a href="/" className="navbar-brand brand-logo">
              &nbsp;&nbsp;Foodies
          </a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          {Object.keys(user || {}).length !== 0 ? (
            <ul className="navbar-nav ml-md-auto">
            
              <NavBarList user={user} onClick={this.onLogoutClick} />     
              
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>) : null}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
