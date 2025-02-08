import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    console.log("Navbar component rendered");
    return(
        <div>
            <h1>Navbar</h1>
            <NavLink to="/User/Login">
                <h1>User Login</h1>
            </NavLink>
        </div>
    )
}

export default Navbar