import React from 'react';
import { object, func, bool } from 'prop-types';
import Loader from '../auxComponents/Loader';
import HotelDetailCard from './HotelDetailAGTCard';

const HotelDatabase = ({
  agtHotels,
  agtHotelLoading,
  agtHotelError,
  onClickHotel,
  agtSelectedHotel,
  mergeLoading,
  mergeSuccess,
  mergeError,
  agtHotelPopulated,
  clearState,
}) => {
  let result = '';

  if (agtHotelError) {
    result = (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Something went wrong</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  if (agtHotelLoading) {
    result = (<Loader />);
  }

  if (mergeLoading) {
    result = (<Loader />);
  }

  if (mergeSuccess.status === 'SUCCESS') {
    result = (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>{mergeSuccess.message}</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  if (mergeError) {
    result = (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong> Error in Merging Hotel</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  if (agtHotelPopulated && agtHotels.hotels.length === 0) {
    result = (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>No Hotels Found</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

  return (
    <div className="col col-lg-4  justify-content-center">
      {result}
      {agtSelectedHotel
        .hotels
        .map((hotel, index) => (<HotelDetailCard
          hotelDetail={hotel}
          key={`agthotels${index.toString()}`}
          backgroundColor="grey"
          onClick={() => {
          onClickHotel(hotel.id);
        }}
        />))}
    </div>
  );
};

HotelDatabase.propTypes = {
  agtHotels: object,
  agtHotelLoading: bool,
  agtHotelError: bool,
  onClickHotel: func,
  agtSelectedHotel: object,
  mergeLoading: bool,
  mergeSuccess: bool,
  mergeError: bool,
  agtHotelPopulated: bool,
  clearState: func,
};

export default HotelDatabase;
