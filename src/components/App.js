import video from "../data/video.js";
import InteractiveBtns from "./InteractiveBtns";
import VideoDetails from "./VideoDetails";
import Video from "./Video";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video />
      <VideoDetails videoInfo={video} />
      <InteractiveBtns videoInfo={video} />
    </div>
  );
}

export default App;
