import React, { useState, useEffect } from "react"
import styles from "./index.module.css"

const Main = () => {
  const [time, settime] = useState(null)
  const [date, setDate] = useState(null)
  const setHandler = () => {
    settime(new Date().toLocaleTimeString())
  }
  const dateHandler = () => {
    setDate(new Date().toDateString())
  }
  useEffect(() => {
    setHandler()
    dateHandler()
  }, [])
  const f = setInterval(setHandler, 1000)
  return (
    <div className={styles.div}>
      <div className={styles.t}>
        <p className={styles.d}>{date}</p>
        <p>{time}</p>
        <p className={styles.h}>
          Naya phone kharid le bhai. Mujhe bol mai 500 me naya dilwa dunga
        </p>
      </div>
    </div>
  )
}

export default Main
