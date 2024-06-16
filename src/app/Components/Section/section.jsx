import React from 'react'
import styles from './section.module.css'

const Section = () => {
  return (
    <section className={styles.section}>
     <video autoPlay loop muted className={styles.video}>
        <source src={'video/video.MP4'}/>
     </video>
    </section>
  )
}

export default Section