import React from 'react';
import { Brain, UserCheck, BookOpen, Users, Cpu, Calendar, Award } from 'lucide-react';
import react, {useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 72 },
  { month: "Mar", score: 78 },
  { month: "Apr", score: 85 },
  { month: "May", score: 90 },
];

export const StudentDashboard: React.FC = () => {
 const [showDropdown, setShowDropdown] = useState(false);
 
  return (
    <div className="p-6">

      {/* Dashboard Title */}
    


<div className="relative mb-6">
  <h1 className="text-2xl font-bold text-center">
    Student Dashboard
  </h1>

  {/* Profile Section */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    
    <button
      onClick={() => setShowDropdown(!showDropdown)}
      className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-lg text-white"
    >
      YS
    </button>

    {showDropdown && (
      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border z-[9999]">  
        
        <div className="p-3 border-b">
          <h3 className="font-semibold">Yuvraj Singh</h3>
          <p className="text-sm text-gray-500">
            B.Tech CSE - Final Year
          </p>
        </div>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          My Profile
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          My Courses
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Certificates
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100">
          Settings
        </button>

        

      </div>
    )}
  </div>
</div>

      {/* Welcome Message */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold">
          Welcome Student 👋
        </h2>

        <p className="text-gray-600 mt-2">
          Manage your courses, registrations, profile and learning progress.
        </p>
      </div>
    {/* // registration overview + performance graph */}

       <div className="bg-white shadow rounded-xl p-4 mt-6 mb-8">

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


{/* /// graph */}

    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4 ">
        Performance Overview
      </h2>

      <ResponsiveContainer width="100%" height={250}> 
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
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
{/* roadmap */}
  <div className="relative mt-24" >
    <h1 className="text-2xl font-bold mb-6 text-center">
        Roadmap to Placement
      </h1>
        
             <div className="hidden lg:block absolute top-10 left-[5%] right-[5%] h-0.5 bg-slate-200"></div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
               
               {[
                 { step: '01', title: 'Profile Building', desc: 'Secure, verified portfolio credentials.', icon: UserCheck },
                 { step: '02', title: 'Skill Assessment', desc: 'AI proctored baseline tests.', icon: Brain },
                 { step: '03', title: 'Learning Roadmap', desc: 'AI-curated targeted content gaps.', icon: BookOpen },
                 { step: '04', title: 'Mentorship', desc: 'Mock trials & expert review logs.', icon: Users },
                 { step: '05', title: 'AI Matching', desc: 'Vector alignment to active roles.', icon: Cpu },
                 { step: '06', title: 'Interview', desc: 'Sync calendars and scheduling.', icon: Calendar },
                 { step: '07', title: 'Placement', desc: 'Final contract signing and onboard.', icon: Award }
               ].map((item, idx) => (
                 <div key={idx} className="relative flex flex-col items-centered text-center bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-5 hover:-translate-y-1 transition-all shadow-sm hover:shadow-md">
                   <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm relative z-10">
                     <item.icon className="w-5 h-5" />
                     <span className="absolute -top-1 -right-1 text-[9px] bg-blue-50 border border-blue-100 text-blue-700 font-mono w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold shadow-sm">
                       {item.step}
                     </span>
                   </div>
                   <h3 className="text-xs font-bold text-slate-800 mt-4">{item.title}</h3>
                   <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                     {item.desc}
                   </p>
                 </div>
               ))}
 
             </div>
           </div>
           
     <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
  <h2 className="text-2xl font-semibold mb-6">
    Upcoming Activities
  </h2>

  <div className="space-y-4">

    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h3 className="font-semibold">
          React Assignment Submission
        </h3>
        <p className="text-gray-500 text-sm">
          Module 3 Project Submission
        </p>
      </div>

      <span className="text-red-500 font-medium">
        Due: 25 Jun
      </span>
    </div>

    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h3 className="font-semibold">
          Aptitude Assessment
        </h3>
        <p className="text-gray-500 text-sm">
          Placement Preparation Test
        </p>
      </div>

      <span className="text-orange-500 font-medium">
        28 Jun
      </span>
    </div>

    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h3 className="font-semibold">
          Mentor Session
        </h3>
        <p className="text-gray-500 text-sm">
          One-on-One Career Guidance
        </p>
      </div>

      <span className="text-blue-500 font-medium">
        30 Jun
      </span>
    </div>

    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-semibold">
          Mock Interview
        </h3>
        <p className="text-gray-500 text-sm">
          Technical Interview Practice
        </p>
      </div>

      <span className="text-green-500 font-medium">
        05 Jul
      </span>
    </div>

  </div>
</div>

           
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-8">
  <h2 className="text-2xl font-semibold mb-6">
    Skill Progress
  </h2>

  <div className="space-y-5">

    {/* React */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">React Development</span>
        <span className="font-semibold">70%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: "70%" }}
        />
      </div>
    </div>

    {/* Python */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Python Programming</span>
        <span className="font-semibold">45%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-600 h-3 rounded-full"
          style={{ width: "45%" }}
        />
      </div>
    </div>

    {/* DSA */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">
          Data Structures & Algorithms
        </span>
        <span className="font-semibold">60%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-purple-600 h-3 rounded-full"
          style={{ width: "60%" }}
        />
      </div>
    </div>

    {/* Aptitude */}
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Aptitude Training</span>
        <span className="font-semibold">85%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-orange-500 h-3 rounded-full"
          style={{ width: "85%" }}
        />
      </div>
    </div>

  </div>
</div>
  

    
    </div>
  );
};