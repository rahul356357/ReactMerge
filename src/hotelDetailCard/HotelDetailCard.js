import React from 'react';
import { object, func, bool, string } from 'prop-types';
import './HotelDetailCard.css';

const HotelDetailCard = (props) => {
  const { hotelDetail, backgroundColor, onCheck, checked, viewCheckbox } = props;
  const { name, addressFull, city, ota, ota_source, ota_hotel_id } = hotelDetail;
  return (
    <div className="row">
      <div className="col col-sm-1">
        {viewCheckbox && <input type="checkbox" onChange={onCheck} value={checked} />}
      </div>
      <div className="col col-sm-11">
        <div className="HotelDetailCard-Main-Card" style={{ border: `1px solid ${backgroundColor}`, boxShadow: `-4px 3px 1px 0px ${backgroundColor} ` }}>
          <div className="HotelDetailCard-Main-Card-Header">
            <span className="text-left">
              <b>
                {name}
              </b>
            </span>
            <span className="text-right">
              ({city})
            </span>
          </div>
          <div>
            <span style={{ fontSize: '12px' }} >
              {addressFull}
            </span>
          </div>
          <div className="HotelDetailCard-Main-Card-Body">
            <div>  <b> OTA :</b>  {ota}   </div>
            <div>  <b> OTA SOURCE :</b>  {ota_source.toString()}   </div>
            <div>  <b> HOTEL ID :</b>  {ota_hotel_id.toString()}   </div>
          </div>
        </div>
      </div>
    </div>
  );
};
HotelDetailCard.propTypes = {
  hotelDetail: object, backgroundColor: string, onCheck: func, checked: bool, viewCheckbox: bool,
};

export default HotelDetailCard;
