import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import Videofree from './components/Videofree';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgotpassword from './components/Forgotpassword';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/video_hub/" element={<Home />} />
        <Route exact path="/video_hub/videos" element={<Video />} />
        <Route exact path="/video_hub/free-videos" element={<Videofree />} />
        <Route exact path="/video_hub/upload" element={<Upload />} />
        <Route exact path="/video_hub/login" element={<Login />} />
        <Route exact path="/video_hub/signup" element={<Signup />} />
        <Route
          exact
          path="/video_hub/forgot-password"
          element={<Forgotpassword />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
