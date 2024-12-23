import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Missions } from './pages/Missions';
import { Technology } from './pages/Technology';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020817] text-white relative">
        <StarField />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;