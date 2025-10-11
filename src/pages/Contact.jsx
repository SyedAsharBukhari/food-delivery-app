import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-[#E01B6F] mb-4">
          Contact <span className="text-gray-800">Us</span>
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Have a question, feedback, or just want to say hello?  
          We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
      

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h2 className="text-3xl font-semibold text-[#E01B6F] mb-10">
               Send Us a Message
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-[#E01B6F]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-[#E01B6F]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-[#E01B6F]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#E01B6F] text-white py-3 rounded-lg hover:bg-[#c2185b] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
