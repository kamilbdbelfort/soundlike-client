import {
  START_LOADING,
  POPULAR_SOUNDS,
  LATEST_SOUNDS,
  SEARCHED_SOUNDS,
  FILTERED_SOUNDS,
  ALL_CATEGORIES,
} from "../sound/actions";

const initialState = {
  loading: true,
  popular: [],
  latest: [],
  searched: [],
  filtered: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case POPULAR_SOUNDS: {
      return {
        ...state,
        loading: false,
        popular: [...state.popular, ...action.payload],
      };
    }
    case LATEST_SOUNDS: {
      return {
        ...state,
        loading: false,
        latest: [...state.latest, ...action.payload],
      };
    }
    case SEARCHED_SOUNDS: {
      return {
        ...state,
        loading: false,
        searched: [...state.searched, ...action.payload],
      };
    }
    case FILTERED_SOUNDS: {
      return {
        ...state,
        loading: false,
        filtered: [...state.filtered, ...action.payload],
      };
    }
    case ALL_CATEGORIES: {
      return {
        ...state,
        loading: false,
        categories: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
