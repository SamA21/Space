import React from 'react';
import logo from '../../assets/space-logo.svg';

interface IProps{
}

interface IState {
}

class Header extends React.Component<IProps,IState> {
  render(){
    return (
      <div className="h-full pt-5" style={{backgroundColor:"#011929"}}>
          <div className="container mx-auto h-auto">
            <a href="https://www.space01.co.uk/" >
              <img className="h-20" src={logo} alt="logo" title="logo"/>
            </a>
          </div>s
      </div>
    );
  }
}

export default Header;
