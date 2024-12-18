import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formInfo, setFormInfo] = useState(null);
  const nameChange = (e) => {
    e.preventDefault;
    setName(e.target.value);
  };

  const emailChange = (e) => {
    e.preventDefault;
    setEmail(e.target.value);
  };

  const messageChange = (e) => {
    e.preventDefault;
    setMessage(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrorName("all fields is required: fill in your name please");
    } else {
      setErrorName("");
    }
    if (email === "") {
      setErrorEmail("all fields is required: fill in your email please");
    } else {
      setErrorEmail("");
    }
    if (message === "") {
      setErrorMessage("all fields is required: write a message for us please");
    } else {
      setErrorMessage("");
    }

    setFormInfo({name, email, message});
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="flex flex-row items-start justify-start w-full bg-white">
      <div className="w-[60%] flex flex-col items-start justify-start p-5">
        <form
          type={submit}
          className="flex flex-col items-start w-full justify-normal"
        >
          <div className="flex items-center justify-start w-full gap-3 mt-5">
            <label
              htmlFor=""
              className="text-blue-500 text-[20px] font-bold w-[75px] text-end"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={nameChange}
              className="bg-transparent border-2 border-blue-500 rounded-[6px] w-[300px] outline-none outline-0 py-2"
            />
          </div>
          {errorName && <p className="text-red-600 text-[16px] ml-[90px]"> {errorName} </p>}

          <div className="flex items-center justify-start w-full gap-3 mt-5">
            <label
              htmlFor=""
              className="text-blue-500 text-[20px] font-bold w-[75px] text-end"
            >
              Email
            </label>
            <input
              type="email"
              onChange={emailChange}
              value={email}
              placeholder="Enter your email"
              className="bg-transparent border-2 border-blue-500 rounded-[6px] w-[300px] outline-none outline-0 py-2"
            />
          </div>
          {errorEmail && <p className="text-red-600 text-[16px] ml-[90px]"> {errorEmail} </p>}

          <div className="flex items-center justify-start w-full gap-3 mt-5">
            <label
              htmlFor=""
              className="text-blue-500 text-[20px] font-bold w-[75px] text-end"
            >
              Message
            </label>
            <textarea
              type="text"
              rows={5}
              cols={5}
              placeholder="Enter your name"
              value={message}
              onChange={messageChange}
              className="bg-transparent border-2 border-blue-500 rounded-[6px] w-[300px] outline-none outline-0 py-2"
            />
          </div>
          {errorMessage && <p className="text-red-600 text-[16px] ml-[90px]"> {errorMessage} </p>}

          <button
            onClick={submit}
            className="py-3 mt-3 ml-[90px] rounded-[3px] font-semibold text-white bg-blue-500 px-7"
          >
            Submit
          </button>
        </form>
          {formInfo && (
            <div>
              <h1 className="font-bold text-[20px] text-black"> Form Details </h1>
              <div>
                <h1>Name: {formInfo.name}</h1>
                <h1>Email: {formInfo.email}</h1>
                <h1>Message: {formInfo.message}</h1>
              </div>
            </div>
          )}
      </div>
      {/* question */}
      <div className="w-[40%] flex flex-col items-start justify-center border-l-2 border-blue-500 p-5">
        <h1 className="text-[30px] text-blue-500 font-bold"> Question </h1>
        <div className="max-w-2xl mx-auto my-3 bg-white">
          {/* Heading */}
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            Contact Form
          </h1>

          {/* Description */}
          <p className="mb-6 leading-relaxed text-gray-700">
            You need to create a simple React application called{" "}
            <span className="font-semibold">"Contact Form"</span> that collects
            user information and displays it below the form upon submission.
            This task will help you practice handling form inputs, validation,
            and conditional rendering in React.
          </p>

          {/* Detailed Requirements */}
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Detailed Requirements
          </h2>

          {/* Form Structure */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">1. Form Structure:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>
                The form should have the following fields:
                <ul className="ml-6 list-disc">
                  <li>
                    <span className="font-semibold">Name:</span> Text input for
                    the user's name.
                  </li>
                  <li>
                    <span className="font-semibold">Email:</span> Text input for
                    the user's email address.
                  </li>
                  <li>
                    <span className="font-semibold">Message:</span> Textarea for
                    the user's message.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Form Submission */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">2. Form Submission:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>
                There should be a{" "}
                <span className="font-semibold">"Submit"</span> button to submit
                the form.
              </li>
            </ul>
          </div>

          {/* Form Validation */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700">3. Form Validation:</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>
                Validate that none of the fields are empty upon submission.
              </li>
              <li>
                If any field is empty, display an error message:{" "}
                <span className="italic">"All fields are required."</span> The
                form should not be submitted.
              </li>
            </ul>
          </div>

          {/* Displaying Submitted Data */}
          <div>
            <h3 className="font-semibold text-gray-700">
              4. Displaying Submitted Data:
            </h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>
                If the form is successfully submitted, display the entered
                information below the form.
              </li>
              <li>Clear the input fields after a successful submission.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
