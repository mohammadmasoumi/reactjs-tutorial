import React, { Component } from 'react';


class TableItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          item: props.item,
        };
      }

    render() { 
        return (<li className="list-group-item">{this.state.item}</li>);
    }
}
 
export default TableItem;