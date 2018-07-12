import React, {Component} from 'react';

// This "hello.js" file is an example that shows a state update

export default class Hello extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render () {
        return <div>
            <h1>Hello {this.state.name}!</h1>
            <input type="text" name="name" onChange={this.handleChange}></input>
        </div>
    }
}