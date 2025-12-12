import clsx from "clsx";
import styles from './CourseCard.module.scss';

function CourseCard({ title, level, isFree, isNew, duration }) {
    return (
        <div 
            className={clsx(
                styles.card,
                {
                    [styles.free]: isFree,
                    [styles.paid]: !isFree,
                    [styles.levelBeginner]: level === "beginner",
                    [styles.levelIntermediate]: level === "intermediate",
                    [styles.levelAdvanced]: level === "advanced",
                    [styles.new]: isNew
                }
            )}
        >
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.level}>Level: {level}</p>
            <p className={styles.duration}>Duration: {duration}</p>
        </div>
    );
}

export default CourseCard;