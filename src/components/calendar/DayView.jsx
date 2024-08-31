import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/DayView.css'; // Make sure to create this CSS file or adjust as needed
import { CalendarContext } from '../../context/CalendarContext';

const DayView = () => {
  const [currentDay, setCurrentDay] = useState(dayjs().startOf('day')); 

  const hours = Array.from({ length: 24 }, (_, index) => index);
  const { events, setEvents } = useContext(CalendarContext);

  const handlePrevDay = () => {
    setCurrentDay(currentDay.subtract(1, 'day'));
  };

  const handleNextDay = () => {
    setCurrentDay(currentDay.add(1, 'day'));
  };

  const renderTime = (hour) => {
    const time = dayjs().hour(hour).minute(0).second(0).millisecond(0);
    return time.format('hA');
  };

  const allDayEvents = events.filter(
    (event) =>
      event.isFullDay &&
      (currentDay.isSame(event.start, 'day') || currentDay.isSame(event.end, 'day') || (currentDay.isAfter(event.start, 'day') && currentDay.isBefore(event.end, 'day'))) 
  )
  const timedEvents = events.filter((event) => !event.isFullDay);

  const renderEvents = (hour) => {
    return timedEvents
      .filter(event => currentDay.isSame(event.start, 'day'))
      .filter(event => hour >= event.start.hour() && hour < event.end.hour())
      .map(event => {
        const eventStartHour = event.start.hour();
        const eventEndHour = event.end.hour();
        const top = (eventStartHour - hour) * 60; // Position from the top based on start hour
        const height = (eventEndHour - eventStartHour) * 60; // Height of the event

        return (
          <div
            key={event.id}
            className="event"
            style={{
              top: `${top}px`,
              height: `${height}px`,
              position: 'absolute',
              left: '0',
              width: '100%',
              backgroundColor: '#87ceeb',
              color: '#fff',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            {event.title}
          </div>
        );
      });
  };

  return (
    <div className="day-view">
      <div className="day-header">
        <div className="day-title">
          <div className='day-date'>{currentDay.format('D')}</div>
          <p>{currentDay.format('dddd')}</p>
          <div className="full-day-event">
            {
              allDayEvents.map((event) =>
                <p>{event.title}</p>
              )
            }
          </div>
        </div>
      </div>
      <div className="day-body">
        <div>
          {hours.map((hour) => (
            <div key={hour} className="day-time-row">
              <div className="day-time-slot">{renderTime(hour)}</div>
              <div className="day-hour-cell" style={{ position: 'relative' }}>
                {renderEvents(hour)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayView;
