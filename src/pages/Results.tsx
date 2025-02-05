import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Results = () => {
  const placementStats = [
    { company: "Google", count: 45 },
    { company: "Microsoft", count: 38 },
    { company: "Amazon", count: 42 },
    { company: "Meta", count: 35 }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      testimonial: "WisdomPath's mock interviews were instrumental in my preparation. The feedback helped me improve significantly."
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Microsoft",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      testimonial: "The industry talks gave me invaluable insights into what companies look for in product managers."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h1>
        <p className="text-xl text-gray-600">Celebrating the achievements of our students</p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {placementStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">{stat.count}+</h3>
            <p className="text-gray-600">Placements at {stat.company}</p>
          </div>
        ))}
      </div>

      {/* Overall Statistics */}
      <div className="bg-indigo-600 text-white rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Star className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">95%</h3>
            <p>Placement Rate</p>
          </div>
          <div>
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">$125K</h3>
            <p>Average Starting Salary</p>
          </div>
          <div>
            <Trophy className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p>Success Stories</p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">Student Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-indigo-600">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{story.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;