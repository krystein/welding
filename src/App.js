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
  const [open, setopen] = useState(false);

  const toggle = () => {
    setopen(!open);
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown open={open} toggle={toggle} />
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
