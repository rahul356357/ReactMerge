import React from 'react';

import { object, bool, array, func } from 'prop-types';
import HotelDetailCard from '../hotelDetailCard/HotelDetailCard';
import Loader from '../auxComponents/Loader';

const HotelGroup = ({
  groupedHotels, createGroupError, createGroupLoading, createGroupMessage,
  clearState,
}) => {
  let result = (<div> <p className="text-center"> Add Hotel To Group </p> </div>);
  if (createGroupLoading) {
    result = (
      <Loader />
    );
  }

  if (createGroupError) {
    result = (
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>Something went wrong</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>);
  }

  if (createGroupMessage.status === 'SUCCESS') {
    result = (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{createGroupMessage.message}</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>);
  }

  return (
    <div className="col col-lg-4 SearchColumn">
      {result}
      {groupedHotels.map((hotel, index) => (<HotelDetailCard
        key={`grouped_hotel${index.toString()}`}
        backgroundColor="green"
        viewCheckbox={false}
        hotelDetail={hotel}
      />))}
    </div>

  );
};
HotelGroup.propTypes = {
  groupedHotels: array,
  createGroupError: bool,
  createGroupLoading: bool,
  createGroupMessage: object,
  clearState: func,
};

export default HotelGroup;
