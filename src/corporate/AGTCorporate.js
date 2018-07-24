import React from 'react';
import { object, bool, func } from 'prop-types';
import CorporateDetaiLCard from './CorporateDetaiLCard';
import Loader from '../auxComponents/Loader';

class AGTCorporate extends React.Component {
  state = {}
  render() {
    let result = '';
    const {
      isAGTCorporateLoading,
      isAGTCorporatePopulated,
      isAGTCorporateError,
      corporates,
      onClick,
      clearState,
    } = this.props;
    if (isAGTCorporateError) {
      result = (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Something Went Wrong!!</strong>
          <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    if (isAGTCorporateLoading) {
      result = (<Loader />);
    }
    if (isAGTCorporatePopulated && corporates.corporates.length === 0) {
      result = (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          <strong>No Corporates Found</strong>
          <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return (
      <div className="col col-lg-6 ">
        {result}
        {corporates.corporates.map((el, index) => (
          <CorporateDetaiLCard
            key={`corporate${index.toString()}`}
            name={el.name}
            onClick={() => { onClick(el); }}
          />
           ))}
      </div>
    );
  }
}
AGTCorporate.propTypes = {
  isAGTCorporateLoading: bool,
  isAGTCorporateError: bool,
  isAGTCorporatePopulated: bool,
  corporates: object,
  onClick: func,
  clearState: func,
};

export default AGTCorporate;
