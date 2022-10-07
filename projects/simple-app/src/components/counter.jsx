import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count: 0,
        styles: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
     }

     constructor() {
        super();
        this.handleIncrease = this.handleIncrease.bind(this)
     }

     handleIncrease() {
        // let count = this.state.count
        let {count} = this.state
        count += 1
        // {'count': count} <=> {count}
        this.setState({count})
     }

     handleReset(productId) {
        console.log("productId", productId)

        const count = 0
        this.setState({count})
     }
    
    render() { 
        return (
            <React.Fragment>
                <div style={this.state.styles}>
                    <p 
                        style={{fontSize: '24px', textAlign: 'center' }} 
                        className='p3'>
                        {this.state.count}
                    </p>
                    <button 
                        className='btn btn-primary btn-lg' 
                        // () => this.handleIncrease()
                        onClick={this.handleIncrease}
                    >   Count
                    </button>
                    <button 
                        className='btn btn-danger btn-lg' 
                        onClick={() => this.handleReset(1)}
                    >   Reset
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;