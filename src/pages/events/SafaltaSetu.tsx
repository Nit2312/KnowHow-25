import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SafaltaSetu = () => {
  const [activeRound, setActiveRound] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  const rounds = [
    {
      id: 1,
      title: "Yukti Pariksha",
      date: "March 15, 2024",
      Mode: "Online",
      time: "10:00 AM - 12:00 PM",
      description: "Aptitude questions in companies test problem-solving, logical reasoning, and math skills, focusing on topics like data structures, algorithms, and quantitative reasoning.",
      requirements: [
        "Laptop or Smartphone with working camera and microphone",
        "Strong internet connection",
      ]
    },
    {
      id: 2,
      title: "Vichar Samvad",
      date: "March 15, 2024",
      time: "1:00 PM - 2:30 PM",
      description: "Design scalable systems and discuss architectural decisions",
      requirements: [
        "Formal dress",
        "Note and pen",
      ]
    },
    {
      id: 3,
      title: "Taknik Gyaan",
      date: "March 15, 2024",
      time: "3:00 PM - 4:00 PM",
      description: "Behavioral questions and cultural fit assessment",
      requirements: [
        "Formal dress",
        "Your Resume",
      ]
    },
    {
      id: 4,
      title: "Manav Moolya",
      date: "March 15, 2024",
      time: "3:00 PM - 4:00 PM",
      description: "Behavioral questions and cultural fit assessment",
      requirements: [
        "Formal dress",
        "Your Resume",
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Safalta Setu</h1>
        <p className="text-xl text-gray-600">Practice makes perfect - Prepare for your dream job</p>
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
