import React from "react";
import "./Button.css";

function Button() {
    const handleClick = () => {
        alert("Hello Soumya...!!")
    }
    return (
        <div className="container">
            <button className="btn-click" onClick={() => handleClick()}>Click Me</button>
        </div>
    )
}

export default Button;