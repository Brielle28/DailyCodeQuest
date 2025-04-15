import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formInfo, setFormInfo] = useState(null);

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const messageChange = (e) => setMessage(e.target.value);

  const submit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (name === "") {
      setErrorName("All fields are required: fill in your name please");
      hasError = true;
    } else setErrorName("");

    if (email === "") {
      setErrorEmail("All fields are required: fill in your email please");
      hasError = true;
    } else setErrorEmail("");

    if (message === "") {
      setErrorMessage("All fields are required: write a message for us please");
      hasError = true;
    } else setErrorMessage("");

    if (hasError) return;

    setFormInfo({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col-reverse items-start justify-start w-full min-h-screen bg-white lg:flex-row">
      {/* Form Section */}
      <div className="w-full lg:w-[60%] flex flex-col items-start justify-start p-5">
        <form
          onSubmit={submit}
          className="flex flex-col items-start w-full justify-normal"
        >
          {/* Name */}
          <div className="flex flex-col items-start w-full gap-3 mt-5 sm:flex-row sm:items-center">
            <label className="text-blue-500 text-[18px] font-bold w-[75px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={nameChange}
              className="bg-transparent border-2 border-blue-500 rounded-md w-full sm:w-[300px] py-2 px-3 outline-none"
            />
          </div>
          {errorName && (
            <p className="text-red-600 text-[14px] mt-1 sm:ml-[90px]">
              {errorName}
            </p>
          )}

          {/* Email */}
          <div className="flex flex-col items-start w-full gap-3 mt-5 sm:flex-row sm:items-center">
            <label className="text-blue-500 text-[18px] font-bold w-[75px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={emailChange}
              className="bg-transparent border-2 border-blue-500 rounded-md w-full sm:w-[300px] py-2 px-3 outline-none"
            />
          </div>
          {errorEmail && (
            <p className="text-red-600 text-[14px] mt-1 sm:ml-[90px]">
              {errorEmail}
            </p>
          )}

          {/* Message */}
          <div className="flex flex-col items-start w-full gap-3 mt-5 sm:flex-row sm:items-start">
            <label className="text-blue-500 text-[18px] font-bold w-[75px]">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message"
              value={message}
              onChange={messageChange}
              className="bg-transparent border-2 border-blue-500 rounded-md w-full sm:w-[300px] py-2 px-3 outline-none"
            />
          </div>
          {errorMessage && (
            <p className="text-red-600 text-[14px] mt-1 sm:ml-[90px]">
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 rounded-md font-semibold text-white bg-blue-500 px-6 py-2 self-center sm:self-start sm:ml-[90px]"
          >
            Submit
          </button>
        </form>

        {/* Form Info */}
        {formInfo && (
          <div className="w-full mt-6 text-black">
            <h1 className="text-lg font-bold">Form Details</h1>
            <p>Name: {formInfo.name}</p>
            <p>Email: {formInfo.email}</p>
            <p>Message: {formInfo.message}</p>
          </div>
        )}
      </div>

      {/* Question Section */}
      <div className="w-full lg:w-[40%] flex flex-col items-start justify-start border-b-2 lg:border-b-0 lg:border-l-2 border-blue-500 p-5">
        <h1 className="text-[26px] sm:text-[30px] text-blue-500 font-bold mb-3">
          Question
        </h1>
        <div className="w-full max-w-2xl">
          <h1 className="mb-4 text-xl font-bold text-gray-800">Contact Form</h1>
          <p className="mb-6 leading-relaxed text-gray-700">
            You need to create a simple React application called{" "}
            <span className="font-semibold">"Contact Form"</span> that collects
            user information and displays it below the form upon submission.
          </p>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            Detailed Requirements
          </h2>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">1. Form Structure:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>
                The form should have the following fields:
                <ul className="ml-6 list-disc">
                  <li><span className="font-semibold">Name</span>: Text input</li>
                  <li><span className="font-semibold">Email</span>: Text input</li>
                  <li><span className="font-semibold">Message</span>: Textarea</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">2. Form Submission:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>There should be a <span className="font-semibold">Submit</span> button.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">3. Form Validation:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Validate all fields are filled before submission.</li>
              <li>Show error: <em>"All fields are required."</em></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">4. Display Submitted Data:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Show data below form after successful submission.</li>
              <li>Clear fields after submission.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
