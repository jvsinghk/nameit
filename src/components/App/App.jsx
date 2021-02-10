import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

export class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
    };

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !inputText.length });
    };

    render() {
        return (
            <div>
                <Header
                    headTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded}
                />
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        );
    }
}

export default App;
