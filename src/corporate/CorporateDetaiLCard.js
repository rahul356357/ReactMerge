import React from 'react';
import { string, func, bool } from 'prop-types';
import './CorporateDetail.css';

const CorporateDetailCard = ({ name, onClick, btcEnabled }) => (
  <div className="row" onClick={onClick}>
    <div className="col col-sm-12">
      <div className="HotelDetailCard-Main-Card CorporateDetailCard">
        <div className="HotelDetailCard-Main-Card-Header">
          <span className="text-left">
            <b>
              {name}
            </b>
            <p>
              {btcEnabled ? 'BTC ENABLED ' : ''}
            </p>
          </span>

        </div>
      </div>
    </div>
  </div>
);
CorporateDetailCard.propTypes = {
  name: string,
  onClick: func,
  btcEnabled: bool,
};

export default CorporateDetailCard;
