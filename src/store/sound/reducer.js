import {
  START_LOADING,
  POPULAR_SOUNDS,
  LATEST_SOUNDS,
  SEARCHED_SOUNDS,
  FILTERED_SOUNDS,
  ALL_CATEGORIES,
  UPDATE_SOUND,
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
        searched: [...action.payload],
        filtered: [],
      };
    }
    case FILTERED_SOUNDS: {
      return {
        ...state,
        loading: false,
        filtered: [...action.payload],
        searched: [],
      };
    }
    case ALL_CATEGORIES: {
      return {
        ...state,
        loading: false,
        categories: [...action.payload],
      };
    }
    case UPDATE_SOUND: {
      const id = action.payload.id;
      const played = action.payload.played;
      const updatedArrayPopular = state.popular.map((sound) => {
        return sound.id === id ? { ...sound, played: played } : sound;
      });
      const updatedArrayLatest = state.latest.map((sound) => {
        return sound.id === id ? { ...sound, played: played } : sound;
      });
      const updatedArraySearched = state.searched.map((sound) => {
        return sound.id === id ? { ...sound, played: played } : sound;
      });
      const updatedArrayFiltered = state.filtered.map((sound) => {
        return sound.id === id ? { ...sound, played: played } : sound;
      });
      return {
        ...state,
        loading: false,
        popular: updatedArrayPopular,
        latest: updatedArrayLatest,
        searched: updatedArraySearched,
        filtered: updatedArrayFiltered,
      };
    }
    default: {
      return state;
    }
  }
}
