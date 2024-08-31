// import React, { useState } from 'react';
// // import Day from '../components/calendar/Day';
// // import Header from '../components/calendar/Header';
// // import '../styles/calendar/Calendar.css';
// const CalendarPage = () => {

//   // const [currentDate, setCurrentDate] = useState(new Date());

//   // const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
//   // const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
//   // const daysInMonth = [];
//   // for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
//   //   daysInMonth.push({ date: new Date(currentDate.getFullYear(), currentDate.getMonth(), i), currentMonth: true });
//   // }

//   // const firstDayIndex = firstDayOfMonth.getDay();
//   // console.log(firstDayIndex)

//   // for (let i = firstDayIndex; i > 0; i--) {
//   //   const prevDate = new Date(firstDayOfMonth);
//   //   prevDate.setDate(firstDayOfMonth.getDate() - i);
//   //   daysInMonth.unshift({ date: prevDate, currentMonth: false });
//   // }

//   // const lastDayIndex = lastDayOfMonth.getDay();
//   // console.log(lastDayIndex)
//   // for (let i = 1; i <= 6 - lastDayIndex; i++) {
//   //   const nextDate = new Date(lastDayOfMonth);
//   //   nextDate.setDate(lastDayOfMonth.getDate() + i);
//   //   daysInMonth.push({ date: nextDate, currentMonth: false });
//   // }

//   // const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   return (
//     <div className="calendar">
//       <Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
//       <div className="day-names">
//         {dayNames.map((dayName, index) => (
//           <div key={index} className="day-name">
//             {dayName}
//           </div>
//         ))}
//       </div>
//       <div className="calendar-grid">
//         {daysInMonth.map((dayObj, index) => (
//           <Day key={index} day={dayObj.date} currentMonth={dayObj.currentMonth} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarPage;

import React from 'react'
import TopBar from '../components/calendar/TopBar'
import { useLocation } from 'react-router-dom'

export default function CalendarPage() {
  return (
    <>
      <TopBar />
    </>
  )
}

