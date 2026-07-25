import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">
          Community Crisis Support
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link to="/request-help" className="hover:text-gray-200">
            Request Help
          </Link>

          <Link to="/volunteer" className="hover:text-gray-200">
            Volunteer
          </Link>

          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;