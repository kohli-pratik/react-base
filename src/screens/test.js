import React, { Component } from 'react';

class TestScreen extends Component {
    render() {
        return (
            <div>
                <h1>{process.env.NODE_ENV}</h1>
            </div>
        );
    }
}

export default TestScreen;
