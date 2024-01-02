import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<h1>Popular Pages</h1>} />
          <Route path="/top-rated" element={<h1>Top Rated Pages</h1>} />
          <Route path="/upcoming" element={<h1>Upcoming Pages</h1>} />
          <Route path="/*" element={<h1>Error Pages</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
