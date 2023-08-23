import React from 'react'
import styles from './TourCard.module.scss'
import Image, { StaticImageData } from 'next/image'

import icon from '../../assets/icons/tour-icon.svg'

type TourCardProps = {
  image: StaticImageData
  title: string
  place: string
  price: string
  term: string
}

const TourCard = ({ image, title, place, price, term }: TourCardProps) => {
  return (
    <div className={styles.main}>
      <Image src={image} alt='image' />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{place}</p>
        <Image className={styles.icon} src={icon} alt='icon' />
        <div className={styles.priceContainer}>
          <div className={styles.price}>{price}</div>
          <p className={styles.term}>{term}</p>
        </div>
      </div>
    </div>
  )
}

export default TourCard
