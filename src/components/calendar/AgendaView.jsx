import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/AgendaView.css';
import { CalendarContext } from '../../context/CalendarContext';

const AgendaView = () => {

  const [currentDate, setCurrentDate] = useState(dayjs());
  const { events, setEvents } = useContext(CalendarContext);
  // Function to handle date navigation
  const handlePrevDay = () => {
    setCurrentDate(currentDate.subtract(1, 'day'));
  };

  const handleNextDay = () => {
    setCurrentDate(currentDate.add(1, 'day'));
  };

  // Function to get events for a specific day
  const getEventsForDay = (date) => {
    return events.filter(event => date.isSame(event.start, 'day'));
  };

  // Render the list of events for the selected day
  const renderEvents = () => {
    const dayEvents = getEventsForDay(currentDate);
    if (dayEvents.length === 0) {
      return <p>No events for today.</p>;
    }

    return dayEvents.map(event => (
      <div key={event.id} className="agenda-event">
        <p className="agenda-event-time">
          {event.start.format('h:mm A')} - {event.end.format('h:mm A')}
        </p>
        <p className="agenda-event-title">{event.title}</p>
      </div>
    ));
  };

  return (
    <div className="agenda-view">
      <div className="agenda-header">
        <button onClick={handlePrevDay}>Previous Day</button>
        <h2>{currentDate.format('dddd, MMMM D, YYYY')}</h2>
        <button onClick={handleNextDay}>Next Day</button>
      </div>
      <div className="agenda-content">
        {renderEvents()}
      </div>
    </div>
  );
};

export default AgendaView;
