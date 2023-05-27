import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Video from "./components/Video"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Video/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
