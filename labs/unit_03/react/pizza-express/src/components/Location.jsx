import React, { Component } from 'react';

class Location extends Component {
    render(){
        return (
            <div className="location">
                <h3>{this.props.loc.name}</h3>
                <h3>{this.props.loc.address}</h3>
                <h3>{this.props.loc.phone}</h3>
            </div>
        );
    }
}

export default Location;