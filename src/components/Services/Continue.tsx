import React, { useContext } from 'react'
import fulltrash from '../../assets/images/fulltrash.png'
import styles from '../../styles/Continue.module.scss'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Done from '../Services/Done'
import {useState} from 'react'

const Continue = ({name, onChange}: any) => {
const [address, setAddress] = useState('');
const [number, setNumber] = useState('');
const handleChange = (e:any) => {
if (name === 'address') {
  setAddress(e.target.value);
  onChange(e.target.value);
}
if (name === 'number') {
  setNumber(e.target.value);
  onChange(e.target.value);
}
  };
  return (
    <div className={styles.continue}>
    <div className={styles.block3}>
    <div className={styles.block3_text}>
        <div className={styles.b3_t1}><b>Вывезем</b> ваш мусор и <b>отсортируем</b></div>
        <div className={styles.b3_t2}>Наша команда вывезет и отсортирует ваш мусор</div>
        <div className={styles.form}>
          <form>
    <input className={styles.form1} placeholder="Ваш адрес" name='address' value={address} onChange={handleChange}/>
    <input className={styles.form2} placeholder="Номер телефона" name='number' value={number} onChange={handleChange}/>
        
    <Link to='/done'><button className={styles.button3}>Оформить
            </button></Link> </form></div>
            
    </div>
    <img src={fulltrash} className="trash" alt=''/> 
    </div></div>
    
    
  );
}

export default Continue
