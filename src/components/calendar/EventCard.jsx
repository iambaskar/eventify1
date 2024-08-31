import React from 'react'

export default function EventCard({ title, color }) {
    let [r, g, b, a] = color.match(/\d+(\.\d+)?/g).map(Number);
    a = 0.1;
    const reducedColor = `rgba(${r},${g},${b},${a})`
    return (
        <div className="event-card" style={{
            backgroundColor: reducedColor,
            color: color,
            padding: '0.4rem',
            borderRadius: '4px',
            borderLeft: `3.5px solid ${color}`,
            cursor: 'pointer',
        }}
        >
            <p style={{ fontSize: '0.9rem' , fontFamily: 'EuclidMedium'}}
            >{title}</p>
        </div>
    )
}
