import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Video from "./components/Video"
import Videofree from './components/Videofree';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/video_hub/" element={<Home/>} />
        <Route exact path="/video_hub/videos" element={<Video/>} />
        <Route exact path="/video_hub/free-videos" element={<Videofree/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
