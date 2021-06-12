import React from "react";

function Avatar(props) {
    return (
        <img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            style={{ borderRadius: "50%", marginRight: "8px" }}
        />
    );
}

export default Avatar;
