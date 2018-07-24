import React from 'react';
import { object, bool, func } from 'prop-types';
import HotelDetailCard from '../hotelDetailCard/HotelDetailCard';
import Loader from '../auxComponents/Loader';
import './HotelSearch.css';

const color = ['#9797e8', '#ca8383', 'green', 'blue'];

const HotelSearch = ({
  onCheck, searchHotelResponse, searchHotelLoading,
  searchHotelError, searchHotelPopulated, clearState,
}) => {
  let result = '';
  if (searchHotelError) {
    result = (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Something Went Wrong!!</strong>
        <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  if (searchHotelLoading) {
    result = (<Loader />);
  }
  if (searchHotelPopulated && searchHotelResponse.hotels.length === 0) {
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
    <div className="col col-lg-4 SearchColumn justify-content-center">
      {result}
      {searchHotelResponse
        .hotels
        .map((group, groupindex) => (
          <div className="hotel_divider" key={`hotelGroup${groupindex.toString()}`}>
            {group.map((hotel, hotelindex) => (<HotelDetailCard
              key={`group_${groupindex.toString()}_hotel${hotelindex.toString()}`}
              backgroundColor={color[groupindex === 0
                ? 3
                : groupindex % 3]}
              onCheck={() => onCheck(groupindex, hotelindex)}
              hotelDetail={hotel}
              viewCheckbox
            />))}
          </div>
        ))
}
    </div>
  );
};

HotelSearch.propTypes = {
  onCheck: func,
  searchHotelResponse: object,
  searchHotelLoading: bool,
  searchHotelError: bool,
  searchHotelPopulated: bool,
  clearState: func,
};

export default(HotelSearch);
