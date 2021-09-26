import React from 'react';
import styles from './Field.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FieldSelect = ({ 
  options, 
  getOptionLabel, 
  onChange, 
  label, 
  value,
  name 
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const selectRef = React.useRef(null);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      selectRef.current.focus();
    }
  }
  const handleChange = (event) => {
    onBlur(event);
    onChange(event);
  }
  const onFocus = (event) => {
    event.target.size = options.length;
  }
  const onBlur = (event) => {
    event.target.size = 0;
  }

  return (
    <div className={styles.fieldContainer} onClick={toggleEdit}>
      <div>
        <label htmlFor={name} className={styles.fieldLabel}>
          {label}
        </label>
        <select 
          name={name} 
          value={value} 
          onChange={handleChange} 
          ref={selectRef}
          className={styles.fieldSelect}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {options.map(option => (
            <option key={option} value={option} className={styles.fieldSelectOption}>
              {getOptionLabel(option)}
            </option>
          ))}
        </select>
      </div>
      <KeyboardArrowDownIcon role="img" aria-label="arrow down icon" className={styles.icon} />
    </div>
  )
}

export default FieldSelect;