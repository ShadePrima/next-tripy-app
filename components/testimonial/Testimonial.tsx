import React from 'react'
import styles from './Testimonial.module.scss'
import TestimonialCard from './TestimonialCard'

import image1 from '../../assets/images/testimonial1.png'
import image2 from '../../assets/images/testimonial2.png'
import image3 from '../../assets/images/testimonial3.png'

const testimonialCardList = [
  {
    id: 1,
    image: image1,
    name: 'Eleanor Pena',
    job: 'UI/UX Designer',
    description:
      'Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ',
  },
  {
    id: 2,
    image: image2,
    name: 'Theresa Webb',
    job: 'Vlogger',
    description:
      'In promotion and advertising, a testimonial or show consists of a person"s written statement extolling the virtue of a product.',
  },
  {
    id: 3,
    image: image3,
    name: 'Annette Black',
    job: 'Doctor',
    description:
      'Testimonials work because they aren"t strong sales pitches, they come across in an unbiased voice and establish trust',
  },
]

const Testimonial = () => {
  return (
    <div className={styles.main}>
      <div className={`${'wrapper'}`}>
        <h2 className={styles.title}>Testimonial</h2>
        <h1 className={styles.mainTitle}>
          Satisfied travellers around the world
        </h1>

        <div className={styles.cardContainer}>
          {testimonialCardList.map((item) => (
            <div key={item.id}>
              <TestimonialCard
                image={item.image}
                name={item.name}
                job={item.job}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
