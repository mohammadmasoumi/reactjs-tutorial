// imrc
import React, { Component, Fragment } from 'react';

// cc
// export default class Counter extends Component {
class Counter extends Component {
    state = { 
        count: 1, 
        imageUrl: "https://picsum.photos/200"
    };

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
            <Fragment>
                <image src={this.state.image} alt="This is a simple image"></image>
                <h1>Hello world</h1>
                <div>How are you</div>
            </Fragment>
        );
    }
}
 
export default Counter;