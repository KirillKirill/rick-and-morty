import { EpisodeActionTypes } from 'actions/episode';
import * as actionTypes from 'types/episode';

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export interface EpisodeState {
  loading: boolean;
  error: string | undefined;
  data: Episode[] | undefined;
}

const initialState: EpisodeState = {
  data: undefined,
  error: undefined,
  loading: false,
};

export default function character(
  state = initialState,
  action: EpisodeActionTypes,
): EpisodeState {
  switch (action.type) {
    case actionTypes.START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SET_DATA:
      return {
        ...state,
        loading: false,
        data: action?.payload,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.payload?.message,
      };
    default:
      return state;
  }
}
