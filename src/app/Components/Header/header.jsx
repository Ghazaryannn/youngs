'use client'

import React, { useState } from 'react'
import styles from './header.module.css'
import logo from '../../../../public/logo.jpeg'
import logofull from '../../../../public/logo2.jpeg'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";



const Header = () => {
    const [open, setOpen] = useState(true)
    return (
        <header>
            <div className={styles.header_main}>
                <div className={styles.container}>
                    <div className={styles.header_logo}>
                        <Image src={logo} alt='logo' />
                    </div>
                    <div className={styles.header_menu}>
                        <ul className={open ? styles.ul : styles.active}>
                            <li> {open ? '' : <Image src={logofull} className={styles.fulllogo}  height={100} />} </li>
                            <li>Մեր մասին</li>
                            <li>Ծառայություններ</li>
                            <li><FaPhoneAlt className={styles.phone}/> + (374) 77-79-92-22</li>
                            <li><FaLocationDot className={styles.phone}/>Կոտայքի մարզ, Հրազդան, Միկրոսրջան թաղամաս</li>
                        </ul>
                       {open ? <RxHamburgerMenu className={styles.burger} onClick={() => setOpen(!open)}/> : <IoMdClose className={styles.close} onClick={() => setOpen(!open)}/> } 
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header