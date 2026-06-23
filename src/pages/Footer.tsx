import React from 'react';
import { Linkedin, Twitter, Globe } from "lucide-react";
import { LogoSVG } from "./LogoSVG";

const Footer = () => {
  return (
     <footer className="relative z-10 border-t border-slate-800 bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Footer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
                
                {/* Column 1: Brand (logo, description, social) */}
                <div className="lg:col-span-5 space-y-6">
                  <LogoSVG className="h-9 w-auto" iconColor="text-blue-550 text-blue-500" textColor="text-white" />
                  <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
                    Bridging the gap between academic potential and corporate excellence through verifiable skill metrics, AI proctored assessments, and direct hiring pipelines.
                  </p>
                  <div className="flex items-center space-x-4 pt-2">
                    <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-all duration-300 shadow-sm" aria-label="Twitter">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 shadow-sm" aria-label="Website">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
    
                {/* Column 2: Platform */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">Platform</h4>
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-450">
                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  </ul>
                </div>
    
                {/* Column 3: Resources */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">Resources</h4>
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-455">
                    <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Whitepapers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
    
                {/* Column 4: Company */}
                <div className="lg:col-span-3 space-y-4">
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">Company</h4>
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-455">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
    
              </div>
    
              {/* Footer Bottom Row */}
              <div className="pt-8 border-t border-slate-805 border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                
                <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-semibold text-slate-500">
                  <span>&copy; {new Date().getFullYear()} Ashoksoft Technologies. All rights reserved.</span>
                  <div className="flex space-x-3 md:border-l md:border-slate-800 md:pl-4">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  </div>
                </div>
    
                {/* Language/Region selector */}
                <div className="flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-xl text-xs text-slate-300 font-bold cursor-pointer hover:bg-slate-700 hover:text-white transition-all shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Global (English)</span>
                </div>
    
              </div>
    
            </div>
          </footer>
  )
}

export default Footer