import React, { Component } from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData';


class MenuList extends Component {
    render(){
        return (
            <div className="menu">
                <a name="menu"></a>
                <h1>Menu:</h1>
            <div className="menu-container">
                {pizzaData.map((piz, i) => {
                    return <MenuItem key={i} piz={piz}/>
                })}
            </div>
            </div>
        );
    }
}

export default MenuList;