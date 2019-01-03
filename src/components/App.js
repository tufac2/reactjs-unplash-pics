import React from 'react'
import axios from 'axios'
// import unplash from '../api/unplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

export default class App extends React.Component {
  state = { images: [] }
  
  onSearchSubmit = async (term) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params:{
        query: term
      },
      headers: {
        Authorization: 'Client-ID 07aa6ddfffe9f96d5c80d771fcdd382828d54e223dd8ab3bf74e9dae8c5bc2cf'
      }
    });
   
    this.setState({ images: res.data.results})
  }
  render() {
    return(
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={ this.state.images }/>
        {/* Found: { this.state.images.length } */}
      </div>
    )
  }
}