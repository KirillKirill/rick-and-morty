import { combineReducers } from 'redux';
import character from 'reducers/character';
import episode from 'reducers/episode';

export const rootReducer = combineReducers({ character, episode });

export type RootState = ReturnType<typeof rootReducer>;
