import React from 'react';
import { differenceInDays, format } from 'date-fns';
import styles from './BookingToolbar.module.css';
import Field from '../Field/Field';
import FieldSelect from '../Field/FieldSelect';
import getGuestOptions from '../../utils/getGuestOptions';
import formatNumber from '../../utils/formatNumber'
import i18n from '../../i18n';

const BookingToolbar = ({ listing }) => {
  const { pricePerNight } = listing;

  // Default to the values from the example
  const [fromDate, setFromDate] = React.useState(new Date(1609693630000));
  const [toDate, setToDate] = React.useState(new Date(1614499011000));
  const [guestsNum, setGuestsNum] = React.useState(2);

  const numOfNights = Math.abs(differenceInDays(fromDate, toDate))
  const fromFormatted = format(fromDate, 'd LLL yyyy')
  const toFormatted = format(toDate, 'd LLL yyyy')
  const guestOptions = React.useMemo(() => getGuestOptions(listing.capacity), [listing.capacity]);

  const handleGuestChange = (event) => {
    setGuestsNum(event.target.value)
  }

  return (
    <div className={styles.bookingContainer}>
      <form className={styles.bookingFields}>
        <Field 
          label={i18n.FROM_TO}
          name="date"
          value={`${fromFormatted} - ${toFormatted}`}
          isEditable
        />
        <FieldSelect
          label={i18n.FOR}
          name="guests"
          value={guestsNum}
          options={guestOptions}
          onChange={handleGuestChange}
          getOptionLabel={(option) => `${option} Guests`}
        />
        <Field 
          label={i18n.PRICE_PER_NIGHT}
          name="price per night"
          value={formatNumber(pricePerNight)}
        />
        <Field 
          label={`${i18n.TOTAL_PRICE_1} ${numOfNights} ${numOfNights > 1 ? i18n.TOTAL_PRICE_2A : i18n.TOTAL_PRICE_2B}`}
          name="total price"
          value={formatNumber(numOfNights * pricePerNight)}
        />
      </form>
      <button className={styles.bookingButton}>
        {i18n.INSTANT_BOOKING}
      </button>
    </div>
  )
}

export default BookingToolbar;