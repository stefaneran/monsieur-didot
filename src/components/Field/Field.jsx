import React from 'react';
import styles from './Field.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Field = ({ label, value, name, isEditable }) => {
  return (
    <div className={styles.fieldContainer}>
      <div>
        <label htmlFor={name} className={styles.fieldLabel}>
          {label}
        </label>
        <p className={styles.fieldValue}>
          {value}
        </p>
      </div>
      {isEditable ? (
        <KeyboardArrowDownIcon role="img" aria-label="arrow down icon" className={styles.icon} />
      ) : null}
    </div>
  )
}

export default Field;