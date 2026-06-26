import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowLeft, Sparkles } from 'lucide-react';

export const CollegeDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Glowing Lights */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-slate-900/65 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 text-center shadow-2xl relative z-10 hover:border-violet-500/30 transition-all duration-500">
        {/* Animated Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/20 animate-pulse">
          <Building className="w-8 h-8 text-white" />
        </div>

        {/* Preview Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 tracking-wider uppercase mb-4">
          <Sparkles className="w-3 h-3" />
          Preview Version
        </span>

        {/* Title & Description */}
        <h1 className="text-2xl font-black tracking-tight text-white mb-3">
          College Dashboard
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          Manage institutional rosters, aggregate cohort readiness metrics, evaluate student performance, and coordinate corporate placement drives.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-sm font-bold text-white shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};
