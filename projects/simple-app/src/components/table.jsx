import React, { Component } from 'react';
import TableItem from './tableItem';


class CustomTable extends Component {
    
    constructor() {
        super();
        this.state = { 
            data: ['product1', 'product2', 'product3']  
        }
    }

    render() { 
        return (
            <ul className="list-group">
                {this.state.data.map(item => (<TableItem item={item} key={item}/>))}
            </ul>
        );
    }
}
 
export default CustomTable;