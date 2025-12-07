import schedulesData from './mocks/schedulesData';
import countriesData from './mocks/countriesData';

import Schedules from "./components/Schedules/Schedules";
import Schedule from './components/Schedule/Schedule';
import UserProfileForm from './components/UserProfileForm/UserProfileForm';

function App() {
    return (
        <div className="app">
            <div className="container">
                <Schedules date={'2008-03-04'} >
                    {schedulesData.map(e => (
                        <Schedule 
                            key={e.id}
                            time={e.time}
                            duration={e.duration}
                            subject={e.subject}
                            classroom={e.classroom}
                            teacher={e.teacher}
                            color={e.color}
                        />
                    ))}
                </Schedules>

                <UserProfileForm countries={countriesData}/>
            </div>
        </div>
    );
}

export default App;