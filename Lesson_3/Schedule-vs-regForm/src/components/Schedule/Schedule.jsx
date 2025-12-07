import './Schedule.css';

function Schedule({time, duration, subject, classroom, teacher, color}) {
    return (
        <div 
            className='period-wrapper' 
            style={{
                borderLeft: `4px solid ${color}`
            }}
        >
            <div className="period-time-wrapper">
                <p className="period-start">{time}</p>
                <p className="period-duration">{duration}</p>
            </div>
            <div className="period-data-wrapper">
                <h4 className="period-name">{subject}</h4>
                <p className="period-location">{classroom}</p>
                {teacher && <p className="period-teacher">Викладач: {teacher}</p>}
            </div>
        </div>
    );
}

export default Schedule;