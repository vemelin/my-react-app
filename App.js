import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';
import "./App.css";

const App = () => {

  return(
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
