import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';
import * as Styled from './App.styled'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';



const App = () => {
  return (
    <ErrorBoundary>
      <Styled.StyledApp>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </Styled.StyledApp>
    </ErrorBoundary>
  );
}

export default App;
