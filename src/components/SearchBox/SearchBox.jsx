import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Type keywords"
                />
            </div>
        </div>
    );
};

export default SearchBox;
