import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const Liste = ({todo, id, check}) => {
    if (check === true) {
        check = "✅";
    }
    else {
        check = "❌";
    }
    return (
        <div className="todoList">
            <div className="laTodo">
                <div className="numero">
                {id}
                </div>
                <div style={{color: "white"}}>
                {todo}
                </div>
            </div>
            <div>
                <div className="checker">
                    {check}
                </div>
            <Button color="light" style={{margin: 20+"px"}}>
                <Link style={{textDecoration: "none", color: "#282c34"}} to={`/taches/${id}`}>
                    En savoir plus
                </Link>
            </Button>
            </div>

        </div>
    );
};

export default Liste;