import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  password: string;
  collegeId: string;
  department: string;
  year: string;
  selectedEvents: string[];
  totalAmount: number;
}

const Register = () => {
  const navigate = useNavigate();
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    collegeId: '',
    department: '',
    year: '',
    selectedEvents: [],
    totalAmount: 0
  });

  const events = [
    { id: 'Safalta-Setu', name: 'Safalta Setu', price: 40 },
    { id: 'Vikas-Path', name: 'Vikas Path', price: 40 },
    { id: 'Samjhauta-Kendra', name: 'Samjhauta Kendra', price: 40 },
    { id: 'Lokniti-Shastra', name: 'Lokniti Shastra', price: 40 }
  ];

  const departments = [
    'Computer Emgineering', // cp
    'Information Technology', // IT
    'Electronics & Communication', // EC
    'Electrical Engineering', // EE
    'Mechanical Engineering', // ME
    'Civil Engineering', // CE
    'Production Engineering', // PE
    'Electronic Engineering', //El
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  const comboPrice = 129.99;
  const savings = events.reduce((acc, event) => acc + event.price, 0) - comboPrice;

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents((prevSelected) => {
      if (prevSelected.includes(eventId)) {
        return prevSelected.filter((id) => id !== eventId);
      } else {
        return [...prevSelected, eventId];
      }
    });
  };

  const handleComboSelect = () => {
    setSelectedEvents(events.map((event) => event.id));
  };

  const calculateTotal = () => {
    if (selectedEvents.length === events.length) {
      return comboPrice;
    }
    return selectedEvents.reduce((total, eventId) => {
      const event = events.find((e) => e.id === eventId);
      return total + (event?.price || 0);
    }, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedEventDetails = selectedEvents.map((eventId) => {
      const event = events.find((e) => e.id === eventId);
      return {
        name: event?.name,
        price: event?.price
      };
    });

    const submissionData = {
      ...formData,
      selectedEvents: selectedEventDetails,
      totalAmount: calculateTotal()
    };

    // Redirect to a new page and pass data
    navigate('/submission-details', { state: { submissionData } });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div>
          <div className="mx-auto flex justify-center">
            <UserPlus className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Create a password"
              />
            </div>
          </div>

          {/* College Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">College Information</h3>
            <div>
              <label htmlFor="college-id" className="block text-sm font-medium text-gray-700 mb-1">
                College ID
              </label>
              <input
                id="college-id"
                name="collegeId"
                type="text"
                required
                value={formData.collegeId}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your college ID"
              />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                name="department"
                required
                value={formData.department}
                onChange={handleInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select your department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Year of Study
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select your year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Selection */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Events</h3>

            {/* Combo Offer */}
            <div className="mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">Complete Package Deal</h4>
                  <p className="text-sm opacity-90">Access to all events at a discounted price</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">₹{comboPrice}</p>
                  <p className="text-sm text-indigo-200">Save ₹{savings.toFixed(2)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleComboSelect}
                className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-md"
              >
                Select All Events (Combo)
              </button>
            </div>

            {/* Individual Event Selection */}
            {events.map((event) => (
              <div key={event.id} className="flex items-center mb-4">
                <input
                  id={event.id}
                  name="events"
                  type="checkbox"
                  checked={selectedEvents.includes(event.id)}
                  onChange={() => handleEventToggle(event.id)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={event.id} className="ml-3 text-sm font-medium text-gray-700">
                  {event.name} (₹{event.price})
                </label>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
