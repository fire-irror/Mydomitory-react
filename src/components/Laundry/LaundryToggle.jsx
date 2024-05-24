import React from 'react';
import styles from '../../css/Laundry/LaundryToggle.module.css';

function LaundryToggle({ isChecked, handleToggle }) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
}

export default LaundryToggle;
