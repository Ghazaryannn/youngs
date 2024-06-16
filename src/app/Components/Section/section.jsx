import React from 'react'
import styles from './section.module.css'



const Section = () => {
    if(typeof window !== 'undefined' ){
        window.onload = function (){
        document.getElementById("autoplay").play
        }
    }
  return (
    <section className={styles.section}>
     <video autoPlay muted className={styles.video} id='autoplay'>
        <source type="video/mp4" src={'video/video.MP4'}/>
     </video>
    </section>
  )
}

export default Section