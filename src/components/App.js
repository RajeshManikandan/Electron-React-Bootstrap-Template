import '../assets/css/App.css';
import React, { Component } from 'react';
import os from 'os';
import electron from 'electron';
import '../css/bootstrap.min.css';
import '../css/app.css';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div id="welcome">
                <h1 className="h1 text-danger">Welcome to BP Orchestrator</h1>
                <p>App to Control</p>
                <Button className="bg-green">Get Started</Button>
            </div>
        );
    }
}

export default App;
