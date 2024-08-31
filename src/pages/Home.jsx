import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
        <h1>Eventify</h1>
        <p>Eventify is a feature-rich calendar application built with React and Vite. It includes diverse views like month, work week, day, and year, utilizing Day.js for powerful date handling. Plan, track, and manage your events effortlessly in one place.</p>
        <Link to='/calendar/month'>View Calendar</Link>
    </div>
  )
}
