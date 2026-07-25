import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        🚨 Emergency Assistance Platform
      </span>

      <h1 className="text-5xl font-bold text-gray-800 mt-6">
        Community Crisis Support
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Connecting volunteers with people who need food, shelter,
        transportation, and emergency assistance during crises.
      </p>

      <div className="flex gap-4 mt-8">
        <Link
          to="/request-help"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Request Help
        </Link>

        <Link
          to="/volunteer"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Become a Volunteer
        </Link>
      </div>
    </section>
  );
}

export default Hero;