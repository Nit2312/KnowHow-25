import React, { useState } from 'react';
import { Calendar, Clock, Users, Building2 } from 'lucide-react';

const NetworkingSession = () => {
  const [activeRound, setActiveRound] = useState(1);

  const rounds = [
    {
      id: 1,
      title: "Speed Networking",
      date: "March 30, 2024",
      time: "5:00 PM - 6:00 PM",
      description: "Quick introductions with multiple professionals",
      companies: ["Google", "Microsoft", "Amazon"],
      requirements: [
        "Business cards",
        "30-second elevator pitch",
        "Professional attire",
        "Questions prepared"
      ]
    },
    {
      id: 2,
      title: "Industry Roundtables",
      date: "March 30, 2024",
      time: "6:15 PM - 7:15 PM",
      description: "In-depth discussions with industry leaders",
      companies: ["Apple", "Meta", "Netflix"],
      requirements: [
        "Research about companies",
        "Industry knowledge",
        "Discussion topics",
        "Note-taking materials"
      ]
    },
    {
      id: 3,
      title: "Career Fair",
      date: "March 30, 2024",
      time: "7:30 PM - 8:00 PM",
      description: "Open networking with company representatives",
      companies: ["LinkedIn", "Twitter", "Uber"],
      requirements: [
        "Updated resume copies",
        "Portfolio (if applicable)",
        "Company preference list",
        "Follow-up strategy"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Networking Session</h1>
        <p className="text-xl text-gray-600">Connect with industry professionals and build valuable relationships</p>
      </div>

      {/* Rounds Navigation */}
      <div className="flex overflow-x-auto mb-8 bg-white rounded-lg shadow-md p-2">
        {rounds.map((round) => (
          <button
            key={round.id}
            onClick={() => setActiveRound(round.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-md font-medium transition-colors ${
              activeRound === round.id
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
          className={`transition-opacity duration-300 ${
            activeRound === round.id ? 'block' : 'hidden'
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
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>50 participants maximum</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building2 className="h-5 w-5" />
                  <span>In-person event</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{round.description}</p>
              <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
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

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Participating Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {round.companies.map((company, index) => (
                <div key={index} className="p-4 text-center border rounded-lg">
                  <span className="font-semibold text-gray-800">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkingSession;