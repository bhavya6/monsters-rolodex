import React from 'react';
import "./card.css";

function Card(props){
    return (
    <div className="card-container">
        {/* here props.key is not working. IDK */}
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" />
        <h1 >{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
    )
}

export default Card