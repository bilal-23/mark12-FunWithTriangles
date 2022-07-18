import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import Area from "./components/Area";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/hypotenuse" element={<Hypotenuse />} />
        <Route path="/area-of-triangle" element={<Area />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
