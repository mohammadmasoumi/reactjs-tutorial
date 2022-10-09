// imrc
// import React, { Component, Fragment } from 'react';
import React, { Component } from 'react';

// cc
// export default class Counter extends Component {
class Counter extends Component {
    state = { 
        count: 0, 
        // imageUrl: "https://picsum.photos/200"
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    render() { 
        // compile time
        // React.createElement()
        // return (<div>Hello world /div>)
        
        /*
            The first element is type

            createElement(type: "input", props?: (React.InputHTMLAttributes<HTMLInputElement> & 
                React.ClassAttributes<HTMLInputElement>) | null | undefined, ...children: React.ReactNode[]): 
                React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
        
            Problem:
            
                return (<h1>Hello world</h1><div>How are you</div>);

            Solution:

                1. parent tag
                    return (
                        <div>
                            <h1>Hello world</h1>
                            <div>How are you</div>
                        </div>
                    );

                2. React Fragment
                    return (
                        <Fragment>
                            <h1>Hello world</h1>
                            <div>How are you</div>
                        </Fragment>
                    );
        */
        
        // ctrl + shift + l
        
        return (
            <div>
                {/* <image src={this.state.image} alt="This is a simple image"></image> */}
                {/* <h1>Hello world</h1> */}
                {/* <div>How are you</div> */}
                {/* <span style={this.styles} className="badge rounded-pill text-bg-primary m-2">{this.formatCount()}</span> */}

                <span style={{ fontSize: 20, fontWeight: "bold" }} className="badge rounded-pill text-bg-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        return this.state.count === 0 ? "Zero": this.state.count
    }
}


 
export default Counter;