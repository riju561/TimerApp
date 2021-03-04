import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import "@fontsource/press-start-2p";

const Main = () => {
  const [time, settime] = useState(null)
  const [date, setDate] = useState(null)

  //Sets the current time
  const setHandler = () => {
    settime(new Date().toLocaleTimeString())
  }

  //Sets the current date
  const dateHandler = () => {
    setDate(new Date().toDateString())
  }

  //Runs the function as the component mounts
  useEffect(() => {
    setHandler()
    dateHandler()
  }, [])

  //Updates the time every 1 second
  const f = setInterval(setHandler, 1000)

  return (
    <div className={styles.div}>
      <div className={styles.t}>
        {/* Displays the date and time */}
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
