import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
const Error = lazy(() => import("./pages/Error"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Cart = lazy(() => import("./pages/Cart"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const Menu = lazy(() => import("./pages/Menu"));
const Services = lazy(() => import("./pages/Services"));
const Shop = lazy(() => import("./pages/Shop"));
const SingleItem = lazy(() => import("./pages/SingleItem"));
const Contact = lazy(() => import("./pages/Contact"));
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Shop/:id" element={<SingleItem />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
