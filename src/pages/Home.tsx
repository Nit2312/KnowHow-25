import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, FileText, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-16">
        <img
          src="/res/img/BVM.png"
          alt="Logo"
          className="w-32 h-32 object-contain"
        />
        <div className="flex-1 text-center md:text-center mx-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            KnowHow'25
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 max-w-2xl mx-auto">
            Embrace the Power of knowledge.
          </p>
        </div>
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
        <Link to="/events/VikasPath" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
            <img
              src="/res/img/entre.png"
              alt="Samjhauta Kendra"
              className="w-16 h-16 object-contain mb-4"  // Ensure the image is correctly sized and centered
            />
            <h3 className="text-xl font-semibold mb-2">Vikas Path</h3>
            <p className="text-gray-600 flex-grow">From Idea to Impact: Innovate, Market, Showcase!</p>
          </div>
        </Link>

        <Link to="/events/SafaltaSetu" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
            <img
              src="/res/img/placement copy.png"
              alt="Samjhauta Kendra"
              className="w-16 h-16 object-contain mb-4"  // Ensure the image is correctly sized and centered
            />
            <h3 className="text-xl font-semibold mb-2">Safalta Setu</h3>
            <p className="text-gray-600 flex-grow">The road to success begins here</p>
          </div>
        </Link>

        <Link to="/events/SamjhautaKendra" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
            <img
              src="/res/img/nego.png"
              alt="Samjhauta Kendra"
              className="w-16 h-16 object-contain mb-4"  // Ensure the image is correctly sized and centered
            />
            <h3 className="text-xl font-semibold mb-2">Samjhauta Kendra</h3>
            <p className="text-gray-600 flex-grow">Drive the Outcome: Think, Negotiate, Dominate!</p>
          </div>
        </Link>


        <Link to="/events/LoknitiShastra" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
            <img
              src="/res/img/politic.png"
              alt="Samjhauta Kendra"
              className="w-16 h-16 object-contain mb-4"  // Ensure the image is correctly sized and centered
            />
            <h3 className="text-xl font-semibold mb-2">Lokniti Shastra</h3>
            <p className="text-gray-600 flex-grow">Rise, Speak, Lead</p>
          </div>
        </Link>
      </div>


      {/* Image Section with Overlay Text */}
      <div className="mt-16 relative overflow-hidden rounded-2xl shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-900/90 mix-blend-multiply" />
        <img
          src="/res/img/bvm front.jpg"
          alt="Team collaboration"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center text-white max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us</h2>
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