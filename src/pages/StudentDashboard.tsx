import React from 'react';

export const StudentDashboard: React.FC = () => {
  return (
    <div className="p-6">

      {/* Dashboard Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Student Dashboard
      </h1>

      {/* Welcome Message */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold">
          Welcome Student 👋
        </h2>

        <p className="text-gray-600 mt-2">
          Manage your courses, registrations, profile and learning progress.
        </p>
      </div>

      {/* Profile + Registration Overview */}
      <div className="grid grid-cols-2 gap-6 mb-6">

        {/* Student Profile */}
      <div className="bg-white rounded-2xl shadow-md p-6 w-full">

  {/* Header */}
  <div className="flex items-start gap-5">

    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-lg text-white">
      YS
    </div>

    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-gray-900">
          Yuvraj Singh
        </h2>

        <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
          Final Year
        </span>
      </div>

      <p className="text-lg text-gray-500 mt-1">
        B.Tech CSE
      </p>
    </div>

  </div>

  {/* Details */}
  <div className="mt-6 grid grid-cols-2 gap-y-4">

    <div>
      <p className="text-gray-500 text-sm">Date of Birth</p>
      <p className="font-medium">30-12-2000</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Student ID</p>
      <p className="font-medium">STU001</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Email</p>
      <p className="font-medium">yuvraj@example.com</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Phone</p>
      <p className="font-medium">+91 9876543210</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">College</p>
      <p className="font-medium">Campus2Corporate University</p>
    </div>

    <div>
      <p className="text-gray-500 text-sm">Department</p>
      <p className="font-medium">
        Computer Science & Engineering
      </p>
    </div>

  </div>

</div>

        {/* Registration Overview */}
        <div className="bg-white shadow rounded-xl p-4">

          <h2 className="text-lg font-semibold mb-4">
            Registration Overview
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold">
                Registered Courses
              </h3>

              <p className="text-2xl font-bold">
                5
              </p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold">
                Completed
              </h3>

              <p className="text-2xl font-bold">
                2
              </p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold">
                Pending
              </h3>

              <p className="text-2xl font-bold">
                3
              </p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="font-semibold">
                Certificates
              </h3>

              <p className="text-2xl font-bold">
                1
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* modules */}
      <div className="mt-6">

  <h2 className="text-xl font-bold mb-4">
   Modules
  </h2>

  <div className="grid grid-cols-2 gap-4">

    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold text-lg">
        React Development
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Frontend Development Module
      </p>

      <p className="text-blue-600 mt-3">
        Progress: 70%
      </p>
    </div>

    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold text-lg">
        Python Programming
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Programming Fundamentals
      </p>

      <p className="text-blue-600 mt-3">
        Progress: 45%
      </p>
    </div>

    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold text-lg">
        Data Structures & Algorithms
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Technical Interview Preparation
      </p>

      <p className="text-blue-600 mt-3">
        Progress: 60%
      </p>
    </div>

    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold text-lg">
        Aptitude Training
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        Placement Preparation Module
      </p>

      <p className="text-blue-600 mt-3">
        Progress: 85%
      </p>
    </div>

  </div>

</div>
    
    </div>
  );
};