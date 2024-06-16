import React from 'react'
import styles from './section.module.css'

const Section = () => {
  return (
    <section className={styles.section}>
     <video autoPlay loop muted type="video/mp4" className={styles.video}>
        <source src={'video/video.MP4'}/>
     </video>
    </section>
  )
}

export default Section