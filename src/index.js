import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCvaXI6u_xePfwjDSpnSD_vkUhpNIYNRaY';

//First argument is configuration options and second argument is callback function.


//Create a new Component. This Component should produce
//some HTML

class App extends React.Component{
  constructor(props){
    super(props);


    this.state = {
      videos : [] ,
      selectedVideo : null
    } ;

    this.videoSearch('surfing');
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term:term}, (videos) => {
      this.setState({
        videos : videos ,
        selectedVideo : videos[0]
      });
    });
  }

  render(){
    //lodash function
    //videoSearchfunction can be called once every 300 ms
    //const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);

    return (
      <div>
        <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));

//Take this Component's generated HTML and put it
//on the page(in the DOM)

//React is use to create and manage components
//Whereas react-dom is used to interect with actual DOM.
