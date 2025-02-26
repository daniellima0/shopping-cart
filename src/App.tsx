import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello world</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
