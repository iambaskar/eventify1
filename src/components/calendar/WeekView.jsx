import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/WeekView.css';
import { CalendarContext } from '../../context/CalendarContext';
const WeekView = () => {
  const { currentWeek, setCurrentWeek, events, setEvents } = useContext(CalendarContext);
  // const startDate = currentWeek.startOf('week').add(1, 'day'); // Week starts on Monday
  const weekdays = Array.from({ length: 7 }, (_, index) => currentWeek.add(index, 'day'));
  const hours = Array.from({ length: 24 }, (_, index) => index);



  const handlePrevWeek = () => {
    setCurrentWeek(currentWeek.subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setCurrentWeek(currentWeek.add(1, 'week'));
  };

  const renderTime = (hour) => {
    try {
      const time = dayjs().hour(hour).minute(0).second(0).millisecond(0);
      return time.format("hA");
    } catch (error) {
      console.error("Error in rendering time:", error);
      return "Invalid time";
    }
  };

  const fullDayEvents = events.filter((event) => event.isFullDay);
  const timedEvents = events.filter((event) => !event.isFullDay);

  const renderEvents = (day, hour) => {
    return timedEvents
      .filter(event => day.isSame(event.start, 'day'))
      .filter(event => hour >= event.start.hour() && hour < event.end.hour())
      .map(event => {
        const eventStartHour = event.start.hour();
        const eventEndHour = event.end.hour();
        const top = (eventStartHour - hour) * 60;
        const height = (eventEndHour - eventStartHour) * 60;

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
    <div className="week-view">
      <div className="week-header">
        <div className="time-slot"></div>
        {weekdays.map((day, index) => (
            <div key={index} className="week-day-header">
              <p className='week-date'>{day.format('D')}</p>
              <p>{day.format('dddd')}</p>
              <div className="full-day-event">
                {
                  fullDayEvents.map((event) => 
                    day.isSame(event.start, 'day') ? <p>{event.title}</p> : null
                  )
                }
              </div>
            </div>
        ))}
      </div>
      <div className="week-body">
        {hours.map((hour) => (
          <div key={hour} className="time-row">
            <div className="time-slot">{renderTime(hour)}</div>
            {weekdays.map((day, index) => (
              <div key={index} className="day-cell" style={{ position: 'relative' }}>
                {renderEvents(day, hour)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
