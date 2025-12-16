import { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = ({onClose, onRemove, currentTask}) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.code === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', handleKeydown);

        const handleMouseClick = (e) => {
            if (e.target == overlayRef.current)
                onClose();
        };
        document.addEventListener('click', handleMouseClick);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('click', handleMouseClick)
        };
    }, []);

    return (
        <div className={styles.wrapper} ref={overlayRef}>
            <div className={styles.modal}>
                <button type='button' onClick={onClose}>&times;</button>
                <div className={styles.content}>
                    <h2>Видалити - {currentTask.text}</h2>
                </div>
                <div className={styles.actions}>
                    <button className={styles['btn-yes']} onClick={e => {
                        onRemove(currentTask.id)
                        onClose();
                    }}>Так</button>
                    <button className={styles['btn-no']} onClick={onClose}>Ні</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;