export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        CampusGPT
      </h1>

      <p className="mt-4 text-xl text-gray-700">
        AI-Powered Admission Assistant
      </p>

      <p className="mt-2 text-gray-500 text-center">
        For Schools, Colleges & Coaching Institutes
      </p>

      <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Book Demo
      </button>
    </section>
  );
}