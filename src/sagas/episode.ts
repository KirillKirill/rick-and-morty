import { call, put } from 'redux-saga/effects';
import { startFetching, setData, setError } from 'actions/episode';
import { getEpisodesFromPage } from 'services/episode';
import { Episode } from 'reducers/episode';

export default function* episodeSaga() {
  yield put(startFetching());
  try {
    const allEpisodes: Episode[] = [];
    const response = yield call(getEpisodesFromPage, 1);
    allEpisodes.push(...response.data.results);

    for (let i = 2; i <= response.data.info.pages; i++) {
      const newData = yield call(getEpisodesFromPage, i);
      allEpisodes.push(...newData.data.results);
    }

    yield put(setData(allEpisodes));
    return allEpisodes;
  } catch (err) {
    yield put(setError(err));
  }
}
