import styles from '../styles/Subdivisao.module.css'
import React from 'react';

// import { Container } from './styles';

function Subdivisao(props) {
  return (
    <div>
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#fff" : "#000",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#fff" : "#000",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#fff" : "#000",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff",
            }}
            className={styles.subdivisao}>

        </div>
        <div 
            style={{
                backgroundColor: props.preta ? "#fff" : "#000",
            }}
            className={styles.subdivisao}>

        </div>
    </div>
  )
}

export default Subdivisao;