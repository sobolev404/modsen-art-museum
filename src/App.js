import Detail from "./pages/Detail";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/detail" element={<Detail/>}></Route>
          <Route path="/favourites" element={<Favourites/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
