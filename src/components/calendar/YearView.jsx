import React, { useState } from 'react';
import dayjs from 'dayjs';
import '../../styles/calendar/YearView.css';

const YearView = () => {
  const [currentYear, setCurrentYear] = useState(dayjs().year());

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const months = Array.from({ length: 12 }, (_, index) =>
    dayjs().month(index).format('MMMM')
  );

  const renderMonth = (monthIndex) => {
    const startOfMonth = dayjs().year(currentYear).month(monthIndex).startOf('month');
    const endOfMonth = dayjs().year(currentYear).month(monthIndex).endOf('month');
    const startOfWeek = startOfMonth.startOf('week');
    const endOfWeek = endOfMonth.endOf('week');

    const days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day);
      day = day.add(1, 'day');
    }

    return (
      <div className="year-view-month" key={monthIndex}>
        <div className="year-view-month-header">{startOfMonth.format('MMMM')}</div>
        <div className="year-view-weekdays">
          {Array.from({ length: 7 }, (_, index) => (
            <div key={index} className="year-view-weekday-cell">
              {dayjs().day(index).format('dd')}
            </div>
          ))}
        </div>
        <div className="year-view-grid">
          {days.map((dayItem, index) => (
            <div
              key={index}
              className={`year-view-day-cell ${
                dayItem.month() === monthIndex ? 'current-month' : 'grey-out'
              }`}
            >
              {dayItem.format('DD')}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="year-view">
      <div className="year-view-header">
        <button onClick={handlePrevYear}>Previous Year</button>
        <h2>{currentYear}</h2>
        <button onClick={handleNextYear}>Next Year</button>
      </div>
      <div className="year-view-content">
        {months.map((_, monthIndex) => renderMonth(monthIndex))}
      </div>
    </div>
  );
};

export default YearView;
