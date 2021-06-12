import React from "react";
import "./StyledTextField.css";
function StyledTextField(props) {
    return (
        <React.Fragment>
            <input
                type="text"
                placeholder={props.placeholder}
                className="style-input"
                value={props.value}
                onChange={props.textChangeHandler}
                required
            />
        </React.Fragment>
    );
}

export default StyledTextField;
