import React from 'react';
import Header from "../Composants/Header";
import Nav from "../Composants/Nav";
import img from '../img/welcome.jpg';

const Home = () => {
    return (
        <>
            <Nav></Nav>
        <div className="contenuContent">
            <Header title={"Accueil"}></Header>
            <img style={{width: 100+"%"}} src={img} alt="accueil"/>
        </div>
        </>
    );
};

export default Home;