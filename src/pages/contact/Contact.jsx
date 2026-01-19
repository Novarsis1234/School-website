import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitContactForm,
  clearContactStatus,
} from "../../slice/contactSlice";
import contactus from "../../assets/images/contact.jpg";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      dispatch(submitContactForm(formData));
    }
    setErrors(validationErrors);
  };

  useEffect(() => {
    if (success || error) {
      if (success) {
        setFormData({ name: "", mobile: "", subject: "", message: "" });
        setErrors({});
      }
      setTimeout(() => dispatch(clearContactStatus()), 3000);
    }
  }, [success, error, dispatch]);

  return (
    <div className="w-full px-4 py-12 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#fc3c04] text-center mb-10">
        Contact <span className="text-[#345bf3]">Us</span>
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={contactus}
            alt="Contact"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 sm:p-10 shadow-md">
          <p className="text-gray-700 mb-4 text-base">
            We’d love to hear from you! Whether you have questions about
            admissions, academic programs, or upcoming school events, fill out
            the form and our team will get back to you soon.
          </p>

          {success && (
            <p className="text-red-600 mb-2">Message sent successfully!</p>
          )}
          {error && <p className="text-red-600 mb-2">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#345bf3] hover:border-[#345bf3] transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#345bf3] hover:border-[#345bf3] transition"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#345bf3] hover:border-[#345bf3] transition"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#345bf3] hover:border-[#345bf3] transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EF4444] text-white py-3 rounded hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
