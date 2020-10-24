import { call, put, takeEvery, select } from 'redux-saga/effects';
import { startFetching, setData, setError } from 'actions/character';
import { getCharacters } from 'services/character';
import episodeSaga from 'sagas/episode';
import { RootState } from 'reducers';
import { Character } from 'reducers/character';
import { Episode } from 'reducers/episode';

export default function* getCharactersWatcher() {
  yield takeEvery(startFetching().type, characterSaga);
}

export function* characterSaga({
  pageNumber,
}: ReturnType<typeof startFetching>) {
  try {
    const response = yield getCharacters(pageNumber!);

    const getEpisodesFromStore = (state: RootState) => state.episode.data;
    const episodesInStore = yield select(getEpisodesFromStore);

    const episodes = !episodesInStore
      ? yield call(episodeSaga)
      : episodesInStore;

    const formattedResults = response.data.results.map((el: Character) => {
      const lastEpisodeIndex = el.episode.length - 1;
      const lastEpisodeId = cutEpisodeIdFromUrl(el.episode[lastEpisodeIndex]);
      const lastEpisodeInfo = episodes.find(
        (ep: Episode) => ep.id === lastEpisodeId,
      );
      return {
        ...el,
        lastEpisode: lastEpisodeInfo,
      };
    });

    yield put(setData({ ...response.data, results: formattedResults }));
  } catch (err) {
    yield put(setError(err));
  }
}

const cutEpisodeIdFromUrl = (url: string): number => {
  const lastSlashIdx = url.lastIndexOf('/');
  return Number(url.slice(lastSlashIdx + 1));
};
