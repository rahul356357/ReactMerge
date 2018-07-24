import React from 'react';
import { object, bool, func } from 'prop-types';
import CorporateDetaiLCard from './CorporateDetaiLCard';
import Loader from '../auxComponents/Loader';
// import Snackbar from '../auxComponents/Snackbar';

class AthenaCorporate extends React.Component {
  state = {}
  render() {
    let result = '';
    const {
      isCorporateLoading,
      isCorporatePopulated,
      isCorporateError,
      corporates,
      onClick,
      clearState,
    } = this.props;
    if (isCorporateError) {
      result = (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Something Went Wrong!!</strong>
          <button type="button" className="close" onClick={() => clearState()} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    if (isCorporateLoading) {
      result = (<Loader />);
    }
    if (isCorporatePopulated && corporates.corporates.length === 0) {
      result = (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          <strong>No Corporates Found</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }

    return (
      <div className="col col-lg-6 SearchColumn ">
        {result}
        {corporates
          .corporates
          .map((el, index) => (<CorporateDetaiLCard
            key={`corporate${index.toString()}`}
            name={el.name}
            btcEnabled={el.btc_enabled}
            onClick={() => {
            onClick(el);
          }}
          />))}
      </div>
    );
  }
}
AthenaCorporate.propTypes = {
  isCorporateLoading: bool,
  isCorporateError: bool,
  isCorporatePopulated: bool,
  corporates: object,
  onClick: func,
  clearState: func,
};

export default AthenaCorporate;
