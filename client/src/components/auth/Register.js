import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { BsArrowLeft } from "react-icons/bs";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      role: "user"
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/restaurants");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { password, role, password2, email, name } = this.state;
    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
      role: role
    };

    const { history, registerUser: registerUserAction } = this.props;
    registerUserAction(newUser, history);
  };

  onCheckboxChange = e => {
    this.setState({ role: e.target.checked ? "manager" : "user" });
  };

  render() {
    const { password, role, password2, email, name, errors } = this.state;
    return (
      <div className="container">
        <div className="row center-align">
          <div className="col-8 bg1 ">
            <Link to="/" className="btn-flat waves-effect">
            <BsArrowLeft /> Back to
              home
            </Link>
            <div className="col-12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="white-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col-12 mt-3">
                <input
                  onChange={this.onChange}
                  value={name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder = "Name"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />

                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col-12  mt-3">
                <input
                  onChange={this.onChange}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col-12 mt-3">
                <input
                  onChange={this.onChange}
                  value={password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col-12 mt-3">
                <input
                  onChange={this.onChange}
                  value={password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />                
                <span className="red-text">{errors.password2}</span>
              </div>
              
              <label style={{ margin: 15 }} htmlFor="role">
              <input
                  onChange={this.onCheckboxChange}
                  value={role === "manager"}
                  error={errors.role}
                  id="role"
                  type="checkbox"
                  className="chk"
                />
                 <p className="led">Is Restaurant Manager</p>
                 </label>
              <span className="red-text">{errors.role}</span>

              <div className="col-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-medium btn1"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));