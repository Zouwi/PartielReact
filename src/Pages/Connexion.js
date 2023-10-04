import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import Header from "../Composants/Header";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Connexion = () => {
    const [loginError, setLoginError] = React.useState(null);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username: e.target.pseudo.value,
                password: e.target.password.value
            });
            if (response.data.token !== undefined) {
                localStorage.setItem("token", response.data.token);
                setLoginError(null);

                navigate('/taches');
            } else {
                setLoginError("Nom d'utilisateur ou mot de passe incorrect.");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            setLoginError("Nom d'utilisateur ou mot de passe incorrect.");
        }
    }

    return (
        <div className="contenuContent">
            <Header title={"Connexion"}></Header>
            <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="pseudo"
                        placeholder="Pseudo"
                        type="text"
                    />
                    <Label for="exampleEmail">
                        Pseudo
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                {' '}
                <Button type="submit">
                    Se connecter
                </Button>
            </Form>
        </div>
    );
};

export default Connexion;