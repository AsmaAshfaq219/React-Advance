//This Component is created to catch errors and display a screen notifying the user
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }
    render() {
        if (this.state.hasError)
            return <h1>An error occured {this.state.errorMessage}</h1>
        else
            return this.props.children;
    }
}

export default ErrorBoundary;