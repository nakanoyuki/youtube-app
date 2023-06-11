import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
          <Route path={`/search/`} element={<Search />} />
          <Route path={`/watch/`} element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
