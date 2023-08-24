import React from 'react'
import styles from './Footer.module.scss'

import logo from '../../assets/icons/logo.svg'
import Image from 'next/image'

import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.footerContainer}>
        <div className={styles.row}>
          <Image src={logo} alt='logo' />
          <p className={styles.text}>
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <div className={styles.iconContainer}>
            <Image src={facebook} alt='facebook' />
            <Image src={instagram} alt='instagram' />
            <Image src={youtube} alt='youtube' />
          </div>
        </div>

        <div className={styles.row}>
          <h2 className={styles.title}>About</h2>
          <p className={styles.text}>About us</p>
          <p className={styles.text}>Features</p>
          <p className={styles.text}>News</p>
          <p className={styles.text}>Plans</p>
        </div>

        <div className={styles.row}>
          <h2 className={styles.title}>Company</h2>
          <p className={styles.text}>Why Tripy</p>
          <p className={styles.text}>Partner with us</p>
          <p className={styles.text}>FAQ</p>
          <p className={styles.text}>Blog</p>
        </div>

        <div className={styles.row}>
          <h2 className={styles.title}>Support</h2>
          <p className={styles.text}>Account</p>
          <p className={styles.text}>Support center</p>
          <p className={styles.text}>Feedback</p>
          <p className={styles.text}>Contact us</p>
        </div>

        <div className={styles.row}>
          <h2 className={styles.title}>Newsletter</h2>
          <p className={styles.text}>
            Subscribe our newsletter and get exciting offers
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
