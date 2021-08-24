import React from 'react';
import './cardList.css';
import Card from '../card/card';

function Cardlist(props){
    // console.log(props.children);
    //Cardlist component is called only once but to print each child component or each h1 we use prop.children. and grid class is applied only to the div containing all the childrens
    //to print each of the child we use prop.children
    return <div className="card-list">
        {
        //arrow function with x as argument which accesses individual array elements.
        //key is used to uniquely identify html elements
        //array of h1's
        props.monsters.map(x => <Card key={x.id} monster={x}> </Card>)
        
        }
    </div>;
}

export default Cardlist;