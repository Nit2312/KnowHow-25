import React from 'react';
import { Linkedin, Mail, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      bio: "Former Google Tech Lead with 15+ years of industry experience",
      linkedin: "#",
      email: "emily@wisdompath.com"
    },
    {
      name: "Michael Thompson",
      role: "Head of Career Services",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Ex-Amazon recruiter helping students land their dream jobs",
      linkedin: "#",
      email: "michael@wisdompath.com"
    }
  ];

  const mentors = [
    {
      name: "Alex Turner",
      company: "Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lisa Wang",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "James Wilson",
      company: "Amazon",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
        <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
      </div>

      {/* Core Team */}
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-indigo-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-gray-600 hover:text-indigo-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-indigo-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Mentors */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Industry Mentors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
              <p className="text-indigo-600 mb-3">{mentor.company}</p>
              <div className="flex justify-center space-x-1 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us Banner */}
      <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-6">We're always looking for passionate individuals to join our mission</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
          View Openings
        </button>
      </div>
    </div>
  );
};

export default Team;