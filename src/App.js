import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './index.css';

const pageTransition = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.6 }
};

const Page = ({ children, next, label }) => {
  const navigate = useNavigate();
  return (
    <motion.div {...pageTransition} className="min-h-screen flex flex-col justify-center items-center p-6 text-center px-4 bg-gradient-to-b from-pink-100 to-pink-200 text-pink-900 font-sans">
      {children}
      {next && (
        <button onClick={() => navigate(next)} className="mt-10 px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition-all">
          {label}
        </button>
      )}
    </motion.div>
  );
};

const Page1 = () => (
  <Page next="/nikah" label="View Nikah Details">
    <p className="italic text-pink-700 mb-2 text-sm">ALLAH'S Name to commence with, the Most Gracious, the Most Merciful.</p>
    <h1 className="text-3xl md:text-5xl font-bold mb-4">WE ARE GETTING MARRIED</h1>
    <div className="relative inline-block mb-1">
      <p className="text-xl md:text-2xl text-pink-600 font-serif font-bold">Mohammed Shaibaz Ali</p>
      <p className="absolute right-0 text-xs text-pink-500">B.Tech., Soft. Engg.</p>
    </div>
    <p className="text-pink-800 mb-4 text-sm md:text-base">S/o Mohammed Ayub (OT Technician), Ballari</p>
    <p className="text-lg text-pink-600 mb-2">weds</p>
    <div className="relative inline-block">
      <p className="text-xl md:text-2xl text-pink-600 font-serif font-bold">Noor-e-Ain</p>
      <p className="absolute right-0 text-xs text-pink-500">M.A., B.Ed</p>
    </div>
    <p className="text-pink-800 mt-2 text-sm md:text-base">Younger D/o Mohammad (Line Inspector, TGSPDCL, Gadwal Rural)</p>
  </Page>
);

const Page2 = () => (
  <Page next="/valima" label="View Valima Details">
    <h2 className="text-2xl font-bold mb-2">Nikah Ceremony</h2>
    <p className="mb-1 text-sm">Sunday, 18th May 2025 (19th Zilgad, 1446 Hijri)</p>
    <p className="mb-1 text-sm">Lunch @ 1:00 PM onwards</p>
    <p className="text-sm">Star Function Hall, Chenugonipally Road, Gadwal, Telangana</p>
    <a href="https://maps.google.com/?q=Star+Function+Hall,+Chenugonipally+Road,+Gadwal" target="_blank" className="text-pink-600 mt-4 inline-flex items-center hover:underline text-sm">
      <FaMapMarkerAlt className="mr-1" /> View on Map
    </a>
  </Page>
);

const Page3 = () => (
  <Page next="/compliments" label="See Compliments">
    <h2 className="text-2xl font-bold mb-2">Valima Ceremony</h2>
    <p className="mb-1 text-sm">Tuesday, 20th May 2025</p>
    <p className="mb-1 text-sm">Lunch @ 1:00 PM</p>
    <p className="text-sm">Grand Function Hall, Rupangudi Road, Nabi Colony,<br /> Near Rayan School, Ballari</p>
    <a href="https://maps.google.com/?q=Grand+Function+Hall,+Rupangudi+Road,+Ballari" target="_blank" className="text-pink-600 mt-4 inline-flex items-center hover:underline text-sm">
      <FaMapMarkerAlt className="mr-1" /> View on Map
    </a>
  </Page>
);

const Page4 = () => (
  <Page>
    <h2 className="text-xl font-semibold mb-2">With Best Compliments</h2>
    <p className="text-sm mb-4">K. Noor Ahmed, Zulfiqar Ali, Late Md. Yaqub, Khajamoinuddin, Faiz Khan,<br/>Late Basha Miyan, Khadeer Miyan, Zameer Miyan, Salam Miyan</p>
    <p className="italic text-pink-700 mt-2 text-sm">“Shab E Asra Ke Dulha Pe Dayam Durood, Nau Shahe Jannat Pe Lakhon Salaam”</p>
    <a href="https://wa.me/your-number" target="_blank" className="mt-6 inline-block bg-pink-500 px-6 py-2 text-white rounded-full shadow hover:bg-pink-600 transition text-sm">
      <FaWhatsapp className="mr-2" /> RSVP on WhatsApp
    </a>
  </Page>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/nikah" element={<Page2 />} />
        <Route path="/valima" element={<Page3 />} />
        <Route path="/compliments" element={<Page4 />} />
      </Routes>
    </Router>
  );
}
