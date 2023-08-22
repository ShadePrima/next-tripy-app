/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Navbar } from '..'

import imageHeader from '../../assets/images/header-img.png'
import location from '../../assets/icons/location.svg'
import calendar from '../../assets/icons/calendar.svg'
import arrow from '../../assets/icons/arrow-down.svg'
import search from '../../assets/icons/search-normal.svg'
import divider from '../../assets/icons/divider.svg'

import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Dare to live the life you've always wanted.</h1>
          <p className={styles.contentText}>
            Life is short and the world is wide. So, better get started.
          </p>
          <div className={styles.info}>
            <div className={styles.location}>
              <Image src={location} alt='location' />
              <div>
                <div className={styles.locationContainer}>
                  <p>Location</p>
                  <Image src={arrow} alt='arrow' />
                </div>
                <p className={styles.locationText}>
                  Location Allentown, New Mexico
                </p>
              </div>
            </div>

            <Image src={divider} alt='divider' />

            <div className={styles.location}>
              <Image src={calendar} alt='location' />
              <div>
                <div className={styles.locationContainer}>
                  <p>Date</p>
                  <Image src={arrow} alt='arrow' />
                </div>
                <p className={styles.locationText}>04 Aug, 2022</p>
              </div>
            </div>

            <div className={styles.search}>
              <Image src={search} alt='search' />
            </div>
          </div>
        </div>
        <Image src={imageHeader} alt='header-image' />
      </div>
    </div>
  )
}

export default Header
