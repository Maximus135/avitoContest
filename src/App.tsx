import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import * as Styled from './App.styled'

const App = () => {
  return (
    <Styled.StyledApp>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </Styled.StyledApp>
  );
}

export default App;
