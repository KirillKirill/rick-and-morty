import { AxiosError } from 'axios';
import { CharactersData } from 'reducers/character';

export const startFetching = (pageNumber?: number) => ({
  type: inferLiteralFromString('@@character/START_FETCHING'),
  pageNumber,
});

export const setError = (err?: AxiosError) => ({
  type: inferLiteralFromString('@@character/SET_ERROR'),
  payload: err,
});

export const setData = (response?: CharactersData) => ({
  type: inferLiteralFromString('@@character/SET_DATA'),
  payload: response,
});

function inferLiteralFromString<T extends string>(args: T): T {
  return args;
}

export type CharacterActionTypes =
  | ReturnType<typeof startFetching>
  | ReturnType<typeof setError>
  | ReturnType<typeof setData>;
