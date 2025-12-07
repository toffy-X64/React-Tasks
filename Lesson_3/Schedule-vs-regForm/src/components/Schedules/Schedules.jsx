import './Schedules.css';

const weekdayAccusative = {
    monday: "понеділок",
    tuesday: "вівторок",
    wednesday: "середу",
    thursday: "четвер",
    friday: "п’ятницю",
    saturday: "суботу",
    sunday: "неділю",
};

function Schedules({children, date = Date.now()}) {    
    const dateObject = new Date(date)
    const useUkrainianWeekday = () => {
        const weekday_en = dateObject.toLocaleDateString('en-US', {weekday: 'long'}).toLocaleLowerCase();
        return weekdayAccusative[weekday_en] || dateObject.toLocaleDateString('default', {weekday: 'long'});
    };

    return (
        <div className='schedules-wrapper'>
            <div className="schedules-header">
                <h2 className="schedules-title">Розклад на {useUkrainianWeekday()}</h2>
                <p className="schedules-date">{dateObject.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric' })}</p>
            </div>
            <div className="periods-wrapper">
                {children}
            </div>
        </div>
    );
}

export default Schedules;