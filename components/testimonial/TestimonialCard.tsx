import React from 'react'

import star from '../../assets/icons/magic-star.svg'

import Image, { StaticImageData } from 'next/image'

import styles from './TestimonialCard.module.scss'

type TestimonialCardProps = {
  image: StaticImageData
  name: string
  job: string
  description: string
}

const TestimonialCard = ({
  image,
  name,
  job,
  description,
}: TestimonialCardProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={image} alt='imageCircle' />

        <div className={styles.name}>{name}</div>

        <div className={styles.job}>{job}</div>

        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Image key={index} src={star} alt='' />
          ))}
        </div>

        <div className={styles.description}>{description}</div>
      </div>
    </div>
  )
}

export default TestimonialCard
