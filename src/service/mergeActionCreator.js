import api from '../utils/api';
import * as actionTypes from './mergeActionTypes';

// ############################# search Action  Creators ############################## //

const getHotels = (payload) => (dispatch) => {
  // console.log('search action creators', payload);
  dispatch({
    type: actionTypes.SEARCH,
    promise: api.post('api/catalog_management/get_similar_hotels/', {
      name: payload,
      otas: ['AxisRooms'],
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionTypes.SEARCHSUCCESS,
          payload: res,
        });
      },
      omFailure: (err) => {
        dispatch({
          type: actionTypes.SEARCHFAILURE,
          payload: err,
        });
      },
    },
  });
};

const changeSelection = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGEHOTEL,
    payload,
  });
};

const confirmHotelAdd = () => (dispatch) => {
  dispatch({
    type: actionTypes.CONFIRMHOTELADD,
  });
};

// ############################# group Action  Creators ############################## //

const clearGroupedHotels = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEARGROUP,
  });
};

const addGroupedHotels = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE,
    promise: api.post('api/catalog_management/create_new_hotel/', {
      hotel_group: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionTypes.CREATESUCCESS,
          payload: res,
        });
      },
      omFailure: (err) => {
        dispatch({
          type: actionTypes.CREATEFAILURE,
          payload: err,
        });
      },
    },
  });
};

// ############################# merge Action  Creators ############################## //

const mergeGroupHotel = ({ groupedHotels, agtSelectedHotel }) => (dispatch) => {
  const existingHotel = agtSelectedHotel.hotels.filter((hotel) => hotel.selected)[0];
  dispatch({
    type: actionTypes.MERGE,
    promise: api.post('api/catalog_management/merge_grouped_hotels/', {
      existing_hotel: existingHotel,
      hotel_group: groupedHotels,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionTypes.MERGESUCCESS,
          payload: res,
        });
      },
      omFailure: (err) => {
        dispatch({
          type: actionTypes.MERGEFAILURE,
          payload: err,
        });
      },
    },
  });
};

const getAgtHotels = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.GETAGTHOTELS,
    promise: api.post('api/catalog_management/get_existing_hotels/', {
      name: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionTypes.GETAGTHOTELSSUCCESS,
          payload: res,
        });
      },
      omFailure: (err) => {
        dispatch({
          type: actionTypes.GETAGTHOTELSFAILURE,
          payload: err,
        });
      },
    },
  });
};
const hotelToMerge = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.SELECTHOTELTOMERGE,
    payload: id,
  });
};

const viewController = () => (dispatch) => {
  dispatch({
    type: actionTypes.VIEWCONTROLLER,
  });
};

const clearState = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEARSTATE,
  });
};

export default {
  getHotels,
  changeSelection,
  confirmHotelAdd,
  clearGroupedHotels,
  addGroupedHotels,
  getAgtHotels,
  mergeGroupHotel,
  hotelToMerge,
  viewController,
  clearState,
};
