
import React from 'react';

interface IProps{
    currentItem: shopItems
}

interface IState {
}


interface shopItems{
    name:string,
    price:number
}


class Item extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props);
    }

    convertToPounds(pence:number){
        return pence/10.0;
    }

    render(){
        return (        
            <li>
                {this.props.currentItem.name} - £{this.convertToPounds(this.props.currentItem.price).toFixed(2)}
            </li>
        );
    }
}

export default Item;
