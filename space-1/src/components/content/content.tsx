import React from 'react';
import Item from './items/item';


interface IProps{
    
}

interface IState {
    loading: boolean,
    toggle:boolean,
    allItems: shopItems[],
    data:shopItems[]
}

interface shopItems{
    name:string,
    price:number
}


class  Content extends React.Component<IProps,IState> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            loading: true,
            toggle: true,
            allItems: [],
            data: []
        };

    }
   
    componentDidMount() {
        const items: shopItems[] = require('../../assets/items.json'); //use api call and then response flow in full app

        this.setState({
            allItems: this.sortAscending(items), 
            data: this.sortAscending(items).slice(0,5),
            loading: false
        });

    }

    sortAscending(data:shopItems[]){
        data.sort((a,b) => a.price- b.price)
        return data;
    }
    
    sortDescending(data:shopItems[]){
        data.sort((a,b) => a.price- b.price).reverse();
        return data;
    }

    
    showItemsToggle(){
        if(this.state.toggle){
            this.setState({
                toggle: false,
                data: this.sortAscending(this.state.allItems),
            });        
        }
        else{
            this.setState({
                toggle: true,
                data: this.sortAscending(this.state.allItems).slice(0,5),
            });
        }
    }

    render() {
        return (
            <section className="container mx-auto">
                {this.state.loading ? (
                    <h1>Loading items...</h1>
                ) : (
                    <article>
                        <h1 className="text-3xl">Space Items:</h1>
                        <ul className="flex flex-wrap justify-center gap-6 mt-5">
                            {this.state.data.map((items: shopItems) => (
                                <Item currentItem={items} />
                            ))}
                        </ul>
                        <button className="w-32 p-5 my-5 text-white rounded-full bg-cyan-500 border-cyan-500 hover:bg-cyan-600 active:bg-cyan-800" onClick={() => this.showItemsToggle()}>
                            {this.state.toggle?  (<span>View All</span>) : (<span>Collapse</span>)}
                            </button>                   
                    </article>
                )}
            </section>       
        );
   }                  
};

export default Content;
