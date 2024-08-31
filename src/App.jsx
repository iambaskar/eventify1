import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import CalendarPage from './pages/CalendarPage'
import WeekView from './components/calendar/WeekView'
import WorkWeekView from './components/calendar/WorkWeekView'
import MonthView from './components/calendar/MonthView'
// import UpdatedCalendar from './pages/UpdatedCalendar'

function App() {
  const today = new Date();
  return (
    <div className="app">
      <Layout />
      {/* <WeekView /> */}
      {/* <WorkWeekView />  */}
      {/* <MonthView /> */}
    </div>
  )
}

export default App
