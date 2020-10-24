import http from 'services/index';

const URL = '/episode';

export function* getEpisodesFromPage(page: number): Generator {
  return yield http.get(URL + `/?page=${page}`);
}
