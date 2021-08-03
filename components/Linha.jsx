import Subdivisao from './Subdivisao'
import styles from '../styles/Linha.module.css'
// import { Container } from './styles';

function Linha() {
  return(
      <div className={styles.linha}>
          <Subdivisao />
          <Subdivisao preta/>
          <Subdivisao />
          <Subdivisao preta/>
          <Subdivisao />
          <Subdivisao preta/>
          <Subdivisao />
          <Subdivisao preta/>
      </div>
  )
}

export default Linha;