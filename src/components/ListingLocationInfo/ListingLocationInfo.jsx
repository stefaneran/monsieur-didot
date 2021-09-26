import React from 'react';
import styles from './ListingLocationInfo.module.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';

/* Normally, I would map out different icons and text based on the values, but I make it static for this example */
const ListingLocationInfo = ({ location, closestTransport, accessibility }) => {
  return (
    <ul className={styles.listingLocationInfoContainer}>
      <li className={styles.listingLocationInfoItem}>
        <LocationOnOutlinedIcon role="img" aria-label="location icon" />
        <p aria-label="location">
          {`${location.area}, ${location.city}`}
        </p>
      </li>
      <li className={styles.listingLocationInfoItem}>
        <TrainOutlinedIcon role="img" aria-label="train icon" />
        <p aria-label="closest transport">
          Walk {closestTransport.walk} mins ({closestTransport.name})
        </p>
      </li>
      <li className={styles.listingLocationInfoItem}>
        <StairsOutlinedIcon role="img" aria-label="stairs icon" />
        <p aria-label="location accessibility">
          {accessibility}
        </p>
      </li>
    </ul>
  )
}

export default ListingLocationInfo;