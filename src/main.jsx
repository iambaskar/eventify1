import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CalendarContextProvider }  from './context/CalendarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarContextProvider>
      <App />
    </CalendarContextProvider>
  </StrictMode>
);

