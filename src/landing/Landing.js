import React from 'react';
import { connect } from 'react-redux';
import { object, bool, array } from 'prop-types';
import { bindActionCreators } from 'redux';
// import Snackbar from '../auxComponents/Snackbar';
import HotelSearch from '../hotelSearch/HotelSearch';
import HotelDatabase from '../hotelDatabase/HotelDatabase';
import HotelGroup from '../hotelGroup/HotelGroup';
import mergeActionCreator from '../service/mergeActionCreator';
import Corporate from '../corporate/CorporateMerge';

class Landing extends React.Component {
  onCheck = (groupindex, hotelindex) => {
    this
      .props
      .addActions
      .changeSelection({ groupindex, hotelindex });
  }
  handleClearGroup = () => {
    this
      .props
      .addActions
      .clearGroupedHotels();
  }
  handleGroupedHotel = (groupedHotels) => {
    this
      .props
      .addActions
      .addGroupedHotels(groupedHotels);
  }

  handleContinue = () => {
    this
      .props
      .addActions
      .confirmHotelAdd();
  }

  hotelToMerge = (id) => {
    this
      .props
      .addActions
      .hotelToMerge(id);
  }

  mergeHotel = (payload) => {
    this
      .props
      .addActions
      .mergeGroupHotel(payload);
  }

  clearState = () => {
    this
      .props
      .addActions
      .clearState();
  }

  render() {
    const {
      searchHotelResponse,
      searchHotelLoading,
      searchHotelError,
      searchHotelPopulated,
      groupedHotels,
      createGroupLoading,
      createGroupMessage,
      createGroupError,
      agtHotels,
      agtHotelLoading,
      agtSelectedHotel,
      agtHotelError,
      agtHotelPopulated,
      mergeLoading,
      mergeSuccess,
      mergeError,
      viewController,
    } = this.props.hotels;
    // const { snackbar } = this.state; const  updatedHotel = [].concat.apply([],
    // {...searchHotelResponse.hotels});
    return (
      <div className="container">
        {viewController
          ?
            <div>
              <div className="row">
                <table className="table  table-light">
                  <thead>
                    <tr>
                      <th className="">
                        <span className="text-center">
                          Catalogue Hotels
                        </span>
                        <button
                          style={{
                          marginLeft: '10px',
                        }}
                          className="btn  btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModalLong"
                        >
                          Group
                        </button>
                      </th>
                      <th className="">
                        <span >
                          Group Hotels
                        </span>
                        <button
                          style={{
                          marginLeft: '10px',
                        }}
                          className="btn  btn-sm btn-outline-info"
                          onClick={this.handleClearGroup}
                        >
                          Clear
                        </button>
                        <button
                          style={{
                          marginLeft: '10px',
                        }}
                          className="btn  btn-sm btn-success"
                          onClick={() => this.handleGroupedHotel(groupedHotels)}
                        >
                          Create
                        </button>

                      </th>
                      <th className="">
                        <span className="text-center">
                          AGT Hotels
                        </span>
                        <button
                          style={{
                          marginLeft: '10px',
                        }}
                          disabled={!agtSelectedHotel
                          .hotels
                          .some((hotel) => hotel.selected)}
                          onClick={() => this.mergeHotel({ groupedHotels, agtSelectedHotel })}
                          className="btn  btn-sm btn-danger"
                        >
                          Merge
                        </button>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="row">
                <HotelSearch
                  searchHotelLoading={searchHotelLoading}
                  searchHotelResponse={searchHotelResponse}
                  searchHotelPopulated={searchHotelPopulated}
                  searchHotelError={searchHotelError}
                  onCheck={(groupIndex, hotelIndex) => {
                  this.onCheck(groupIndex, hotelIndex);
                }}
                  clearState={this.clearState}
                />
                <HotelGroup
                  groupedHotels={groupedHotels}
                  createGroupLoading={createGroupLoading}
                  createGroupError={createGroupError}
                  createGroupMessage={createGroupMessage}
                  clearState={this.clearState}
                />
                <HotelDatabase
                  agtHotels={agtHotels}
                  agtHotelLoading={agtHotelLoading}
                  agtHotelError={agtHotelError}
                  agtSelectedHotel={agtSelectedHotel}
                  agtHotelPopulated={agtHotelPopulated}
                  mergeError={mergeError}
                  mergeLoading={mergeLoading}
                  mergeSuccess={mergeSuccess}
                  onClickHotel={(id) => {
                  this.hotelToMerge(id);
                }}
                  clearState={this.clearState}
                />
              </div>

              <div
                className="modal fade"
                id="exampleModalLong"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">Confirm</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body panel panel-warning">
                      Are You Sure You Want To Group These Hotels ?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-dismiss="modal"
                      >Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={this.handleContinue}
                      >Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          :
            <Corporate />
            }
      </div>
    );
  }
}

Landing.propTypes = {
  searchHotelResponse: object,
  searchHotelLoading: bool,
  searchHotelError: bool,
  searchHotelPopulated: bool,
  groupedHotels: array,
  createGroupLoading: bool,
  createGroupMessage: object,
  createGroupError: bool,
  agtHotels: object,
  agtHotelLoading: bool,
  agtSelectedHotel: object,
  agtHotelError: bool,
  agtHotelPopulated: object,
  mergeLoading: bool,
  mergeSuccess: bool,
  mergeError: bool,
  addActions: object,
  hotels: object,
  viewController: bool,
};

const mapStateToProps = (state) => ({ hotels: state.hotel });

const mapDispatchToProps = (dispatch) => ({
  addActions: bindActionCreators(mergeActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
