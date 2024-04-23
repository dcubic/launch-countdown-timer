import styles from './App.module.css'

import Footer from './components/footer/Footer.jsx';
import CountdownTimer from './components/countdown-timer/CountdownTimer.jsx';

function App() {
  return (
    <div className={styles.container}>
      <CountdownTimer />
      <Footer />
    </div>
  )
}

export default App
