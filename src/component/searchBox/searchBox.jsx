import React from 'react';
import './searchBoxStyle.css';

function SearchBox(props){
    return (
        <input type="search" 
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}>
        </input>
    )
}

export default SearchBox
