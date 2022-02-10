import React, { Component } from 'react'; // import react and component from React
import { Link } from 'react-router-dom'; // allow us to Link to different routes

export default class Navbar extends Component{ // all components start like this

    render() { //  All components have to render something
        return (
            // className - specify the style using bootstrap styles (check bootstrap documentation)
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">  
                <Link to="/" className="navbar-brand">ExerTracker</Link> 
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}