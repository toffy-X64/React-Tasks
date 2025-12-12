import styles from './CourseFilter.module.scss';
import { courses } from '../../mocks/coursesData.js';
import { useState } from 'react';

function CourseFilter({ setState }) {
    const [filter, setFilter] = useState({
        level: 'all',
        onlyFree: false,
        onlyNew: false,
        total: courses.length
    });

    const applyFilter = (newFilter) => {
        let filtered = [...courses];

        if (newFilter.level !== "all") {
            filtered = filtered.filter(item => item.level === newFilter.level);
        }

        if (newFilter.onlyFree) {
            filtered = filtered.filter(item => item.isFree === true);
        }

        if (newFilter.onlyNew) {
            filtered = filtered.filter(item => item.isNew === true);
        }

        setFilter({
            ...newFilter,
            total: filtered.length
        });

        setState(filtered);
    };

    const updateFilter = (field, value) => {
        const newFilter = { ...filter, [field]: value };
        applyFilter(newFilter);
    };

    return (
        <div className={styles.filter}>
            <div className={styles['filter-items']}>

                <span>
                    <p>Level:</p>
                    <select
                        value={filter.level}
                        onChange={e => updateFilter("level", e.target.value)}
                    >
                        <option value="all">All levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </span>

                <span>
                    <input
                        type="checkbox"
                        id="only-free"
                        checked={filter.onlyFree}
                        onChange={e => updateFilter("onlyFree", e.target.checked)}
                    />
                    <label htmlFor="only-free">Only Free Courses</label>
                </span>

                <span>
                    <input
                        type="checkbox"
                        id="only-new"
                        checked={filter.onlyNew}
                        onChange={e => updateFilter("onlyNew", e.target.checked)}
                    />
                    <label htmlFor="only-new">Only New Courses</label>
                </span>

            </div>

            <p className={styles['total-found']}>Found: {filter.total} courses</p>
        </div>
    );
}

export default CourseFilter;