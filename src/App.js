import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
