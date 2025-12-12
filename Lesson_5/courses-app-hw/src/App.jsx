import { useState } from 'react';

import CoursesList from './components/CoursesList/CoursesList.jsx';
import CourseFilter from './components/CourseFilter/CourseFilter.jsx';

const App = () => {
    const [courses, setCourses] = useState([]);

    return (
        <div className="app">
            <div className="container">
                <h1>Available courses</h1>
                <CourseFilter
                    setState = {setCourses}
                />
                <CoursesList courses={courses} />
            </div>
        </div>
    );
}

export default App;