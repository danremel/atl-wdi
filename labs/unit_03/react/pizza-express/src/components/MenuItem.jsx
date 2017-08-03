import React, { Component } from 'react';

class MenuItem extends Component {
    render(){
        return (
            <div className="menu-item">
                <img src={this.props.piz.image} alt=""/>
                <div className="menu-description">
                <p className="menu-item-name">{this.props.piz.name}</p>
                <p>{this.props.piz.price}</p>
                <p>{this.props.piz.description}</p>
                </div>
            </div>
        );
    }
}

export default MenuItem;