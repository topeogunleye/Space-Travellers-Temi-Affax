import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MyProfile from './components/MyProfile';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { fetchMissions } from './redux/missions/missions';
import { fetchRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
