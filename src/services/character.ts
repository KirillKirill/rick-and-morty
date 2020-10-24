import http from 'services/index';

const URL = '/character';

export function* getCharacters(pageNumber: number): Generator {
  return yield http.get(URL + `/?page=${pageNumber}`);
}
