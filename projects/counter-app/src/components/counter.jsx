// imrc
import React, { Component } from 'react';

// cc
// export default class Counter extends Component {
class Counter extends Component {
    state = {  } 
    render() { 
        // compile time
        // React.createElement()
        // return (<div>Hello world</div>)
        
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
                        <React.Fragment>
                            <h1>Hello world</h1>
                            <div>How are you</div>
                        </React.Fragment>
                    );
        */
        
        
        // ctrl + shift + l
        
        return (
            <React.Fragment>
                <h1>Hello world</h1>
                <div>How are you</div>
            </React.Fragment>
        );
    }
}
 
export default Counter;