import React, { useState } from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SafaltaSetu = () => {
  const [activeRound, setActiveRound] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  const rounds = [
    {
      id: 1,
      title: "Yukti Pariksha",
      date: "February 17, 2024",
      Mode: "Online",
      time: "7.00 Pm - 8:00 PM",
      description: "Aptitude questions in companies test problem-solving, logical reasoning, and math skills, focusing on topics like data structures, algorithms, and quantitative reasoning.",
      requirements: [
        "Laptop or Smartphone with working camera and microphone",
        "Strong internet connection",
      ]
    },
    {
      id: 2,
      title: "Vichar Samvad",
      date: "February 18, 2024",
      Mode: "Offline",
      venue: "A203B, A204, A205, A206",
      time: "4.00 Pm - 7.00 Pm",
      description: "Design scalable systems and discuss architectural decisions",
      requirements: [
        "Formal dress",
        "Note and pen",
      ]
    },
    {
      id: 3,
      title: "Taknik Gyaan",
      date: "February 19, 2024",
      time: "2.00 Pm - 4.00 pm",
      Mode: "Offline",
      venue: "TPC Cell",
      description: "Behavioral questions and cultural fit assessment",
      requirements: [
        "Formal dress",
        "Your Resume",
      ]
    },
    {
      id: 4,
      title: "Manav Moolya",
      date: "February 20, 2024",
      time: " 9.00 Am - 12.30 pm",
      Mode: "Offline",
      venue: "B 405",
      description: "Behavioral questions and cultural fit assessment",
      requirements: [
        "Formal dress",
        "Your Resume",
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="block md:hidden flex items-center mb-6 mt-4">
        <img
          src="/res/img/KnowHow'25 .png"
          alt="Logo"
          className="w-24 h-24 object-contain mr-2"
        />
        <h1 className="text-5xl font-bold text-gray-900 font-custom">KnowHow'25</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <img
          src="/res/img/placement copy.png"
          alt="Logo"
          className="w-32 h-32 object-contain transition-transform duration-300 transform hover:scale-105"
        />

        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Safalta Setu</h1>
          <p className="text-lg text-gray-600">This event replicates the real-world placement process, equipping students with the skills needed 
          to excel in professional environments.</p>
        </div>
      </div>


      {/* Rounds Navigation */}
      <div className="flex overflow-x-auto mb-8 bg-white rounded-lg shadow-md p-2">
        {rounds.map((round) => (
          <button
            key={round.id}
            onClick={() => setActiveRound(round.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-md font-medium transition-colors ${activeRound === round.id
              ? 'bg-indigo-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            Round {round.id}: {round.title}
          </button>
        ))}
      </div>

      {/* Active Round Content */}
      {rounds.map((round) => (
        <div
          key={round.id}
          className={`transition-opacity duration-300 ${activeRound === round.id ? 'block' : 'hidden'
            }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">{round.title}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>{round.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{round.time}</span>
                </div>
                {/* Display Mode */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="h-5 w-5" />
                  <span>Mode: {round.Mode}</span>
                </div>
                {/* Display Venue if available */}
                {round.venue && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Venue: {round.venue}</span>
                  </div>
                )}
              </div>
              <p className="mt-4 text-gray-700">{round.description}</p>
              <button
                onClick={() => navigate('/register')} // Navigate to the register page
                className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Register for {round.title}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {round.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SafaltaSetu;
