import React from 'react'
import styles from './Tour.module.scss'
import TourCard from './TourCard'

const Tour = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3 className={styles.title}>Tour Packages</h3>
        <h1 className={styles.mainTitle}>
          The amazing places around the world
        </h1>
        <TourCard />
      </div>
    </div>
  )
}

export default Tour
