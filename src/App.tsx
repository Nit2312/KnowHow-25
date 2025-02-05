import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MockInterviews from './pages/events/MockInterviews';
import ResumeWorkshop from './pages/events/ResumeWorkshop';
import IndustryTalks from './pages/events/IndustryTalks';
import NetworkingSession from './pages/events/NetworkingSession';
import Results from './pages/Results';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="md:pl-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events/mock-interviews" element={<MockInterviews />} />
            <Route path="/events/resume-workshop" element={<ResumeWorkshop />} />
            <Route path="/events/industry-talks" element={<IndustryTalks />} />
            <Route path="/events/networking" element={<NetworkingSession />} />
            <Route path="/results" element={<Results />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;