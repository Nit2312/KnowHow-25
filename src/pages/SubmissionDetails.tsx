import React from 'react';
import { useLocation } from 'react-router-dom';

// Define the type for event details
interface Event {
  name: string;
  price: number;
}

const SubmissionDetails = () => {
  const location = useLocation();
  
  // Ensure submissionData is typed correctly
  const submissionData = location.state?.submissionData;

  if (!submissionData) {
    return <div>No data available. Please go back and submit the form.</div>;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Form Submission Details</h3>

        {/* Personal Information */}
        <div>
          <h4 className="font-semibold">Personal Information</h4>
          <p>Name: {submissionData.name}</p>
          <p>Email: {submissionData.email}</p>
        </div>

        {/* College Information */}
        <div>
          <h4 className="font-semibold">College Information</h4>
          <p>College ID: {submissionData.collegeId}</p>
          <p>Department: {submissionData.department}</p>
          <p>Year: {submissionData.year}</p>
        </div>

        {/* Selected Events */}
        <div>
          <h4 className="font-semibold">Selected Events</h4>
          {submissionData.selectedEvents.length > 0 ? (
            submissionData.selectedEvents.map((event: Event, idx: number) => (
              <p key={idx}>{event.name}: ₹{event.price}</p>
            ))
          ) : (
            <p>No events selected.</p>
          )}
        </div>

        {/* Total Amount */}
        <div>
          <h4 className="font-semibold">Total Amount</h4>
          <p>₹{submissionData.totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
