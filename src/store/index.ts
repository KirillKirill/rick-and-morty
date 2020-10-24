import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools({
  maxAge: 100,
})(applyMiddleware(sagaMiddleware));

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);

  if ((module as any).hot) {
    (module as any).hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer),
    );
  }

  sagaMiddleware.run(rootSaga as any);

  return store;
}
