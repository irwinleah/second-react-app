// src/App.jsx
import { use } from "react";
import { useState, useEffect } from "react";
import * as videoService from './services/videoService';


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

  return <h1>Hello world!</h1>;
};

export default App;
