import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CalendarPage from './CalendarPage'
import WeekView from '../components/calendar/WeekView'
import MonthView from '../components/calendar/MonthView'
import WorkWeekView from '../components/calendar/WorkWeekView'
import DayView from '../components/calendar/DayView'
import AgendaView from '../components/calendar/AgendaView'
import YearView from '../components/calendar/YearView'
import Home from './Home'

export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="month" element={<MonthView />} />
          <Route path='year' element={<YearView />} />
          <Route path="week" element={<WeekView />} />
          <Route path="workweek" element={<WorkWeekView />} />
          <Route path="day" element={<DayView />} />
          <Route path="agenda" element={<AgendaView />} />
        </Route>
      </Routes>
    </Router>
  )
}
