import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

import './assets/css/tailwind.css';
import './assets/css/icons.css';

import ScrollToTop from './component/Scroll-top';
import IndexEight from "./pages/index-eight.js";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes >
        <Route path="/" element={<IndexEight />} />
      </Routes>
    </BrowserRouter >
  )

}
export default App;
