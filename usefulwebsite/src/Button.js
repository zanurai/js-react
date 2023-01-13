import React from "react";


//const Button = (props) => {

//return <button className="button">{props.name}</button>;
//}

const Button = ({ name, link }) => {
    return <a href={link} target="_blank"><button className="button">{name}</button></a>;
}

export default Button;