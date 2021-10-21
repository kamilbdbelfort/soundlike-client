import axios from "axios";
import { apiUrl } from "../../config/constants";

export const START_LOADING = "START_LOADING";
export const POPULAR_SOUNDS = "POPULAR_SOUNDS";
export const LATEST_SOUNDS = "LATEST_SOUNDS";
export const SEARCHED_SOUNDS = "SEARCHED_SOUNDS";
export const FILTERED_SOUNDS = "FILTERED_SOUNDS";

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function fetchedPopularSounds(sounds) {
  return {
    type: POPULAR_SOUNDS,
    payload: sounds,
  };
}

export function fetchedLatestSounds(sounds) {
  return {
    type: LATEST_SOUNDS,
    payload: sounds,
  };
}

export function fetchedSearchedSounds(sounds) {
  return {
    type: SEARCHED_SOUNDS,
    payload: sounds,
  };
}

export function fetchedFilteredSounds(sounds) {
  return {
    type: FILTERED_SOUNDS,
    payload: sounds,
  };
}

export async function fetchPopularSounds(dispatch, getState) {
  dispatch(startLoading);
  const offset = getState().sound.popular.length;
  try {
    const response = await axios.get(
      `${apiUrl}/popular/?limit=4&offset=${offset}`
    );
    dispatch(fetchedPopularSounds(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

export async function fetchLatestSounds(dispatch, getState) {
  dispatch(startLoading);
  const offset = getState().sound.latest.length;
  try {
    const response = await axios.get(`${apiUrl}/?limit=4&offset=${offset}`);
    dispatch(fetchedLatestSounds(response.data));
  } catch (e) {
    console.log(e.message);
  }
}

export function fetchSearchedSounds(text) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/search/${text}`);
      dispatch(fetchedSearchedSounds(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function fetchFilteredSounds(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoading);
    try {
      const response = await axios.get(`${apiUrl}/category/${id}`);
      dispatch(fetchedFilteredSounds(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
