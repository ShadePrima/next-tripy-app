import React from 'react'
import styles from './TourCard.module.scss'
import Image from 'next/image'

import image from '../../assets/images/tour1.png'

const TourCard = () => {
  return (
    <div className={styles.main}>
      <Image src={image} alt='image' />

      <div className={styles.content}>
        <h2 className={styles.title}>
          Fall in love among the winding streets and snow-covered
        </h2>
        <p className={styles.text}>Prague, Czechia</p>
        <div className={styles.priceContainer}>
          <div className={styles.prise}>500$</div>
          <p className={styles.term}>10 days tour</p>
        </div>
      </div>
    </div>
  )
}

export default TourCard
