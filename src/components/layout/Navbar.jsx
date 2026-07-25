import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">

        <Link to="/" className="text-2xl font-bold">
          Community Crisis Support
        </Link>

        <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-blue-200 transition">
            Home
          </Link>

          <Link
            to="/request-help"
            className="hover:text-blue-200 transition"
          >
            Request Help
          </Link>

          <Link
            to="/volunteer"
            className="hover:text-blue-200 transition"
          >
            Volunteer
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-200 transition"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;