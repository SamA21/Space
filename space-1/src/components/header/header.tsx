import React from 'react';
import logo from '../../assets/space-logo.svg';

interface IProps{
}

interface IState {
}

class Header extends React.Component<IProps,IState> {
  render(){
    return (
      <div style={{backgroundColor:"#011929"}}>
          <img  style={{width:"175px"}}  src={logo} alt="logo"/>
      </div>
    );
  }
}

export default Header;
