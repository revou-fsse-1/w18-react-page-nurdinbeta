import React, { useState } from "react";

type MembershipFormProps = {
  onClose: () => void ;
};

const MembershipForm: React.FC<MembershipFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

// Reset
    setEmailError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setSubmitted(false);

// Validation
    if (email.trim() === "") {
      setEmailError(true);
    }

    if (firstName.trim() === "") {
      setFirstNameError(true);
    }

    if (lastName.trim() === "") {
      setLastNameError(true);
    }


   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

   const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <button className="close-button" onClick={handleClose}>
          Closed
        </button>
        {!submitted && (
          <form onSubmit={handleSubmit}>
            <h4 className="mb-4 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">Register as a Membership!</h4>
            <div className="mb-4">
              <label className="block">Email:</label>
              <input type="text" value={email} onChange={handleEmailChange} className="w-full text-center border border-gray-600 rounded" />
              {emailError && (
                <p className="text-red-500 mt-0 mb-0">You must fill in your email!</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block">First Name:</label>
              <input type="text" value={firstName} onChange={handleFirstNameChange} className="w-full text-center border border-gray-600 rounded" />
              {firstNameError && (
                <p className="text-red-500 mt-0 mb-0">You must fill in your first name!</p>
              )}
            </div>
             <div className="mb-4">
              <label className="block">Last Name:</label>
              <input type="text" value={lastName} onChange={handleLastNameChange} className="w-full text-center border border-gray-600 rounded" />
              {lastNameError && (
                <p className="text-red-500 mt-0 mb-0">You must fill in your last name!</p>
              )}
            </div>
            <button type="submit" className="mt-4 border border-gray-600 rounded">Register Now!</button>
          </form>
        )}
        {submitted && (
          <div className="text-center">
            <h2 className="mb-4 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">Congrats!</h2>
            <p>You've registered as a membership</p>
          </div>
        )}
      </div>
    </div>
  );
}

return null};

export default MembershipForm;