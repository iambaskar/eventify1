import React from 'react'
import '../../styles/calendar/EventDetailsCard.css'
export default function EventDetailsCard({ 
  event, onClose
}) {
  return (
    <div className="event-details-card">
      <h3 className="event-details-card-title">Meeting with client</h3>
      <div className="event-details-card-box">
        <p>From</p>
        <p>Tuesday, 6 August 2024, 10:00 AM</p>
      </div>
      <div className="event-details-card-box">
        <p>From</p>
        <p>Tuesday, 6 August 2024, 10:00 AM</p>
      </div>
      <p className="event-details-card-desc-txt">Description</p>
      <p className="event-details-card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti asperiores ullam quis odio, id nihil veniam, dicta blanditiis nostrum ipsa incidunt ea odit aliquam, animi amet! Itaque culpa quis laudantium!</p>
      <p className="event-details-card-desc-txt">Meet link</p>
      <p className="event-details-card-desc">https://meet.google.com/hzv-zqex-kcm</p>
      <p className="event-details-card-desc-txt">Members</p>
      <div className="event-detail-card-members">
        <div className="event-detail-card-member-">
          <img src="" alt="" />
          <p>Ponbaskar</p>
        </div>
        <div className="event-detail-card-member-">
          <img src="" alt="" />
          <p>Ponbaskar</p>
        </div>
        <div className="event-detail-card-member-">
          <img src="" alt="" />
          <p>Ponbaskar</p>
        </div>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  )
}
