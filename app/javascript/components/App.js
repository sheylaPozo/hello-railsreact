import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Home from './Home';
import Greeting from './Greeting';
import Header from './Header';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: 'greeting',
    name: 'Greeting',
    component: <Greeting />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router>
      <Header routes={routes} />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Routes>
    </Router>
  </Provider>
);

export default App;
