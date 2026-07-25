import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl font-bold text-gray-800">
        Community Crisis Support
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Connecting volunteers with people who need food, shelter,
        transportation, and emergency assistance during crises.
      </p>

      <Link
        to="/request-help"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Request Help
      </Link>
    </section>
  );
}

export default Home;