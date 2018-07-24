import { handle } from 'redux-pack';
import * as mergeActions from './mergeActionTypes';
import { changeHotel, setGroupedHotels, hotelToMerge } from './mergeTransform';

const intialState = {
  searchHotelLoading: false,
  searchHotelError: false,
  searchHotelResponse: {
    hotels: [],
  },
  searchSelectedHotels: [],
  groupedHotels: [],
  createGroupLoading: false,
  searchHotelPopulated: false,
  createGroupMessage: { status: '' },
  createGroupError: false,
  agtHotelLoading: false,
  agtHotels: {
    hotels: [],
  },
  agtSelectedHotel: {
    hotels: [],
  },
  agtHotelError: false,
  agtHotelPopulated: false,
  mergeLoading: false,
  mergeError: false,
  mergeSuccess: false,
  viewController: false,
};

const mergeReducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case mergeActions.SEARCH:
    {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          searchHotelLoading: true,
          searchHotelResponse: { hotels: [] },
        }),
        finish: (s) => ({
          ...s,
          searchHotelLoading: true,
          searchHotelResponse: { hotels: [] },
        }),
        failure: (s) => ({
          ...s,
          searchHotelLoading: true,
          searchHotelResponse: { hotels: [] },

        }),
        success: (s) => ({
          ...s,
          searchHotelLoading: true,
          searchHotelResponse: { hotels: [] },

        }),
      });
    }
    case mergeActions.SEARCHSUCCESS:
    {
      return {
        ...state,
        searchHotelResponse: payload.hotels,
        searchHotelLoading: false,
        searchHotelPopulated: true,
      };
    }

    case mergeActions.SEARCHFAILURE:
    {
      return {
        ...state,
        searchHotelLoading: false,
        searchHotelError: true,
      };
    }

    case mergeActions.CHANGEHOTEL:
    {
      return {
        ...state,
        searchHotelResponse: changeHotel(state, payload),
      };
    }
    case mergeActions.CONFIRMHOTELADD:
    {
      return {
        ...state,
        groupedHotels: setGroupedHotels(state),
      };
    }
    case mergeActions.CLEARGROUP:
    {
      return {
        ...state,
        groupedHotels: [],
      };
    }
    case mergeActions.CREATE: {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          createGroupLoading: true,
          createGroupError: false,
          createGroupMessage: { status: '' },
        }),
        finish: (s) => ({
          ...s,
          createGroupLoading: true,
          createGroupError: false,
        }),
        failure: (s) => ({
          ...s,
          createGroupLoading: true,

        }),
        success: (s) => ({
          ...s,
          createGroupLoading: true,

        }),
      });
    }
    case mergeActions.CREATESUCCESS: {
      return {
        ...state,
        createGroupLoading: false,
        createGroupMessage: payload,
        groupedHotels: [],
      };
    }
    case mergeActions.CREATEFAILURE: {
      return {
        ...state,
        createGroupLoading: false,
        createGroupMessage: payload,
        createGroupError: true,
      };
    }

    case mergeActions.GETAGTHOTELS: {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          agtHotelLoading: true,
          agtHotelError: false,
          agtHotelPopulated: false,
          mergeLoading: false,
          mergeError: false,
          mergeSuccess: false,
        }),
        finish: (s) => ({
          ...s,
          agtHotelLoading: true,
        }),
        failure: (s) => ({
          ...s,
          agtHotelLoading: true,
        }),
        success: (s) => ({
          ...s,
          agtHotelLoading: true,
        }),
      });
    }

    case mergeActions.GETAGTHOTELSSUCCESS: {
      return {
        ...state,
        agtHotelPopulated: true,
        agtHotelLoading: false,
        agtHotels: payload,
        agtSelectedHotel: payload,
      };
    }

    case mergeActions.GETAGTHOTELSFAILURE: {
      return {
        ...state,
        agtHotelLoading: false,
        agtHotelError: true,
        agthHotelMessage: payload,
      };
    }

    case mergeActions.SELECTHOTELTOMERGE: {
      return {
        ...state,
        agtSelectedHotel: hotelToMerge(state, payload),
      };
    }

    case mergeActions.MERGE: {
      return handle(state, action, {
        start: (s) => ({
          ...s,
          mergeLoading: true,
        }),
        finish: (s) => ({
          ...s,
          mergeLoading: true,
        }),
        failure: (s) => ({
          ...s,
          mergeLoading: true,
        }),
        success: (s) => ({
          ...s,
          mergeLoading: true,
        }),
      });
    }

    case mergeActions.MERGESUCCESS: {
      return {
        ...state,
        mergeLoading: false,
        mergeSuccess: payload,
      };
    }

    case mergeActions.MERGEFAILURE: {
      return {
        ...state,
        mergeLoading: false,
        mergeError: true,
      };
    }

    case mergeActions.VIEWCONTROLLER: {
      return {
        ...state,
        viewController: !state.viewController,
      };
    }

    case mergeActions.CLEARSTATE: {
      return {
        ...state,
        searchHotelLoading: false,
        searchHotelError: false,
        createGroupLoading: false,
        createGroupMessage: { status: '' },
        createGroupError: false,
        agtHotelLoading: false,
        agtHotelError: false,
        mergeLoading: false,
        mergeError: false,
        mergeSuccess: false,
      };
    }
    default:
      return state;
  }
};

export default mergeReducer;
