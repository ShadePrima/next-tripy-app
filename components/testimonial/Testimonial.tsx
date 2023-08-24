import React from 'react'
import styles from './Testimonial.module.scss'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div className={styles.main}>
      <div className={`${'wrapper'}`}>
        <h2 className={styles.title}>Testimonial</h2>
        <h1 className={styles.mainTitle}>
          Satisfied travellers around the world
        </h1>

        <div className={styles.cardContainer}>
          <TestimonialCard />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
