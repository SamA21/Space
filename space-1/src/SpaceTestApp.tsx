import React from 'react';
import './SpaceTestApp.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';

class SpaceTestApp extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Content />
        <Footer/>
      </div>
    );
  }
}

export default SpaceTestApp;
