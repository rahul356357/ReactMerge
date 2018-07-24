import React from 'react';
import { object, func, string } from 'prop-types';

import '../hotelDetailCard/HotelDetailCard';

const HotelDetailCard = (props) => {
  const { hotelDetail, backgroundColor, onClick } = props;
  const { selected } = hotelDetail;
  const { name, addressFull } = hotelDetail;
  return (
    <div className="row" >
      <div className="col col-sm-11">
        <div
          className="HotelDetailCard-Main-Card"
          style={
            {
            border: `1px solid ${selected ? 'red ' : backgroundColor}`,
            boxShadow: `-4px 3px 1px 0px ${selected ? 'red' : backgroundColor} `,
            cursor: 'pointer',
         }

         }
          onClick={onClick}
        >
          <div className="HotelDetailCard-Main-Card-Header">
            <span className="text-left">
              <b>
                {name}
              </b>
            </span>
          </div>
          <div>
            <span style={{ fontSize: '12px' }} >
              {addressFull}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
HotelDetailCard.propTypes = {
  hotelDetail: object,
  backgroundColor: string,
  onClick: func,
};

export default HotelDetailCard;
