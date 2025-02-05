import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, FileText, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Pragyan
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering your career journey through knowledge, preparation, and networking
        </p>
      </div>

      {/* YouTube Video Section */}
      <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/es4x5R-rV9s"
            title="WisdomPath Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/events/mock-interviews" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Calendar className="h-20 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safalta Setu</h3>
            <p className="text-gray-600">Practice with industry professionals and get valuable feedback</p>
          </div>
        </Link>

        <Link to="/events/resume-workshop" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <FileText className="h-16 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vikas Path</h3>
            <p className="text-gray-600">Craft a compelling resume that stands out to employers</p>
          </div>
        </Link>

        <Link to="/events/industry-talks" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <MessageSquare className="h-20 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Samjhauta Kendra</h3>
            <p className="text-gray-600">Learn from industry leaders about current trends and opportunities</p>
          </div>
        </Link>

        <Link to="/events/networking" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <Users className="h-16 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lokniti Shastra</h3>
            <p className="text-gray-600">Connect with professionals and build valuable relationships</p>
          </div>
        </Link>
      </div>

      {/* Image Section with Overlay Text */}
      <div className="mt-16 relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-900/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Team collaboration"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg md:text-xl mb-8">Connect with like-minded professionals and take your career to new heights</p>
            <Link 
              to="/register" 
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;