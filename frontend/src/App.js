import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Vision from "./components/Vision";
import Founders from "./components/Founders";
import HowToHelp from "./components/HowToHelp";
import Footer from "./components/Footer";
import AdminPage from "./components/AdminPage";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Founders />
      <HowToHelp />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
