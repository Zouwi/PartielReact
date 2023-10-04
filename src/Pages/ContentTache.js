import React, {useEffect, useState} from 'react';
import Nav from "../Composants/Nav";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, CardBody, Col, Collapse, Form, FormGroup, Input, Label, Spinner} from "reactstrap";

const ContentTache = (args) => {
    const {slug} = useParams();
    const [tache, setTache] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState([]);
    const [contentComm, setContentComm] = useState([]);
    const [Message, setMessage] = useState("");
    const [userName, setUserName] = useState("");
    const [deleteComment, setDeleteComment] = useState(false);

    //La todo
    useEffect(() => {
        axios.get(`https://dummyjson.com/todos/${slug}`)
            .then(res=>{
                setTache(res.data)
                setIsLoaded(false)
            })
    }, [slug]);

    //supression comm
    useEffect(() => {
        if (deleteComment) {
            localStorage.removeItem(`comments_${tache.id}`);
            setDeleteComment(true);
        }
    }, [deleteComment, tache.id]);
    const handleDelete = (e) => {
        e.preventDefault();
        setDeleteComment(true);
    }

    if (tache.completed === true) {
        tache.completed = "✅";
    }
    else
    {
        tache.completed = "❌";
    }

    //toggle du btn pour changer le statut
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

    //changer le statut
    const [content, setContent] = useState([]);
    function handleInputChange(event) {
        setContent(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(content);
        const newStatut = {
            completed: content,
        }
        const saveStatut = JSON.parse(localStorage.getItem(`statut_${tache.id}`)) || [];

        // Mettez à jour les commentaires avec le nouveau commentaire
        const updateTache = [...saveStatut, newStatut];

        // Stockez les commentaires mis à jour dans le localStorage
        localStorage.setItem(`statut${tache.id}`, JSON.stringify(updateTache));

        // Mettez à jour l'état 'content' pour afficher les commentaires
        setContent(updateTache);
    }

    // Effacer les champs après la soumission
    //setContent("");

    useEffect(() => {
        // Récupérer le statut depuis le local storage lors de la première exécution
        const saveStatut = JSON.parse(localStorage.getItem(`statut${tache.id}`)) || [];
        if (saveStatut) {
            setContent(saveStatut);
        }
    }, [tache.id]);

    //envoyer des commentaires
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const Submit = (e) => {
        e.preventDefault();

        const newMessage = { text: Message, user: userName };

        const savedComments = JSON.parse(localStorage.getItem(`comments_${tache.id}`)) || [];

        // Mettez à jour les commentaires avec le nouveau commentaire
        const updatedComments = [...savedComments, newMessage];

        // Stockez les commentaires mis à jour dans le localStorage
        localStorage.setItem(`comments_${tache.id}`, JSON.stringify(updatedComments));

        // Mettez à jour l'état 'content' pour afficher les commentaires
        setContentComm(updatedComments);


        // Effacer les champs après la soumission
        setMessage("");
        setUserName("");
    };
    useEffect(() => {
        // Récupérer les messages depuis le local storage lors de la première exécution
        const savedComments = JSON.parse(localStorage.getItem(`comments_${tache.id}`)) || [];
        if (savedComments) {
            setContentComm(savedComments);
        }
    }, [tache.id]);

    return (
        <>
            <Nav></Nav>
        <div className="contenuContent">
            {isLoaded ? (
                <>
                    <Spinner>
                        Loading...
                    </Spinner>
                </>
            ) : (
                <>
                    <div className="titre">
                        {tache.todo}
                    </div>
                    <div className="isCompleted">
                        {tache.completed}
                    </div>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', width: "fit-content"}}>
                        Modifier le statut
                    </Button>
                    <Collapse isOpen={isOpen} {...args}>
                        <Card style={{width: 300+"px"}}>
                            <CardBody>
                                <FormGroup
                                    row
                                    tag="fieldset"
                                onSubmit={handleSubmit}>
                                    <Col sm={10}>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                                onChange={handleInputChange}
                                            />
                                            {' '}
                                            <Label check>
                                                Complété
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                                onChange={handleInputChange}
                                            />
                                            {' '}
                                            <Label check>
                                                En cours
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Button style={{width: "fit-content", margin: 10+"px"}} type="submit">
                                        Valider
                                    </Button>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </>
            )}
            <div className="titre">
                Commentaires
            </div>
            {isLoaded ? (
                <>
                    <Spinner>
                        Loading...
                    </Spinner>
                </>
            ) : (
                <>
                    {contentComm.map((message, index) => (
                        <div  className="commentaireBG" key={index}>
                            <div className="commUser">
                                {message.user}
                            </div>
                            <div className="commBody">
                            {message.text}
                            </div>
                            <Button color="danger" style={{marginTop: 10+"px"}} onChange={handleDelete}>
                                Supprimer le commentaire
                            </Button>
                        </div>
                    ))}
                    <div className="soustitre">Envoyer un commentaire</div>
                    <div className="commForm">
                        <Form onSubmit={Submit}>
                            <FormGroup floating>
                                <Input
                                    id="exampleEmail"
                                    name="userName"
                                    placeholder="Pseudo"
                                    type="text"
                                    value={userName}
                                    onChange={handleUserName}
                                />
                                <Label for="exampleEmail">
                                    Pseudo
                                </Label>
                            </FormGroup>
                            {' '}
                            <FormGroup floating>
                                <Input
                                    id="examplePassword"
                                    name="Message"
                                    placeholder="Message"
                                    type="text"
                                    value={Message}
                                    onChange={handleMessage}
                                />
                                <Label for="examplePassword">
                                    Message
                                </Label>
                            </FormGroup>
                            {' '}
                            <Button type="submit">
                                Envoyer
                            </Button>
                        </Form>
                    </div>
                </>
            )}
        </div>
        </>
    );
};

export default ContentTache;