import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Redirection from "./Redirection";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/oauth2" element={<Redirection />} />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;