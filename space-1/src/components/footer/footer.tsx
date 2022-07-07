import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                {Date().toString()}
            </footer>
        );
    }
}

export default Footer;
