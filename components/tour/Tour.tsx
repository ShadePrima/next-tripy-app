import React from 'react'
import styles from './Tour.module.scss'
import TourCard from './TourCard'

import image1 from '../../assets/images/tour1.png'
import image2 from '../../assets/images/tour2.png'
import image3 from '../../assets/images/tour3.png'

const tourList = [
  {
    id: 1,
    image: image1,
    title: 'Fall in love among the winding streets and snow-covered',
    place: 'Prague, Czechia',
    price: '500$',
    term: '10 days tour',
  },
  {
    id: 2,
    image: image2,
    title: 'History is not about the past but a map of the past',
    place: 'Beijing, China',
    price: '450$',
    term: '5 days tour',
  },
  {
    id: 3,
    image: image3,
    title: 'The unique character as a symbol of taste and ostentation',
    place: 'İstanbul, Turkey',
    price: '150$',
    term: '7 days tour',
  },
]

const Tour = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3 className={styles.title}>Tour Packages</h3>
        <h1 className={styles.mainTitle}>
          The amazing places around the world
        </h1>

        <div className={styles.tourContainer}>
          {tourList.map((item) => (
            <div key={item.id}>
              <TourCard
                image={item.image}
                title={item.title}
                place={item.place}
                price={item.price}
                term={item.term}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tour
