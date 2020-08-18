import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row center-align">
          <div className="col-md-6 center-align bg1 mt-2">
            <h2 className="brand-logo mt-4">Foodies</h2>
            <h4 className="tagline">Love at First Bite</h4>
            <br />
            <div className="row">
            <div className="col-6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn1 pull-right"
              >
                Register
              </Link>
            </div>
            <div className="col-6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn2 pull-left"
              >
                Log In
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
