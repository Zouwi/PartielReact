import React, {useEffect, useState} from 'react';
import Header from "../Composants/Header";
import {ListGroup, ListGroupItem, Spinner} from "reactstrap";
import axios from "axios";
import Liste from "../Composants/Liste";
import Nav from "../Composants/Nav";

const Taches = () => {
    const [taches, setTaches] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
            .then(res=>{
                setIsLoading(false)
                console.log(res);
                setTaches(res.data.todos)
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des taches :", error);
            })
    })
    return (
        <>
            <Nav></Nav>
        <div className="contenuContent">
            <Header title={"Taches"}></Header>
            {isLoading ?(
                <Spinner>
                    Loading...
                </Spinner>
            ) : (
                <>
                    {taches && taches.map((tache) => (
                        <>
                    <Liste id={tache.id} todo={tache.todo} check={tache.completed}/>
                        </>
                    ))}
                </>
            )}
        </div>
        </>
    );
};

export default Taches;