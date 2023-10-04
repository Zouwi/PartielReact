import React from 'react';
import Header from "../Composants/Header";
import Nav from "../Composants/Nav";
import Email from "../Composants/Email";

const Contact = () => {
    return (
        <>
            <Nav></Nav>
        <div className="contenuContent">

            <Header title={"Contact"}></Header>
                <div className="soustitre">
                    Envoyer un mail
                </div>
                <Email></Email>
        </div>
        </>
    );
};

export default Contact;