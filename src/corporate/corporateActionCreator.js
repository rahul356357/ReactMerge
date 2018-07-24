import * as actionType from './corporateActionType';
import api from '../utils/api';

const getCorporate = (payload) => (dispatch) => {
  dispatch({
    type: actionType.GET_CORPORATE,
    promise: api.post('api/catalog_management/get_similar_corporates/', {
      name: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionType.GET_CORPORATE_SUCCESS,
          payload: res,
        });
      },
      onFailure: (er) => {
        dispatch({
          type: actionType.GET_CORPORATE_FAILURE,
          payload: er,
        });
      },
    },
  });
};
const getLegalEntity = (payload) => (dispatch) => {
  dispatch({
    type: actionType.GET_LEGAL_DETAILS,
    promise: api.post('api/catalog_management/get_corporate_legal_entities/', {
      corp_id: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionType.GET_LEGAL_DETAILS_SUCCESS,
          payload: res,
        });
      },
      onFailure: (er) => {
        dispatch({
          type: actionType.GET_LEGAL_DETAILS_FAILURE,
          payload: er,
        });
      },
    },
  });
};

const getCorporateagt = (payload) => (dispatch) => {
  dispatch({
    type: actionType.GET_AGT_CORPORATE,
    promise: api.post('api/catalog_management/get_existing_corporates/', {
      name: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionType.GET_AGT_CORPORATE_SUCCESS,
          payload: res,
        });
      },
      onFailure: (er) => {
        dispatch({
          type: actionType.GET_AGT_CORPORATE_FAILURE,
          payload: er,
        });
      },
    },
  });
};

const getAgtLegalDetails = (payload) => (dispatch) => {
  dispatch({
    type: actionType.GET_AGT_LEGAL_DETAILS,
    promise: api.post('api/catalog_management/get_agt_corporate_legal_entities/', {
      corp_id: payload,
    }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionType.GET_AGT_LEGAL_DETAILS_SUCCESS,
          payload: res,
        });
      },
      onFailure: (er) => {
        dispatch({
          type: actionType.GET_AGT_CORPORATE_FAILURE,
          payload: er,
        });
      },
    },
  });
};

const addToAgtDatabase = (payload) => (dispatch) => {
  dispatch({
    type: actionType.ADD_CORPORATE,
    promise: api.post('api/catalog_management/create_new_corporate/',
      { ...payload }),
    meta: {
      onSuccess: (res) => {
        dispatch({
          type: actionType.ADD_CORPORATE_SUCCESS,
          payload: res,
        });
      },
      onFailure: (er) => {
        dispatch({
          type: actionType.ADD_CORPORATE_FAILURE,
          payload: er,
        });
      },
    },
  });
};

const clearState = () => (dispatch) => {
  dispatch({
    type: actionType.CLEAR_CORPORATE_STATE,
  });
};

export default {
  getCorporate,
  getLegalEntity,
  getCorporateagt,
  getAgtLegalDetails,
  addToAgtDatabase,
  clearState,
};
