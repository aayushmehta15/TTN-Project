import React from "react";
import "./Button.css";
function Button(props) {
    return (
        <div>
            <button onClick={props.onclickHandler} className="buttonStyle">
                {props.children}
            </button>
        </div>
    );
}

export default Button;
