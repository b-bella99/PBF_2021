import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from '../actions/auth';
import './style/Navbar.css';
import apotek from '../logo.png';

class Navbar extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <nav className="navbar bg-white">
                <h1>
                    <div className="text-primary"><img src={apotek} width='50px' height='50px'></img> Apotek <b className="text-warning">Tenpoles</b></div>
                </h1><br></br>
                <ul>
                    <li>
                        <Link to='/'><b>🏠 Home</b></Link>
                    </li>
                    <li>
                        <Link to='/healthcare'><b>🩺 Health Care</b></Link>
                    </li>
                    <li>
                        <Link to='/skincare'><b>✨ Skin Care</b></Link>
                    </li>
                    <li>
                        <Link to='/about'><b>🔎 About</b></Link>
                    </li>
                    <li className="float-right">
                        <Link onClick={this.handleLogout}><b>🚪 Logout</b></Link>
                        {isLoggingOut && <p>Logging Out....</p>}
                        {logoutError && <p>Error logging out</p>}
                    </li>
                </ul>
                <hr />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Navbar);