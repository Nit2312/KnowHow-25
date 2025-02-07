import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

const Results = () => {
  const events = [
    {
      title: "Mock Interviews",
      description: "View results and feedback from our mock interview sessions",
      spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1234567890/edit?usp=sharing"
    },
    {
      title: "Resume Workshop",
      description: "Track improvements and success rates from our resume workshops",
      spreadsheetUrl: "https://docs.google.com/spreadsheets/d/0987654321/edit?usp=sharing"
    },
    {
      title: "Industry Talks",
      description: "Access attendance and engagement metrics from industry sessions",
      spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1122334455/edit?usp=sharing"
    },
    {
      title: "Networking Session",
      description: "See connection statistics and follow-up success rates",
      spreadsheetUrl: "https://docs.google.com/spreadsheets/d/5544332211/edit?usp=sharing"
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
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Results</h1>
        <p className="text-xl text-gray-600">Track our events' impact and success metrics</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-xl shadow-xl p-8 flex flex-col transform transition-all duration-200 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
            <p className="text-lg text-gray-600 mb-8 flex-grow">{event.description}</p>
            <a
              href={event.spreadsheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              <FileSpreadsheet className="h-6 w-6" />
              <span>View Results</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;