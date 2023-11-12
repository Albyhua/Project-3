import React, { useState } from "react";
import "../../styles/Invitation.css";
import { EVENT_DATA } from "../../utils/queries";
import { useQuery } from '@apollo/client';



export function Invitation(props) {

  const { data, loading, error } = useQuery(EVENT_DATA)
  const eventData = data?.users || []
  console.log(eventData);

  // const [response, setResponse] = useState('');

  const handleFormSubmit = async(event)=>{
    event.preventDefault();
    try {
      const data = await response({
        variables: { RSVP }
      })

      window.location.href="/dashboard";
    }catch (error) {
      console.log(error);
  }
  };


  if (loading) return <h2>Loading....</h2>

  return (
    <section>
      <div className="invitation-container">
      <h2>You're invited! </h2>
        <form className="invitation-form" onSubmit = {handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Event title</label>
            <div className="invitation-content">
              stuff here
            </div>
            {eventData.title}
          </div>

          <div className="form-group-time">
            <label className="form-label"> Date</label>
            {eventData.date}
          </div>

          <div className="form-group-time">
            <label className="form-label">
              {/* {" "} */}
              Time, date and time to be side by side
            </label>
            {eventData.time}
          </div>

          <div className="form-group">
            <label className="form-label">Location</label>
            {eventData.location}
          </div>

          <div className="form-group">
            <label className="form-label"> Description</label>
            {eventData.description}
          </div>
          
         <div>
         <button className="btn" id="accept"> Accept</button>           
         <button className="btn" id="decline"> Decline</button>
         <button className="btn" id="maybe"> Maybe</button>
           </div>
        </form>
      </div>
    </section>
  );
}

export default Invitation;
