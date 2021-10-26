import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Events = () => {
    const [eventDetails, setEventDetails] = useState([
        {id: 1, name: "Event1"},
        {id: 2, name: "Event2"},
        {id: 3, name: "Event3"},
        {id: 4, name: "Event4"},

    ]);

    const query = new URLSearchParams(useLocation().search);
    console.log(query.get('name'));

    return ( <div>
        <h1>Events Details</h1>
        {eventDetails.map((event)=>{
            return(<li key={event.id}>
                    <Link to={`/eventdetails/${event.id}`}>{event.name}</Link>
                </li>)
        })}
    </div>  );
}
 
export default Events;