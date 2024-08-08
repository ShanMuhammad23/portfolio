import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [result, setResult] = useState("");
  const recaptchaRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    
    const formData = new FormData(event.target);
    
    formData.append("access_key", "4ca1ae15-894e-43ab-87ee-03cf84d7a40c"); // Replace with your access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    
   

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit} id="ContactMe" className="flex flex-col sm:mt-12 mt-10 p-6 sm:w-[70%] sm:m-auto bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="blurtext text-6xl text-white m-auto"
      >
        Contact <span className="text-violet-500">M</span>e
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col gap-2">
          <input type="hidden" name="subject" value="No Subject" />
          <label htmlFor="name"  className="label">
            Name
          </label>
          <input type="text" id="name" className="input" required />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email"  className="label">
            Email
          </label>
          <input type="email" id="email" className="input" required />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="outline-0 text-white p-3 border-2 border-violet-900 rounded-xl bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
        </div>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-white cursor-pointer active:bg-violet-700 w-max bg-transparent border-2 border-gray-500 text-xl rounded-lg py-3 px-14 mt-5  "
          type="submit"
        >
          Send Message
        </motion.button>
      </motion.div>
      <span className="text-xl text-green-400 p-2 ">{result}</span>
    </form>
  );
};

export default ContactMe;
