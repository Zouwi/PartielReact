import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import emailjs from "emailjs-com";

const Email = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        to_name: '',
        message: '',
    })

    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_b2x9nsk',
            'template_4lrm3gl',
            formData,
            '-KTgo5hgUnclsWgPW'
        )
            .then((result)=> {
                console.log(result.text);
            });
    };
    return (
        <div>
            <Form style={{color: "#282c34", width: 100+"%"}} onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        name="from_name"
                        placeholder="Your name"
                        type="text"
                        onChange={handleInputChange}
                    />
                    <Label for="exampleEmail">
                        Your name
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        name="to_name"
                        placeholder="Recipient's name"
                        type="text"
                        onChange={handleInputChange}
                    />
                    <Label for="examplePassword">
                        Recipient's name
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input style={{height: 100}}
                           name="message"
                           placeholder="Your message"
                           onChange={handleInputChange}
                           type="textarea"
                    />
                    <Label for="examplePassword">
                        Your message
                    </Label>
                </FormGroup>
                {' '}
                <Button type="submit">
                    Envoyer l'email
                </Button>
            </Form>
        </div>
    );
};

export default Email;