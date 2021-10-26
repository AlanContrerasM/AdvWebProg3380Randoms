import React from 'react';
import Halloween from '../images/halloween.jpg';
import Christmas from '../images/christmas.jpg'


const EventDetails = ({match, history}) => {

    
    //to get id, we are supposed to be passed on the url.

    //history
    const handleBack= () =>{
        //we use history cause it sets the back button to this page. with push.
        history.push("/events");
        
    }
    return ( <div className="EventDetails">
        <h1>Event Details {match.params.id}</h1>
        <img src={Halloween} alt="Halloween"/>
        <br/>
        <button onClick={handleBack}>Go Back</button>
    </div> );
}
 
export default EventDetails;