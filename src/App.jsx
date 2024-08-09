import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Resume from './components/Resume/Resume';
import Contacts from './components/Contacts/Contacts';

export default function App() {
  return (
    <div className=" relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
