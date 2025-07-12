// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Homepage';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Shop from './pages/shop/Shop';
import Others from './pages/others/Others';
import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/others" element={<Others />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
