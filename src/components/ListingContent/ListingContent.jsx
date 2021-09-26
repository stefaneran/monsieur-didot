import React from 'react';
import styles from './ListingContent.module.css';
import ListingLocationInfo from '../ListingLocationInfo/ListingLocationInfo';
import Carousel from '../Carousel/Carousel';
import i18n from '../../i18n';

const ListingContent = ({ listing }) => {

  const [imagesList, setimagesList] = React.useState([])

  React.useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(listing.imageSource);
      const data = await response.json();
      setimagesList(data.imageUrls);
    }
    fetchImages();
  }, [listing.imageSource])

  return (
    <div className={styles.listingContentContainer}>
      <h1 className={styles.listingTitle}>
        {listing.title}
      </h1>
      <ul className={styles.listingInfo}>
        <li className={styles.listingInfoItem}>
          {listing.capacity} {i18n.PEOPLE}
        </li>
        <li className={styles.listingInfoItem}>
          {listing.bedroomsNum} {i18n.BEDROOMS}
        </li>
        <li className={styles.listingInfoItem}>
          {listing.bathroomsNum} {i18n.BATHROOMS}
        </li>
        {listing.perks && listing.perks.length && listing.perks.map(perk => (
          <li key={perk} className={styles.listingInfoItem}>
            {perk}
          </li>
        ))}
      </ul>
      <ListingLocationInfo  
        location={listing.location}
        closestTransport={listing.closestTransport}
        accessibility={listing.accessibility}
      />
      {imagesList.length ? (
        <Carousel 
          height={460}
          width={820}
          limit={30}
          imagesList={imagesList}
        />
      ) : null}
    </div>
  )
}

export default ListingContent;