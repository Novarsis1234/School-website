import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  submitAdmissionForm,
  clearAdmissionStatus,
} from "../../slice/admissionSlice";

const AdmissionForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.admission);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    standard: "",
    mobile: "",
    email: "",
    address: "",
    fatherName: "",
    motherName: "",
    emergencyContact: "",
    previousSchool: "",
  });

  const [files, setFiles] = useState({
    photo: null,
    birthCertificate: null,
    reportCard: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate all required fields
  const validate = () => {
    const newErrors = {};
    const {
      name,
      dob,
      gender,
      standard,
      mobile,
      email,
      address,
      fatherName,
      motherName,
    } = formData;

    if (!name.trim()) newErrors.name = "Student name is required.";
    if (!dob) newErrors.dob = "Date of birth is required.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!standard) newErrors.standard = "Class / Standard is required.";
    if (!/^\d{10}$/.test(mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!email) newErrors.email = "Email is required.";
    if (!address) newErrors.address = "Address is required.";
    if (!fatherName) newErrors.fatherName = "Father's name is required.";
    if (!motherName) newErrors.motherName = "Mother's name is required.";

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const vErrors = validate();
    if (Object.keys(vErrors).length === 0) {
      const submission = new FormData();
      Object.entries(formData).forEach(([key, val]) =>
        submission.append(key, val)
      );
      Object.entries(files).forEach(
        ([key, val]) => val && submission.append(key, val)
      );

      dispatch(submitAdmissionForm(submission));
    }
    setErrors(vErrors);
  };

  // Watch for success/error from redux
  useEffect(() => {
    if (success || error) {
      if (success) {
        toast.success("Application submitted successfully!");
        setFormData({
          name: "",
          dob: "",
          gender: "",
          standard: "",
          mobile: "",
          email: "",
          address: "",
          fatherName: "",
          motherName: "",
          emergencyContact: "",
          previousSchool: "",
        });
        setFiles({
          photo: null,
          birthCertificate: null,
          reportCard: null,
        });
        setErrors({});
      }
      if (error) toast.error(error);
      setTimeout(() => dispatch(clearAdmissionStatus()), 3000);
    }
  }, [success, error, dispatch]);

  return (
    <section className="min-h-screen flex justify-center items-center bg-white px-4 py-12">
      <div className="w-full max-w-4xl bg-gray-50 p-10 rounded-xl shadow-xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#EF4444] to-red-600 text-transparent bg-clip-text mb-10 tracking-wide">
          Online Admission Form
          <div className="mx-auto mt-2 w-24 h-1 bg-[#EF4444] rounded-full"></div>
        </h2>

        {success && (
          <p className="text-red-600 mb-4 text-center">
            Form submitted successfully!
          </p>
        )}
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Full Name"
              className="border p-4 rounded w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Date of Birth"
              className="border p-4 rounded w-full"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-4 rounded w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}

            <input
              type="text"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              placeholder="Class / Standard"
              className="border p-4 rounded w-full"
            />
            {errors.standard && (
              <p className="text-red-500 text-sm">{errors.standard}</p>
            )}
          </div>

          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            placeholder="Previous School (if any)"
            className="border p-4 rounded w-full"
          />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border p-4 rounded w-full"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border p-4 rounded w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
            className="border p-4 rounded w-full"
            rows="3"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}

          {/* Parents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's Name"
              className="border p-4 rounded w-full"
            />
            {errors.fatherName && (
              <p className="text-red-500 text-sm">{errors.fatherName}</p>
            )}

            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Mother's Name"
              className="border p-4 rounded w-full"
            />
            {errors.motherName && (
              <p className="text-red-500 text-sm">{errors.motherName}</p>
            )}
          </div>

          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Emergency Contact Number"
            className="border p-4 rounded w-full"
          />

          {/* File Uploads */}
          <div className="space-y-4">
            {/* <label className="block text-sm font-medium">Upload Student Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
              /> */}

            {/* <label className="block text-sm font-medium">Upload Birth Certificate</label>
              <input
                type="file"
                name="birthCertificate"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
              />
          
              <label className="block text-sm font-medium">Upload Last Report Card</label>
              <input
                type="file"
                name="reportCard"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                className="border p-2 rounded w-full"
              /> */}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#EF4444] hover:bg-red-600 text-white text-lg font-semibold py-3 px-6 rounded-xl transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default AdmissionForm;
