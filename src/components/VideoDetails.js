import React from 'react'

function VideoDetails ( {videoInfo} ) {
  return (
    <div>
    <h1>{videoInfo.title}</h1>
    <h5>{videoInfo.views} Views | Uploaded { videoInfo.createdAt}</h5>
    </div>
  )
  
}


export default VideoDetails