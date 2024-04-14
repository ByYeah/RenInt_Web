//Import css styles and pages components
import React, { useState } from 'react';
import './Activity.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MiniCalendar.css';

//Calender section
function Activity() {
  const [date, setDate] = useState(new Date());

  return(
    <>
      <div className="activitySection flex">
        <div className="heading">
          <h1>
            <ion-icon name="calendar-outline"></ion-icon> | Calendario!
          </h1>
          <div className="cardCalendar flex">
            <div className='calendar-container'>
              <Calendar onChange={setDate} value={date} />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Activity