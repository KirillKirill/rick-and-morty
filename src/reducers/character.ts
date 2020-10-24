import { CharacterActionTypes } from 'actions/character';
import * as actionTypes from 'types/character';
import { Episode } from 'reducers/episode';

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string | null;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  lastEpisode?: Episode;
  image: string;
  episode: string[];
};

export type CharactersData = {
  info:
    | {
        count: number;
        pages: number;
        prev: string | null;
        next: string | null;
      }
    | undefined;
  results: Character[] | undefined;
};

export interface CharacterState {
  loading: boolean;
  error: string | undefined;
  data: CharactersData;
}

const initialState: CharacterState = {
  data: {
    info: undefined,
    results: undefined,
  },
  error: undefined,
  loading: false,
};

export default function character(
  state = initialState,
  action: CharacterActionTypes,
): CharacterState {
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
        data: {
          ...state.data,
          info: action?.payload?.info,
          results: action?.payload?.results,
        },
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
