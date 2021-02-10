import { logDOM } from '@testing-library/react';
import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

export class App extends Component {
    state = {
        headerText: 'Name It!',
    };
    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <h3>{this.state.headerText}</h3>
                <button
                    onClick={() => {
                        this.setState({
                            headerText: 'Did Magic Happen?',
                        });
                    }}
                >
                    Magic Happens Here!
                </button>
            </div>
        );
    }
}

export default App;
