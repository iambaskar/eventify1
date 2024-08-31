import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/WorkWeekView.css';
import { CalendarContext } from '../../context/CalendarContext';
const WorkWeekView = () => {
  const { currentWorkWeek, setWorkWeekView, events } = useContext(CalendarContext);
  const startDate = currentWorkWeek.startOf('week').add(1, 'day');
  const weekdays = Array.from({ length: 5 }, (_, index) => startDate.add(index, 'day'));
  const hours = Array.from({ length: 24 }, (_, index) => index);

  // const events = [
  //   {
  //     id: 1,
  //     title: 'Meeting with Bob',
  //     start: dayjs('2024-08-22T09:00:00'),
  //     end: dayjs('2024-08-22T10:00:00')
  //   },
  //   {
  //     id: 2,
  //     title: 'Lunch Break',
  //     start: dayjs('2024-08-28T12:00:00'),
  //     end: dayjs('2024-08-28T18:00:00')
  //   }
  // ];

  // const handlePrevWeek = () => {
  //   setCurrentWeek(currentWeek.subtract(1, 'week'));
  // };

  // const handleNextWeek = () => {
  //   setCurrentWeek(currentWeek.add(1, 'week'));
  // };

  const renderTime = (hour) => {
    try {
      const time = dayjs().hour(hour).minute(0).second(0).millisecond(0);
      return time.format("hA");
    } catch (error) {
      console.error("Error in rendering time:", error);
      return "Invalid time";
    }
  };

  const renderEvents = (day, hour) => {
    return events
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
              backgroundColor: event.color,
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
    <div className="work-week-view">
      <div className="work-week-header">
        <div className="time-slot"></div>
        {weekdays.map((day, index) => (
          <div key={index} className="work-week-day-header">
            <p className='work-week-date'>{day.format('D')}</p>
            <p>{day.format('dddd')}</p>
          </div>
        ))}
      </div>
      <div className="work-week-body">
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

export default WorkWeekView;
