import React from 'react';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'style';
import configureStore from 'store';
import Main from 'components/Main';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};

export default App;
