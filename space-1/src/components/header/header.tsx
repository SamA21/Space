import React from 'react';
import logo from '../../assets/space-logo.svg';

class Header extends React.Component {
  render(){
    return (
      <div className="h-full pt-5" style={{backgroundColor:"#011929"}}>
          <div className="container h-auto mx-auto">
            <a href="https://www.space01.co.uk/" >
              <img className="h-20" src={logo} alt="logo" title="logo"/>
            </a>
          </div>s
      </div>
    );
  }
}

export default Header;
