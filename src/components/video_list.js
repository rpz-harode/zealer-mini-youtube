import React from 'react' ;
import VideoListItem from './video_list_item' ;

//We will className for bootstrap css classes to avoid conflicts with jsx of react.
const VideoList = (props) => {
//Default syntax for mapping - array.map(function(number){return})
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video = {video} />)
  });
  return(
    <div>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  ) ;
};

export default VideoList ;
