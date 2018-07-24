import { handle } from 'redux-pack';
import * as actionType from './corporateActionType';

const intialState = {
  isCorporateLoading: false,
  isCorporatePopulated: false,
  isCorporateError: false,
  dbCorporates: {
    corporates: [],
  },

  isLegalDetailsLoading: false,
  isLegalDetailsPopulated: false,
  isLegalDetailsError: false,
  legalDetails: {
    legal_entities: [
      {
        gstins: [],
      },
    ],
  },

  isAGTLegalDetailsLoading: false,
  isAGTLegalDetailsPopulated: false,
  isAGTLegalDetailsError: false,
  agtLegalDetails: {
    legal_entities: [
      {
        gstin: {
          AndhraPradesh: [
            {
              id: '0',
            },
          ],
        },
      },
    ],
  },
  isAGTCorporateLoading: false,
  isAGTCorporateError: false,
  isAGTCorporatePopulated: false,
  agtCorporates: {
    corporates: [

    ],
  },

  addCorporateLoading: false,
  addCorporateError: false,
  addCorporateSuccess: false,
  addCorporateMessage: {},
};

const corporateReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.GET_CORPORATE:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          isCorporateLoading: true,
          isCorporatePopulated: false,
          dbCorporates: {
            corporates: [],
          },
        }),
        finish: (s) => ({
          ...s,
          isCorporateLoading: true,
        }),
        failure: (s) => ({
          ...s,

          isCorporateLoading: true,
        }),
        success: (s) => ({
          ...s,
          isCorporateLoading: true,
        }),
      });
    }
    case actionType.GET_CORPORATE_SUCCESS:
    {
      return {
        ...state,
        isCorporatePopulated: true,
        isCorporateLoading: false,
        dbCorporates: payload,
      };
    }
    case actionType.GET_CORPORATE_FAILURE:
    {
      return {
        ...state,
        isCorporateLoading: false,
        isCorporateError: true,
      };
    }
    case actionType.GET_LEGAL_DETAILS:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          isLegalDetailsLoading: true,
          legalDetails: {
            legal_entities: [
              {
                gstins: [],
              },
            ],
          },
        }),
        finish: (s) => ({
          ...s,
          isLegalDetailsLoading: true,
        }),
        failure: (s) => ({
          ...s,
          isLegalDetailsLoading: true,
        }),
        success: (s) => ({
          ...s,
          isLegalDetailsLoading: true,
        }),
      });
    }
    case actionType.GET_LEGAL_DETAILS_SUCCESS:
    {
      return {
        ...state,
        isLegalDetailsLoading: false,
        isLegalDetailsPopulated: true,
        legalDetails: payload,
      };
    }

    case actionType.GET_LEGAL_DETAILS_FAILURE:
    {
      return {
        ...state,
        isLegalDetailsLoading: false,
        isLegalDetailsError: true,
      };
    }
    case actionType.GET_AGT_CORPORATE:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          isAGTCorporateLoading: true,
          isAGTCorporatePopulated: false,
          agtCorporates: {
            corporates: [],
          },
        }),
        finish: (s) => ({
          ...s,
          isAGTCorporateLoading: true,
        }),
        failure: (s) => ({
          ...s,

          isAGTCorporateLoading: true,
        }),
        success: (s) => ({
          ...s,
          isAGTCorporateLoading: true,
        }),
      });
    }

    case actionType.GET_AGT_CORPORATE_SUCCESS:
    {
      return {
        ...state,
        isAGTCorporatePopulated: true,
        isAGTCorporateLoading: false,
        agtCorporates: payload,
      };
    }
    case actionType.GET_AGT_CORPORATE_FAILURE:
    {
      return {
        ...state,
        isAGTCorporateLoading: false,
        isAGTCorporateError: true,
      };
    }
    case actionType.GET_AGT_LEGAL_DETAILS:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          isAGTLegalDetailsLoading: true,
          agtLegalDetails: {
            legal_entities: [
              {
                gstin: {
                  AndhraPradesh: [
                    {
                      id: '0',
                    },
                  ],
                },
              },
            ],
          },
        }),
        finish: (s) => ({
          ...s,
          isAGTLegalDetailsLoading: true,
        }),
        failure: (s) => ({
          ...s,
          isAGTLegalDetailsLoading: true,
        }),
        success: (s) => ({
          ...s,
          isAGTLegalDetailsLoading: true,
        }),
      });
    }
    case actionType.GET_AGT_LEGAL_DETAILS_SUCCESS:
    {
      return {
        ...state,
        isAGTLegalDetailsLoading: false,
        isAGTLegalDetailsPopulated: true,
        agtLegalDetails: payload,
      };
    }

    case actionType.GET_AGT_LEGAL_DETAILS_FAILURE:
    {
      return {
        ...state,
        isAGTLegalDetailsLoading: false,
        isAGTLegalDetailsError: true,
      };
    }
    case actionType.ADD_CORPORATE:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          addCorporateLoading: true,
          addCorporateSuccess: false,
          addCorporateError: false,
          addCorporateMessage: {},
        }),
        finish: (s) => ({
          ...s,
          addCorporateLoading: true,
        }),
        failure: (s) => ({
          ...s,
          addCorporateLoading: true,
        }),
        success: (s) => ({
          ...s,
          addCorporateLoading: true,
        }),
      });
    }
    case actionType.ADD_CORPORATE_SUCCESS: {
      return {
        ...state,
        addCorporateLoading: false,
        addCorporateSuccess: true,
        addCorporateMessage: payload,
      };
    }
    case actionType.ADD_CORPORATE_FAILURE: {
      return {
        ...state,
        addCorporateLoading: false,
        addCorporateError: true,
        addCorporateMessage: payload,
      };
    }

    case actionType.CLEAR_CORPORATE_STATE: {
      return {
        ...state,
        addCorporateError: false,
        addCorporateLoading: false,
        addCorporateMessage: {},
        isCorporateError: false,
        isLegalDetailsError: false,
        isAGTLegalDetailsLoading: false,
        isAGTCorporateError: false,
        isAGTCorporateLoading: false,
        addCorporateSuccess: false,
      };
    }

    default:
      return state;
  }
};

export default corporateReducer;
