import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/nature_2823530.png';

const Nav = () => {
    return (
        <nav className="entete">
            <div className="navFlex">
            <Link to={"/home"}>Accueil</Link>
            <Link to={"/taches"}>Tâches</Link>
            <Link to={"/contact"}>Contact</Link>
            </div>
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </nav>
    );
};

export default Nav;