import React, { Component } from 'react';
import Location from './Location';
import locationData from '../locationData';
class LocationList extends Component {
    render(){
        return (
            <div id="locations"><a name="locations"></a>
                <h1>Locations:</h1>
                <div className="locations">
                {locationData.map((loc, i) => {
                    return <Location key={i} loc={loc}/>
                })}
                </div>
            </div>
        );
    }
}

export default LocationList;