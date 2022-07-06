import React from 'react';
interface IProps{
}

interface IState {
}
class Footer extends React.Component<IProps,IState> {
    render(){
        return (
            <footer>
                {Date().toString()}
            </footer>
        );
    }
}

export default Footer;
