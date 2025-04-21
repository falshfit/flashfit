import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/images/logo_1.png"
            alt="FlashFit Logo"
            className="h-20 w-auto object-contain"
          />
          <span className="text-2xl font-bold text-[#f3423a]">
            Flash<span className="text-blue-500">Fit</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#f3423a]">
            Home
          </Link>
          <a href="#features" className="hover:text-[#f3423a]">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-[#f3423a]">
            How It Works
          </a>
          <Link to="/survey" className="hover:text-[#f3423a]">
            Survey
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/register"
            className="bg-[#f3423a] text-white px-4 py-2 rounded-full hover:bg-[#e03d36] transition"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white p-4 space-y-4 shadow-md">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/survey" onClick={() => setMenuOpen(false)}>
            Survey
          </Link>
          <Link
            to="/register"
            className="w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
