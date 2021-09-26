import React from 'react';
import { useParams } from "react-router-dom";
import BookingToolbar from '../components/BookingToolbar/BookingToolbar';
import ListingContent from '../components/ListingContent/ListingContent';
import listings from '../listings';

const Homes = () => {
  const { id } = useParams();
  const listing = listings[id];
  return (
    <div style={{ background: '#F6DDD1' }}>
      <BookingToolbar listing={listing} />
      <ListingContent listing={listing} />
    </div>
  )
}

export default Homes;