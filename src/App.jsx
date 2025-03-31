// src/App.jsx

import { useState, useEffect } from "react";
import * as videoService from './services/videoService';

import VideoList from "./components/VideoList/VideoList";




const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const featuredVideos = async () => {
      try {
        const featuredVideos = await videoService.index();
        if (featuredVideos.err) {
          throw new Error(featuredVideos.err);
        }
        setVideos(featuredVideos);
      } catch (err) {
        console.log(err);
      }
    };
    featuredVideos();
  }, []);

  return (
    <>
      <VideoList videos={videos} />
    </>
  );
};

export default App;
