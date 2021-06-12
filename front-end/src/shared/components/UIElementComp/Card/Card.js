import React from "react";
import "./Card.css";
function Card(props) {
    return (
        <React.Fragment>
            <div className="card-style">{props.children}</div>
        </React.Fragment>
    );
}

export default Card;
