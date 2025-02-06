import React, { useState, useEffect } from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { GraduationCap, Users2, ChevronDown, Trophy, Menu} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const events = [
    { path: "/events/SafaltaSetu", name: "Safalta Setu" },
    { path: "/events/VikasPath", name: "Vikas Path" },
    { path: "/events/SamjhautaKendra", name: "Samjhauta Kendra" },
    { path: "/events/LoknitiShastra", name: "Lokniti Shastra" }
  ];

  // Function to determine if the current route matches the link
  const isActive = (path: string) => location.pathname === path ? 'text-white bg-indigo-700' : '';

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 h-full w-64 bg-[#202F3E] text-white transform transition-transform duration-200 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto`}>
        <div className="p-4">
          <div className="flex items-center justify-center mb-8">
            <Link to="/">
              <img src="/res/img/KnowHow_25_img.png" alt="Logo" className="w-40 h-40 object-contain" />
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            
            <Link to="/" className={`flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors ${isActive('/')}`}>
              <GraduationCap className="h-5 w-5" />
              <span>Home</span>
            </Link>

            
            <div className="relative">
              <button
                onClick={() => setIsEventsOpen(!isEventsOpen)}
                className={`w-full flex items-center justify-between hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors ${isActive('/events')}`}
              >
                <div className="flex items-center space-x-2">
                  <Users2 className="h-5 w-5" />
                  <span>Events</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className={`pl-4 mt-2 space-y-2 ${isEventsOpen ? '' : 'hidden'}`}>
                {events.map((event) => (
                  <Link
                    key={event.path}
                    to={event.path}
                    className={`block hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors text-sm ${isActive(event.path)}`}
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
            </div>

            
            <Link to="/results" className={`flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors ${isActive('/results')}`}>
              <Trophy className="h-5 w-5" />
              <span>Results</span>
            </Link>

            
            <Link to="/team" className={`flex items-center space-x-2 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors ${isActive('/team')}`}>
              <Menu className="h-5 w-5" />
              <span>Our Team</span>
            </Link>

            
            <div className="pt-4 border-t border-indigo-700">
              <Link to="/register" className="block bg-white text-[#202F3E] px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-indigo-600 rounded-md text-white md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Navbar;
