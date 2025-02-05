import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MockInterviews from './pages/events/SafaltaSetu';
import ResumeWorkshop from './pages/events/VikasPath';
import IndustryTalks from './pages/events/SamjhautaKendra';
import NetworkingSession from './pages/events/LoknitiShastra';
import Results from './pages/Results';
import Team from './pages/Team';
import SafaltaSetu from './pages/events/SafaltaSetu';
import VikasPath from './pages/events/VikasPath';
import SamjhautaKendra from './pages/events/SamjhautaKendra';
import LoknitiShastra from './pages/events/LoknitiShastra';
import SubmissionDetails from './pages/SubmissionDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="md:pl-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events/SafaltaSetu" element={<SafaltaSetu />} />
            <Route path="/events/VikasPath" element={<VikasPath />} />
            <Route path="/events/SamjhautaKendra" element={<SamjhautaKendra />} />
            <Route path="/events/LoknitiShastra" element={<LoknitiShastra/>} />
            <Route path="/results" element={<Results />} />
            <Route path="/submission-details" element={<SubmissionDetails />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;