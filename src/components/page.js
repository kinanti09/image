import React from 'react';
import SearchBar from './searchBar';
import axios from 'axios';

class Page extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 80d34443efaeeade5db4fc3310b701ed403ef20d324231595c30ff1d8e816c69'
            }
        }).then((response) => {
            console.log(response);
        });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default Page;