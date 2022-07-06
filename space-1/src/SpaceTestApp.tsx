import React from 'react';
import logo from './logo.svg';
import './SpaceTestApp.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';

interface IProps{
}

interface IState {
}

class SpaceTestApp extends React.Component<IProps,IState> {
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
