import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./GlobalStyles";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Team from "./pages/Team";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";

// Components
import Nav from "./components/Nav";
import NavScroll from "./components/NavScroll";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [fromTop, setFromTop] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const listenFromTop = () => {
    window.scrollY > 200 ? setFromTop(true) : setFromTop(false);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", listenFromTop);

    return () => {
      window.removeEventListener("scroll", listenFromTop);
    };
  }, [fromTop]);

  const checkWidth = () => {
    setPageWidth(window.innerWidth);
  };

  const closeMenuResize = () => {
    return window.innerWidth > 768 ? setNavOpen(false) : null;
  };

  useEffect(() => {
    window.addEventListener("scroll", checkWidth);
    window.addEventListener("resize", closeMenuResize);

    return () => {
      window.removeEventListener("scroll", checkWidth);
      window.removeEventListener("resize", closeMenuResize);
    };
  }, [pageWidth]);

  const location = useLocation();

  return (
    <div>
      <GlobalStyle fromTop={fromTop} />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      {pageWidth > 768 && (
        <NavScroll
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          pageWidth={pageWidth}
        />
      )}
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<Home pageWidth={pageWidth} />} />
          <Route
            path="/Services"
            element={<Services pageWidth={pageWidth} />}
          />
          <Route path="/OurWork" element={<OurWork pageWidth={pageWidth} />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/PrivacyPolicy" element={<Policy />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;