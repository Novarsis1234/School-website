import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com/yourpage" },
    { icon: FaFacebookF, url: "https://facebook.com/yourpage" },
    { icon: FaInstagram, url: "https://instagram.com/yourpage" },
    { icon: FaSkype, url: "skype:yourid?chat" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/yourprofile" },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Quick Links
            <span className="block w-10 h-1 bg-[#EF4444] mt-2 rounded-full"></span>
          </h2>

          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", url: "/" },
              { label: "About School", url: "/about" },
              { label: "Infrastructure", url: "/infrastucture" },
              { label: "Events", url: "/events" },
              { label: "Gallery", url: "/gallery" },
              { label: "Faculty", url: "/management" },
              { label: "Terms & Conditions", url: "/terms" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.url}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-[#EF4444]">›</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Our Services
            <span className="block w-10 h-1 bg-[#EF4444] mt-2 rounded-full"></span>
          </h2>

          <ul className="space-y-3 text-sm">
            {[
              { label: "Transport Policy", url: "/transport" },
              { label: "Awards", url: "/awards" },
              { label: "Blogs & News", url: "/news" },
              { label: "Admission Procedure", url: "/admission" },
              { label: "Student Uniform", url: "/uniform" },
              { label: "Holidays", url: "/holiday" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.url}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <span className="text-[#EF4444]">›</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & CTA */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Contact Info
            <span className="block w-10 h-1 bg-[#EF4444] mt-2 rounded-full"></span>
          </h2>

          <p className="text-sm leading-relaxed mb-4">
            International School Dewas Road,
            <br />
            Vijay Nagar, Indore
          </p>

          <p className="text-sm mb-2">
            <span className="text-[#EF4444] font-semibold">Email:</span>{" "}
            admissions@international.org
          </p>

          <p className="text-sm mb-6">
            <span className="text-[#EF4444] font-semibold">Phone:</span>{" "}
            9786546754
          </p>

          <div className="flex items-center gap-3">
            <Link
              to="/online"
              className="bg-[#EF4444] hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition"
            >
              Admission Now
            </Link>

            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
            >
              <IoMdContact size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              School Jabalpur
            </span>
            . All Rights Reserved <br />
            Designed by{" "}
            <a
              href="https://novarsistech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EF4444] hover:underline"
            >
              Novarsis Tech
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full bg-white/10 hover:bg-[#EF4444]
                           text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
