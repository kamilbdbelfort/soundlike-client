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
