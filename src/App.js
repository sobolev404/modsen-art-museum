import Detail from "./pages/Detail";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
          <Route path="/favourites" element={<Favourites/>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
