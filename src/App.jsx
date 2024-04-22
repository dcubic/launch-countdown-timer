import styles from './App.module.css'
import StarsBackground from './assets/images/bg-stars.svg?react'

import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className={styles.container}>
      <StarsBackground /> 
      <Footer />
    </div>
  )
}

export default App
