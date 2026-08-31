import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Attractions from './pages/Attractions';
import ReligiousPlaces from './pages/ReligiousPlaces';
import Entertainment from './pages/Entertainment';
import Hotels from './pages/Hotels';
import Food from './pages/Food';
import Gallery from './pages/Gallery';
import TravelTips from './pages/TravelTips';
import Contact from './pages/Contact';
import PlaceDetail from './pages/PlaceDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/religious-places" element={<ReligiousPlaces />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/food" element={<Food />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/place/:category/:id" element={<PlaceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
