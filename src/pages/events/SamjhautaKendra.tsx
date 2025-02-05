import React, { useState } from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SamjhautaKendra = () => {
  const [activeRound, setActiveRound] = useState(1);
  const navigate = useNavigate(); // Initialize navigate

  const rounds = [
    {
      id: 1,
      Mode: "Online",
      title: "Nivesh Soch",
      date: "March 25, 2024",
      time: "1:00 PM - 2:30 PM",
      description: "Industry leaders discuss current and future tech trends.",
      requirements: [
        "Laptop or Smartphone with internet access.",
        "Basic understanding of current tech trends.",
        "Active participation in discussions."
      ]
    },
    {
      id: 2,
      Mode: "Online",
      title: "Kalam Ki Takat",
      date: "March 25, 2024",
      time: "3:00 PM - 4:30 PM",
      description: "It is an online event where participants submit professional emails, evaluated on structure, clarity, and persuasion skills. The goal is to assess participants' ability to effectively communicate their ideas and justify their needs in a concise and professional manner.",
      requirements: [
        "Laptop or Smartphone with internet access.",
        "Proper email formatting and professionalism.",
        "Clear and concise budget justification.",
        "Accurate and relevant file attachment."
      ]
    },
    {
      id: 3,
      title: "Charchaa Chakra",
      Mode: "Offline",
      venue: "A201",
      date: "March 25, 2024",
      time: "3:15 PM onwards",
      description: "Charchaa Chakra is an offline event where students engage in a budget allocation discussion, aiming to utilize 100% of the budget with professionalism. Jury members assess leadership, adaptability, and a company-first mindset to select top participants.",
      requirements: [
        "Basic knowledge of cutting-edge tech.",
        "Active participation during the demo.",
        "Willingness to ask questions.",
        "Formal Dress code"
      ]
    },
    {
      id: 4,
      title: "Surprise Round",
      date: "March 25, 2024",
      Mode: "Offline",
      venue: "TPC Cell",
      time: "9:30 AM onwards",
      description: "It is a surprise round, and its details will be available on the same day of the event.",
      requirements: [
        "Curiosity about new technologies.",
        "Ability to think on your feet.",
        "Participation in spontaneous activities.",
        "Formal Dress code"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Samjhauta Kendra</h1>
        <p className="text-xl text-gray-600">Learn from industry leaders and gain valuable insights</p>
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
                onClick={() => navigate('/register')} // Now this should work
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

export default SamjhautaKendra;
