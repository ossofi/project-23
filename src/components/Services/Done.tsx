import React from 'react'
import fulltrash from '../../assets/images/fulltrash.png'
import styles from '../../styles/Done.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import dude from '../../assets/images/dude.png'
import {useState} from 'react'


const Done = ({address, number}: any) => {
  return (
    <div className={styles.done}>
    <div className={styles.block4}>
    <div className={styles.block4_text}>
        <div className={styles.b4_t1}><b>Ваш заказ принят</b></div>
        <div className={styles.b4_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
        <div className={styles.price}>ЦЕНА: <b>4.50 руб.</b></div>
        <div className={styles.yourinfo}>
        <div className={styles.youraddress}>{address}</div>
        <div className={styles.yournumber}>{number}</div>
        </div>
        <button className={styles.button4}>Курьер в пути</button>
    </div>
    <img src={dude} className="dude" alt=''/> 
    </div></div>
    
  )
}

export default Done