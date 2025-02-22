import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VikasPath = () => {
  const [activeRound, setActiveRound] = useState(1);
  const navigate = useNavigate();

  const rounds = [
    {
      id: 1,
      title: "Vichar Prastav",
      date: "February 18, 2024",
      time: "6 PM DeadLine",
      description: "Learn the essential components of a professional resume",
      topics: [
        "Understanding resume sections",
        "Formatting and layout best practices",
        "Action words and professional language",
        "Common resume mistakes to avoid"
      ]
    },
    {
      id: 2,
      title: "Vigyan Sankalp",
      date: "February 19, 2024",
      time: "6 PM Deadline",
      description: "Make your resume ATS-friendly and increase visibility",
      topics: [
        "Understanding ATS systems",
        "Keyword optimization techniques",
        "Format compatibility",
        "Testing your resume against ATS"
      ]
    },
    {
      id: 3,
      title: "Vyapar Sabha",
      date: "February 21, 2024",
      time: "10:00 Am - 1:00 pm",
      description: "One-on-one resume review with industry professionals",
      topics: [
        "Individual feedback sessions",
        "Tailored improvement suggestions",
        "Industry-specific optimization",
        "Final resume polishing"
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
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <img
          src="/res/img/entre.png"
          alt="Logo"
          className="w-32 h-32 object-contain transition-transform duration-300 transform hover:scale-105"
        />

        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Vikas Path</h1>
          <p className="text-lg text-gray-600">It encourages students to think like entrepreneurs and solve real-world problems. it fosters
            innovation and prepares participants for professional success.</p>
        </div>
      </div>

      {/* Rounds Navigation */}
      <div className="flex overflow-x-auto mb-8 bg-white rounded-lg shadow-md p-2 space-x-4 scrollbar-hide">
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
          className={`transition-opacity duration-300 ${activeRound === round.id ? 'block' : 'hidden'}`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Round Content */}
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
                  <Users className="h-5 w-5" />
                  <span>30 spots available</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{round.description}</p>
              <button
                onClick={() => navigate('/register')}
                className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Register for {round.title}
              </button>
            </div>

            {/* Topics Covered */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Topics Covered</h3>
              <div className="grid gap-4">
                {round.topics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VikasPath;
