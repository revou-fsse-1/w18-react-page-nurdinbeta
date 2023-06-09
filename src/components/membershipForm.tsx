import { useState } from "react";

export const MembershipForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const field = event.target.name;

    if (field === "email") setEmail(event.target.value);
    if (field === "firstname") setFirstName(event.target.value);
    if (field === "lastname") setLastName(event.target.value);
  };

  const handleMembershipForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Email = email.trim();
    const FirstName = firstName.trim();
    const LastName = lastName.trim();

    if (!Email || Email === undefined) {
      const field: string | undefined = "Please fill your email";
      setEmailError(field);
    } else if (!isValidEmail(Email)) {
      setEmailError("Email is invalid");
    }

    if (!FirstName || FirstName === undefined) {
      const field: string | undefined = "Please fill your First Name";
      setFirstNameError(field);
    };

    if (!LastName || LastName === undefined) {
      const field: string | undefined = "Please fill your Last Name";
      setLastNameError(field);
    };

    if (Email && FirstName && LastName) {
      onSuccess();
    }

    if (Email || FirstName || LastName) {
      setIsSuccess("Congrats! You've become a member.");
    }
  };

  const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const handleClose = () => {
    onSuccess();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
      <h2 className="py-3 text-2xl text-center">Register to be a Member</h2>
      <p>Get a lot of benefits by register as a member!</p>
      <form className="py-3 flex flex-col justify-center" onSubmit={handleMembershipForm}>
        <label className="font-bold" htmlFor="email-user">
          User Email:
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl "
          name="email"
          value={email}
          id="email-user"
          type="text"
        />
        {!email ? (
          <span className="my-1 text-red-600">{emailError}</span>
        ) : (
          <span></span>
        )}
        <label className="font-bold" htmlFor="first-name">
          First Name:
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl"
          name="firstname"
          value={firstName}
          id="first-name"
          type="text"
        />
        {!firstName ? (
          <span className="my-1 text-red-600">{firstNameError}</span>
        ) : (
          <span></span>
        )}
        <label className="font-bold" htmlFor="last-name">
          Last Name:
        </label>
        <input
          onChange={handleInputChange}
          className="border border-black rounded-lg px-2 py2 text-xl"
          name="lastname"
          value={lastName}
          id="last-name"
          type="text"
        />
        {!lastName ? (
          <span className="my-1 text-red-600">{lastNameError}</span>
        ) : (
          <span></span>
        )}
        <input
          className="border my-3 px-1 py-1 font-bold text-black border-black rounded-lg cursor-pointer bg-white hover:[#F5EFE7]"
          type="submit"
          value="Register"
        />
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        {!isSuccess ? (
          <span></span>
        ) : (
          <span className="my-1 text-green-600">{isSuccess}</span>
        )}
      </form>
    </div>
    </div>
  );
};

export default MembershipForm;