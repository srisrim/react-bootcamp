import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet } from 'react-router-dom';

// default exports can be imported this way without using {}, but named exports should use {}
import HeaderComponent, { Title } from "./components/Header";
import FooterComponent from "./components/Footer";

const App = () => {
  return (
      <React.Fragment>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
      </React.Fragment>
  )
}

export default App;
