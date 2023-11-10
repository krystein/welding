import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/Dropdown";
import GlobalStyle from "./globalstyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./components/index";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import DragDropImageLoader from "./page/dragdrop";
import ImageViewer from "./page/ImageGallery";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/dragdrop" element={<DragDropImageLoader />}></Route>
        <Route path="/ImageGallery" element={<ImageViewer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
