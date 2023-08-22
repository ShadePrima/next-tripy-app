import React from 'react'
import image from '../../assets/images/about.png'
import styles from './About.module.scss'
import Image from 'next/image'

const numbersList = [
  { id: 1, number: '15', text: 'Years of Experience' },
  { id: 2, number: '1k', text: 'Sucessful Trips' },
  { id: 3, number: '20k', text: 'Happy Customers' },
  { id: 4, number: '4.9', text: 'Overall Rating' },
]

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Image src={image} alt='about' />
        <div className={styles.content}>
          <div className={styles.title}>About us</div>
          <div className={styles.titleMain}>
            Our tour plan is to fulfil your dream wish
          </div>
          <div className={styles.text}>
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </div>

          <div className={styles.numberContainer}>
            {numbersList.map((number) => (
              <div key={number.id} className={styles.numbers}>
                <p className={styles.number}>{number.number}</p>
                <p className={styles.mumbersText}>{number.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
