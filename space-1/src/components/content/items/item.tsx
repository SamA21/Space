
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
            <li className="h-[20rem] w-[15rem] border border-2 border-black rounded-lg flex flex-col justify-between">
                <span className="mt-5">{this.props.currentItem.name}</span>
                <span className="mb-5">£{this.convertToPounds(this.props.currentItem.price).toFixed(2)}</span>
            </li>
        );
    }
}

export default Item;
