import React from "react";
import { useLocation } from "react-router-dom";

interface Event {
  name: string;
  price: number;
}

interface SubmissionData {
  name: string;
  email: string;
  collegeId: string;
  department: string;
  year: string;
  selectedEvents: Event[];
  deskNumber: string;
  totalAmount: number;
}

const SubmissionDetails: React.FC = () => {
  const location = useLocation();
  const submissionData: SubmissionData | undefined = location.state?.submissionData;

  // Mapping for image selection
  const imageMap: Record<number, string> = {
    100: "/res/img/KnowHow'25 img.png",
    80: "/res/img/KnowHow'25 img2.png",
    120: "/res/img/KnowHow'25 img3.png",
    40: "/res/img/KnowHow'25 img4.png",
  };

  // Determine image based on totalAmount
  const imageUrl = imageMap[submissionData?.totalAmount || 0] || "";

  if (!submissionData) {
    return <div className="text-center py-10">No data available. Please go back and submit the form.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
      <div className="max-w-lg w-full space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 text-center">Form Submission Details</h3>

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
            <ul className="list-disc pl-4">
              {submissionData.selectedEvents.map((event, idx) => (
                <li key={idx}>{event.name}: ₹{event.price}</li>
              ))}
            </ul>
          ) : (
            <p>No events selected.</p>
          )}
          <p>Desk Number: {submissionData.deskNumber}</p>
        </div>

        {/* Image Section */}
        {imageUrl && (
          <div className="flex justify-center">
            <img
              src={imageUrl}
              alt="Event Certificate"
              className="w-40 h-40 object-cover rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        )}

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
