import CourseCard from '../CourseCard/CourseCard';
import styles from './CoursesList.module.scss';

function CoursesList({courses}) {
    return (
        <div className={styles['courses-wrapper']}>
            {courses?.map( ({ id, title, level, isFree, isNew, duration }) => (
                <CourseCard
                    key={id}
                    title={title}
                    level={level}
                    isFree={isFree}
                    isNew={isNew}
                    duration={duration}
                />
            ))}
        </div>
    );
}

export default CoursesList;