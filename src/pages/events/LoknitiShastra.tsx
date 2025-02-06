import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoknitiShastra = () => {
  const [activeRound, setActiveRound] = useState(1);
  const navigate = useNavigate();

  const rounds = [
    {
      id: 1,
      Mode: 'Online',
      title: "Vartaman Dhrishya",
      date: "March 30, 2024",
      time: "6:30 PM - 7:00 PM",
      description: "The quiz tests knowledge of current affairs, general knowledge, and recent political changes.",
      requirements: [
        "Participants will answer 50 questions.",
        "The time limit is 25 minutes to complete the quiz.",
        "The quiz tests both speed and accuracy in political and economic topics.",
        "The goal is to identify the top scorers who complete the quiz the fastest."
      ]
    },
    {
      id: 2,
      Mode: "Online",
      title: "Pratik Nirman",
      date: "March 30, 2024",
      time: "9:00 PM - 10:00 PM",
      requirements: [
        "Participants design a logo and slogan reflecting the event's theme.",
        "Designs are judged on originality, appeal, and simplicity.",
        "The round emphasizes innovation and visual communication skills.",
      ]
    },
    {
      id: 3,
      Mode: "Offline",
      title: "Samathan Yukti",
      date: "March 30, 2024",
      time: "6.00 pm -7.00 PM",
      Venue: "A-209 & A-210",
      requirements: [
        "Participants respond to real-world situations with practical, accurate solutions.",
        "Focuses on critical thinking and quick decision-making.",
        "Avoids hypothetical scenarios, emphasizing actionable answers.",
        "Evaluates problem-solving skills in dynamic scenarios."
      ]
    },
    {
      id: 4,
      title: "Loksabha",
      Mode: "Offline",
      date: "March 30, 2024",
      time: "4 PM onwards",
      Venue: "A-224",
      requirements: [
        "Participants are divided into supporters and opposers of a given ministry.",
        "Each presents clear, concise arguments supported by relevant data.",
        "Tests ability to engage in structured, persuasive debate.",
        "Focuses on adherence to debate principles and well-supported viewpoints."
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="block md:hidden flex items-center mb-6 mt-4">
        <img
          src="/res/img/knowHow'25 img.png"
          alt="Logo"
          className="w-14 h-14 object-contain mr-2" 
        />
        <h1 className="text-2xl font-bold text-gray-900">KnowHow25</h1>
      </div>


      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <img
          src="/res/img/politic.png"
          alt="Logo"
          className="w-32 h-32 object-contain transition-transform duration-300 transform hover:scale-105"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Lokniti Shastra</h1>
          <p className="text-lg text-gray-600">Rise, Speak, Lead</p>
        </div>
      </div>

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

      {rounds.map((round) => (
        <div
          key={round.id}
          className={`transition-opacity duration-300 ${activeRound === round.id ? 'block' : 'hidden'}`}
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

                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="h-5 w-5" />
                  <span>{round.Mode}</span>
                </div>

                {round.Venue && (
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{round.Venue}</span>
                  </div>
                )}
              </div>
              <p className="mt-4 text-gray-700">{round.description}</p>
              <button onClick={() => navigate('/register')} className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                Register for {round.title}
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">What to Bring</h3>
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

export default LoknitiShastra;
