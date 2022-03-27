import "./App.css";
import Study from "./pages/study";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Play from "./pages/play";
import Work from "./pages/work";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Study />} />
          <Route path="/play" element={<Play />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
