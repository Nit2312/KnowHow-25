import React, { useState } from 'react';
import { Calendar, Clock, Users, Star } from 'lucide-react';

const IndustryTalks = () => {
  const [activeRound, setActiveRound] = useState(1);

  const rounds = [
    {
      id: 1,
      title: "Tech Trends Panel",
      date: "March 25, 2024",
      time: "1:00 PM - 2:30 PM",
      description: "Industry leaders discuss current and future tech trends",
      speakers: [
        {
          name: "Sarah Johnson",
          role: "Tech Lead at Google",
          topic: "Future of AI in Software Development",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Michael Chen",
          role: "Senior Engineer at Microsoft",
          topic: "Cloud Computing Trends",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    {
      id: 2,
      title: "Career Growth Sessions",
      date: "March 25, 2024",
      time: "3:00 PM - 4:30 PM",
      description: "Learn about career progression in tech",
      speakers: [
        {
          name: "Emily Rodriguez",
          role: "Product Manager at Amazon",
          topic: "Product Management in Tech",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "David Kim",
          role: "Engineering Director at Netflix",
          topic: "Engineering Leadership",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    {
      id: 3,
      title: "Innovation Showcase",
      date: "March 25, 2024",
      time: "5:00 PM - 6:00 PM",
      description: "Demonstrations of cutting-edge technology",
      speakers: [
        {
          name: "Alex Turner",
          role: "CTO at Tesla",
          topic: "Future of Electric Vehicles",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Lisa Wang",
          role: "Research Lead at Apple",
          topic: "AR/VR Innovation",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Talks</h1>
        <p className="text-xl text-gray-600">Learn from industry leaders and gain valuable insights</p>
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
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
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
                    <span>100 seats available</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{round.description}</p>
                <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
                  Reserve Your Seat
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
                  alt="Industry Talk Event"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Speakers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {round.speakers.map((speaker, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 mb-2">{speaker.role}</p>
                  <div className="flex items-center justify-center space-x-1 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="mt-4 text-gray-700">{speaker.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryTalks;