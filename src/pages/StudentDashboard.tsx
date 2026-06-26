import React, { useState } from 'react';
import { 
  Brain, 
  UserCheck, 
  BookOpen, 
  Users, 
  Cpu, 
  Calendar, 
  Award,
  ChevronDown,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  Clock,
  BookOpenCheck
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { month: "Jan", score: 65 },
  { month: "Feb", score: 72 },
  { month: "Mar", score: 78 },
  { month: "Apr", score: 85 },
  { month: "May", score: 90 },
];

const modules = [
  { 
    title: 'React Development', 
    category: 'Frontend Development', 
    progress: 70, 
    color: 'bg-indigo-600',
    track: 'indigo'
  },
  { 
    title: 'Python Programming', 
    category: 'Programming Fundamentals', 
    progress: 45, 
    color: 'bg-emerald-600',
    track: 'emerald'
  },
  { 
    title: 'Data Structures & Algorithms', 
    category: 'Technical Interview Prep', 
    progress: 60, 
    color: 'bg-violet-600',
    track: 'violet'
  },
  { 
    title: 'Aptitude Training', 
    category: 'Placement Prep', 
    progress: 85, 
    color: 'bg-amber-500',
    track: 'amber'
  }
];

export const StudentDashboard: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
 
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 text-slate-800 antialiased">
      
      {/* Premium Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Student Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back, <span className="font-semibold text-slate-700">Yuvraj Singh</span> 👋
          </p>
        </div>

        {/* Profile Dropdown */}
        <div className="relative self-stretch sm:self-auto">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 transition-all w-full sm:w-auto"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white shadow-md shadow-indigo-200">
              YS
            </div>
            <div className="text-left hidden xs:block">
              <p className="text-xs font-semibold text-slate-800 leading-tight">Yuvraj Singh</p>
              <p className="text-[10px] text-slate-500 leading-tight">B.Tech CSE - 4th Year</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-[9999]">  
              <div className="p-3 border-b border-slate-100">
                <h3 className="font-semibold text-sm text-slate-950">Yuvraj Singh</h3>
                <p className="text-xs text-slate-500">yuvraj@example.com</p>
              </div>
              {['My Profile', 'My Courses', 'Certificates', 'Settings'].map((item) => (
                <button key={item} className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Profile & Metrics (Col Span 1) */}
        <div className="space-y-6">
          {/* Student Profile Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center font-bold text-lg text-white shadow-inner">
                YS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">
                    Yuvraj Singh
                  </h2>
                  <span className="bg-indigo-50 text-indigo-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-indigo-100">
                    STU001
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">B.Tech Computer Science & Eng.</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="font-medium text-slate-700">yuvraj@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="font-medium text-slate-700">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-slate-400">University</p>
                  <p className="font-medium text-slate-700">Campus2Corporate University</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-slate-400">DOB</p>
                  <p className="font-medium text-slate-700">30-12-2000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Overview Panel */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpenCheck className="w-4 h-4 text-indigo-500" />
              Registration Overview
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Registered', val: '5', bg: 'bg-indigo-50/50', text: 'text-indigo-700', border: 'border-indigo-100/50' },
                { label: 'Completed', val: '2', bg: 'bg-emerald-50/50', text: 'text-emerald-700', border: 'border-emerald-100/50' },
                { label: 'Pending', val: '3', bg: 'bg-amber-50/50', text: 'text-amber-700', border: 'border-amber-100/50' },
                { label: 'Certificates', val: '1', bg: 'bg-purple-50/50', text: 'text-purple-700', border: 'border-purple-100/50' }
              ].map((stat, i) => (
                <div key={i} className={`p-4 rounded-xl border ${stat.bg} ${stat.border}`}>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                  <p className={`text-2xl font-bold mt-1 ${stat.text}`}>{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Graph & Modules (Col Span 2) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Performance Chart */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  Performance Overview
                </h2>
                <p className="text-xs text-slate-500">Learning score metric progression</p>
              </div>
            </div>

            <div className="w-full" style={{ height: 235 }}>
              <ResponsiveContainer width="100%" height="100%"> 
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      borderRadius: '8px', 
                      border: 'none', 
                      color: '#f8fafc',
                      fontSize: '12px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#scoreColor)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Combined Modules & Progress Bars */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Modules & Learning Progress</h2>
                <p className="text-xs text-slate-500">Track and monitor your course completion status</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-sm text-slate-800">{mod.title}</h3>
                      <p className="text-[10px] text-slate-400 mt-0.5">{mod.category}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-600">{mod.progress}%</span>
                  </div>
                  
                  {/* Styled Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                    <div
                      className={`h-2 rounded-full ${mod.color} transition-all duration-500`}
                      style={{ width: `${mod.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Roadmap Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mt-6 overflow-hidden">
        <div className="text-center max-w-md mx-auto mb-8">
          <h2 className="text-lg font-bold text-slate-950">Roadmap to Placement</h2>
          <p className="text-xs text-slate-500 mt-1">Navigate through step-by-step career readiness milestones</p>
        </div>
          
        <div className="relative">
          {/* Connector Line (visible on larger screens) */}
          <div className="hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-[2px] bg-slate-100"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {[
              { step: '01', title: 'Profile Building', desc: 'Secure, verified credentials.', icon: UserCheck },
              { step: '02', title: 'Skill Assessment', desc: 'AI proctored baseline tests.', icon: Brain },
              { step: '03', title: 'Learning Roadmap', desc: 'Curated targeted content.', icon: BookOpen },
              { step: '04', title: 'Mentorship', desc: 'Mock trials & expert reviews.', icon: Users },
              { step: '05', title: 'AI Matching', desc: 'Vector matching active roles.', icon: Cpu },
              { step: '06', title: 'Interview', desc: 'Calendars scheduling.', icon: Calendar },
              { step: '07', title: 'Placement', desc: 'Final contract signing.', icon: Award }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center p-4 bg-slate-50/50 rounded-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-indigo-100 hover:bg-white group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 shadow-sm relative z-10 group-hover:border-indigo-200 group-hover:text-indigo-600 group-hover:shadow-md transition-all">
                  <item.icon className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 text-[8px] bg-slate-100 border border-slate-200 text-slate-500 font-mono w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo-600 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xs font-semibold text-slate-700 mt-4 group-hover:text-slate-900 transition-colors">{item.title}</h3>
                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Activities Panel */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mt-6">
        <h2 className="text-base font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          Upcoming Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'React Assignment Submission', desc: 'Module 3 Project Submission', date: 'Due: 25 Jun', color: 'text-rose-600 bg-rose-50 border-rose-100' },
            { title: 'Aptitude Assessment', desc: 'Placement Prep Test', date: '28 Jun', color: 'text-amber-700 bg-amber-50 border-amber-100' },
            { title: 'Mentor Session', desc: 'One-on-One Career Guidance', date: '30 Jun', color: 'text-indigo-700 bg-indigo-50 border-indigo-100' },
            { title: 'Mock Interview', desc: 'Technical Practice', date: '05 Jul', color: 'text-emerald-700 bg-emerald-50 border-emerald-100' }
          ].map((activity, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-shadow">
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activity.color}`}>
                  {activity.date}
                </span>
                <h3 className="font-semibold text-sm text-slate-800 mt-3 leading-snug">
                  {activity.title}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      
      
    </div>
  );
};
