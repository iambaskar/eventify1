import React, { useContext, useState } from 'react'
import { CalendarContext } from '../../context/CalendarContext';
import dayjs from 'dayjs';
export default function EventCreationForm() {
  const { events, setEvents } = useContext(CalendarContext);
  const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [isFullDay, setIsFullDay] = useState(false);
  return (
    <div>
      <div className="form-group">
        <label htmlFor="title">Event Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>

      {!isFullDay && (
        <>
          <div className="form-group">
            <label htmlFor="startTime">Start Time:</label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </>
      )}
      <div className="form-group">
        <label htmlFor="isFullDay">Full Day Event:</label>
        <input
          type="checkbox"
          id="isFullDay"
          checked={isFullDay}
          onChange={(e) => setIsFullDay(e.target.checked)}
        />
      </div>
      <button onClick={() => {
        setEvents([...events, {
          id: events.length + 1,
          title: title,
          start: isFullDay ? dayjs(startDate).startOf('day') : dayjs(`${startDate} ${startTime}`),
          end: isFullDay ? dayjs(endDate).endOf('day') : dayjs(`${endDate} ${endTime}`),
          isFullDay: isFullDay,

        }])
      }}>Save Event</button>
    </div>
  )
}

