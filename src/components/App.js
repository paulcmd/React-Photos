import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'



class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchTerm }      
        })
        console.log(response.data.results)
        this.setState({ images: response.data.results })
        
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>

                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
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

9 - why is onSearchSubmit not an arrow funtion??
*/