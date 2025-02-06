import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

// Loading Component
const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="loader"></div>
  </div>
);

interface Event {
  name: string;
  price: number;
}

interface SubmissionData {
  name: string;
  email: string;
  mobileNumber: string;
  collegeId: string;
  department: string;
  year: string;
  selectedEvents: Event[];
  totalAmount: number;
}

const SubmissionDetails: React.FC = () => {
  const location = useLocation();
  const submissionData: SubmissionData | undefined = location.state?.submissionData;

  // New state for payment-related fields and loading state
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");
  const [receipt, setReceipt] = useState<File | null>(null);
  const [deskCode, setDeskCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);  // Loading state

  // Mapping for image selection based on amount
  const imageMap: Record<number, string> = {
    100: "/res/img/KnowHow'25 img.png",
    80: "/res/img/KnowHow'25 img2.png",
    120: "/res/img/KnowHow'25 img3.png",
    40: "/res/img/KnowHow'25 img4.png",
  };

  const imageUrl = imageMap[submissionData?.totalAmount || 0] || "";

  if (!submissionData) {
    return <div className="text-center py-10">No data available. Please go back and submit the form.</div>;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setReceipt(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading state to true when the form is being submitted

    const formData = new FormData();
    formData.append("name", submissionData.name);
    formData.append("email", submissionData.email);
    formData.append("mobile_no", submissionData.mobileNumber);
    formData.append("student_id", submissionData.collegeId);
    formData.append("department", submissionData.department);
    formData.append("year", submissionData.year);
    formData.append("events", JSON.stringify(submissionData.selectedEvents));
    formData.append("amount", submissionData.totalAmount.toString());
    formData.append("payment_method", paymentMethod);
    formData.append("transaction_id", transactionId);
    formData.append("desk_code", deskCode);
  
    if (receipt) {
      formData.append("receipt_upload", receipt);
    }
  
    try {
      const response = await axios.post(
        "https://web.ieeebvm.in/knowhow/user-register.php",
        formData
      );
  
      // Handle success or failure based on the response
      if (response.data.status === "success") {
        alert("Form submitted successfully");
      } else {
        alert("Error submitting form: " + response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    } finally {
      setIsLoading(false); // Set loading state to false after the API request finishes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
      <div className="max-w-lg w-full space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 text-center">Form Submission Details</h3>

        {/* Personal Information */}
        <div>
          <h4 className="font-semibold">Personal Information</h4>
          <p>Name: {submissionData.name}</p>
          <p>Email: {submissionData.email}</p>
          <p>Mobile Number: {submissionData.mobileNumber}</p>
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
                <li key={idx}>
                  {event.name}: ₹{event.price}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events selected.</p>
          )}
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

        {/* Payment Method, Transaction ID, and Receipt Upload */}
        <div>
          <h4 className="font-semibold">Payment Details</h4>
          <div>
            <label htmlFor="paymentMethod" className="block">Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="online">Online</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          {paymentMethod === "online" && (
            <>
              <div>
                <label htmlFor="transactionId" className="block">Transaction ID</label>
                <input
                  type="text"
                  id="transactionId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="receipt" className="block">Upload Payment Receipt</label>
                <input
                  type="file"
                  id="receipt"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          {paymentMethod === "cash" && (
            <div className="text-sm text-gray-500">
              
            </div>
          )}

          <div>
            <label htmlFor="deskCode" className="block">Desk Code</label>
            <input
              type="text"
              id="deskCode"
              value={deskCode}
              onChange={(e) => setDeskCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Total Amount */}
        <div>
          <h4 className="font-semibold">Total Amount</h4>
          <p>₹{submissionData.totalAmount.toFixed(2)}</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {/* Show Loading Spinner */}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default SubmissionDetails;
