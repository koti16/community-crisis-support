function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          Community Crisis Support
        </h2>

        <p className="mt-3 text-gray-400">
          Connecting volunteers with people during emergencies.
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <a href="#" className="hover:text-blue-400">
            About
          </a>

          <a href="#" className="hover:text-blue-400">
            Contact
          </a>

          <a href="#" className="hover:text-blue-400">
            Privacy
          </a>

          <a href="#" className="hover:text-blue-400">
            GitHub
          </a>
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          © 2026 Community Crisis Support. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;