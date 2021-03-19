import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'



class App extends React.Component {

    onSearchSubmit = searchTerm => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: searchTerm },
            headers: {
                Authorization: 'Client-ID qyy84rqVFb3jX6sbDQG7SSLDiznio3Hc11gFp3LoKZs'
            }
        })
    }


    render() {
        return (
            <div
                className="ui container"
                style={{ marginTop: '20px' }}
            >
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }

}

export default App;

/*
You can use any word for props to components youve built yourself eg runThis instead of
onSubmit on the SearchBar but not on a normal jsx element eg form

Props can only go down - parent to child. but we need to send items in state(search term) up to App
so App can send the term to the api. thus we created onSearchSubmit and passed the function as a prop
down to onFormSubmit where we pass the search term in state to it. the function is referenced
in searchBar but actually runs in App.js
*/