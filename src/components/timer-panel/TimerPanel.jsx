import styles from './TimerPanel.module.css';

export default function TimerPanel({timeRemaining}) {
    return <div className={styles.container}>
        <div className={styles.darkTransluscentOverlay}></div>
        <div className={styles.leftHalfCircle}></div>
        <div className={styles.rightHalfCircle}></div>
        {timeRemaining.toFixed(0).padStart(2, '0')}
    </div>
}