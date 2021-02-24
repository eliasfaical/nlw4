import { render } from "react-dom";

import styles from '../styles/components/CompleteChalenge.module.css';

export function CompleteChalenge() {
  return (
    <div className={styles.completedChalenge}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}