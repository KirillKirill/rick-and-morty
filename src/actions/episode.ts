import { AxiosError } from 'axios';
import { Episode } from 'reducers/episode';

export const startFetching = () => ({
  type: inferLiteralFromString('@@episode/START_FETCHING'),
});

export const setError = (err?: AxiosError) => ({
  type: inferLiteralFromString('@@episode/SET_ERROR'),
  payload: err,
});

export const setData = (response?: Episode[]) => ({
  type: inferLiteralFromString('@@episode/SET_DATA'),
  payload: response,
});

function inferLiteralFromString<T extends string>(args: T): T {
  return args;
}

export type EpisodeActionTypes =
  | ReturnType<typeof startFetching>
  | ReturnType<typeof setError>
  | ReturnType<typeof setData>;
