import { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";
import TimerPanel from "../timer-panel/TimerPanel";

const intervalSleepDuration = 1000;

const secondsPerMinute = 60;
const secondsPerHour = 60 * secondsPerMinute;
const hoursPerDay = 24;
const secondsPerDay = hoursPerDay * secondsPerHour;
const startDay = 14;
const startDuration = startDay * secondsPerDay;
// const startDuration = 10;

export default function CountdownTimer() {
  const [remainingSeconds, setRemainingSeconds] = useState(startDuration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((previousTime) => previousTime - 1);
    }, intervalSleepDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, startDuration * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const daysRemaining = Math.floor(remainingSeconds / secondsPerDay);
  const hoursRemaining = Math.floor(remainingSeconds / secondsPerHour) % hoursPerDay;
  const minutesRemaining = Math.floor(remainingSeconds / secondsPerMinute) % secondsPerMinute;
  const secondsRemaining = remainingSeconds % secondsPerMinute;

  const timerIntervalInfo = [
    { intervalName: "days", timeRemaining: daysRemaining },
    { intervalName: "hours", timeRemaining: hoursRemaining },
    { intervalName: "minutes", timeRemaining: minutesRemaining },
    { intervalName: "seconds", timeRemaining: secondsRemaining },
  ];

  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.header}>We're launching soon</h1>
      <div className={styles.timerContainer}>
        {timerIntervalInfo.map((timerInfo) => (
          <div key={timerInfo.intervalName} className={styles.panelAndLabel}>
            <TimerPanel
              intervalName={timerInfo.intervalName}
              timeRemaining={timerInfo.timeRemaining}
            />
            <p>{timerInfo.intervalName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}