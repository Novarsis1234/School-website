import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownItems = {
    About: [
      { label: "About Us", path: "/about" },
      { label: "Faculty & Management Team", path: "/management" },
      { label: "Message from Board", path: "/chairmanMessage" },
    ],
    Admission: [
      { label: "Admission Process", path: "/admission" },
      { label: "Online Admission", path: "/online" },
      { label: "Fees Structure", path: "/fees" },
      { label: "Fees Management", path: "/feemanagement" },
    ],
    "Media & News": [
      { label: "Achievements & Awards", path: "/awards" },
      { label: "Events & Activity", path: "/events" },
      { label: "Gallery", path: "/gallery" },
      { label: "Blogs & News", path: "/news" },
    ],
    Academics: [
      { label: "Syllabus", path: "/syllabus" },
      { label: "Academic Section", path: "/AcademicsSection" },
      { label: "Academic Calendar", path: "/Academicscalendar" },
      { label: "School Assembly", path: "/assembly" },
    ],
    Facilities: [
      { label: "Infrastructure", path: "/infrastucture" },
      { label: "Transport Policy", path: "/transport" },
      { label: "Student Uniform", path: "/uniform" },
      { label: "School Library", path: "/library" },
      { label: "Hostel Facilities", path: "/hostel" },
    ],
    Notification: [
      { label: "Holidays & Vacations", path: "/holiday" },
      { label: "Examination Updates", path: "/examinationUpdates" },
      { label: "School Notification", path: "/notification" },
    ],
  };

  /* ===== Scroll Effect ===== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Close dropdown on outside click ===== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0f172a] shadow-lg"
            : "bg-black/40 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={Logo} alt="School Logo" className="h-14 object-contain" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul
          ref={dropdownRef}
          className="hidden md:flex items-center space-x-8 text-white font-medium"
        >
          <li>
            <Link to="/" className="hover:text-[#EF4444] transition">Home</Link>
          </li>

          {Object.keys(dropdownItems).map((menu) => (
            <li key={menu} className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === menu ? null : menu)
                }
                className="flex items-center gap-1 hover:text-[#EF4444]"
              >
                {menu}
                <svg
                  className={`w-3 h-3 transition ${
                    openDropdown === menu ? "rotate-180" : ""
                  }`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown === menu && (
                <ul className="absolute top-full left-0 mt-3 bg-[#0f172a] rounded-xl shadow-xl px-4 py-3 min-w-[220px]">
                  {dropdownItems[menu].map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className="block py-1 text-sm hover:text-[#EF4444]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-[#EF4444] px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Enquire Now
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pb-6">
          <ul className="flex flex-col space-y-4 text-white text-base">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

            {Object.keys(dropdownItems).map((title) => (
              <details key={title} className="group">
                <summary className="cursor-pointer">{title}</summary>
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  {dropdownItems[title].map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-[#EF4444]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#EF4444] py-3 rounded-full text-center font-semibold"
            >
              Enquire Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
