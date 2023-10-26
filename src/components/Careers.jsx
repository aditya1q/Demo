// src/components/Careers.js

import Navbar from "./Navbar";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-8">Opening for freshers only</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded shadow-2xl">
              <h2 className="text-xl font-semibold">Front-end Developer</h2>
              <p className="text-gray-600 mt-2">
                We are looking for a talented front-end developer to join our team.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow-2xl">
              <h2 className="text-xl font-semibold">Back-end Developer</h2>
              <p className="text-gray-600 mt-2">
                Join us as a back-end developer and working with databases like MongoDB and MySql.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow-2xl">
              <h2 className="text-xl font-semibold">Full Stack Developer</h2>
              <p className="text-gray-600 mt-2">
                Join us as a FullStack developer and work on some amazing and exciting projects.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow-2xl">
              <h2 className="text-xl font-semibold">Anroid Developer</h2>
              <p className="text-gray-600 mt-2">
                Join us as a Android developer and Create projects using Flutter.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>

            <div className="bg-white p-4 rounded shadow-2xl">
              <h2 className="text-xl font-semibold">Java Developer</h2>
              <p className="text-gray-600 mt-2">
                Join us as a FullStack Java developer and work on some amazing and exciting projects.
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl text-center font-semibold mb-4">Only freshers can Apply for this Position</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full p-2"
                  placeholder="Enter the Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full p-2"
                  placeholder="address@gmail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold" htmlFor="resume">
                  Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="border rounded w-full p-2"
                  accept=".pdf"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold" htmlFor="position">
                  Position
                </label>
                <select
                  id="position"
                  name="position"
                  className="border rounded w-full p-2"
                  required
                >
                  <option value="">Select a Position</option>
                  <option value="Front-end Developer">Front-end Developer</option>
                  <option value="Back-end Developer">Back-end Developer</option>
                  <option value="Back-end Developer">FullStack Developer</option>
                </select>
              </div>
              <div className="mb-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
