import React from 'react';
import {Link} from "react-router-dom";
import Nav from "../Composants/Nav";

const NotFound = () => {
    return (
        <>
            <Nav></Nav>
        <div className="contenuContent">
            <div className="titre">Erreur 404</div>
            <div style={{margin: "auto"}}>La page n'existe pas
            <Link className="leBtn" to={"/home"}>Retour à l'accueil</Link>
            </div>
        </div>
        </>
    );
};

export default NotFound;