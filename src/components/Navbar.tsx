import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, GraduationCap, Users2, ChevronDown, Trophy, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const events = [
    { path: "/events/SafaltaSetu", name: "Safalta Setu" },
    { path: "/events/VikasPath", name: "Vikas Path" },
    { path: "/events/SamjhautaKendra", name: "Samjhauta Kendra" },
    { path: "/events/LoknitiShastra", name: "Lokniti Shastra" }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-[#202F3E] text-white w-64 transform transition-transform duration-200 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto`}>

        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">

                <img src="./res/img/KnowHow_25_img.png" alt="" className='w-25 h-25' />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Pragyan</span>
                <span className="text-xs text-indigo-200">Guiding Your Success</span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors">
              <GraduationCap className="h-5 w-5" />
              <span>Home</span>
            </Link>

            {/* Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsEventsOpen(!isEventsOpen)}
                className="w-full flex items-center justify-between hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <Users2 className="h-5 w-5" />
                  <span>Events</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${isEventsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isEventsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {events.map((event) => (
                    <Link
                      key={event.path}
                      to={event.path}
                      className="block hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {event.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/results" className="flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors">
              <Trophy className="h-5 w-5" />
              <span>Results</span>
            </Link>

            <Link to="/team" className="flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors">
              <Users className="h-5 w-5" />
              <span>Our Team</span>
            </Link>

            <div className="pt-4 border-t border-indigo-500">
              <Link to="/register" className="block bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-indigo-600 rounded-md text-white md:hidden"
      >
        <Users2 className="h-6 w-6" />
      </button>
    </>
  );
};

export default Navbar;