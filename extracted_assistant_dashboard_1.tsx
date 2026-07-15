"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, UserCheck, Clock, XCircle, DollarSign, Video, 
  Play, Pause, FastForward, SkipForward, AlertTriangle, 
  Phone, FileText, MoreVertical, Search, Plus
} from 'lucide-react';
import Image from 'next/image';

const stats = [
  { title: "Today's Appointments", count: "42", trend: "+12%", icon: Users, color: "text-assistant-primary", bg: "bg-[#e8fbe9]" },
  { title: "Patients Waiting", count: "12", trend: "Normal", icon: Clock, color: "text-assistant-warning", bg: "bg-[#fff7e6]" },
  { title: "Completed", count: "18", trend: "+4%", icon: UserCheck, color: "text-assistant-secondary", bg: "bg-[#e5effd]" },
  { title: "Cancelled", count: "2", trend: "-1%", icon: XCircle, color: "text-assistant-danger", bg: "bg-[#fdecea]" },
  { title: "Revenue", count: "৳28K", trend: "+18%", icon: DollarSign, color: "text-[#8B5CF6]", bg: "bg-[#f5f3ff]" },
  { title: "Online Consultation", count: "8", trend: "New", icon: Video, color: "text-assistant-accent", bg: "bg-[#e6f9f6]" },
];

const queue = [
  { id: "S-01", name: "Rahim Uddin", age: 45, gender: "M", phone: "01711...", time: "10:30 AM", type: "First Visit", symptoms: "Fever, Cough", status: "In Consultation", payment: "Paid" },
  { id: "S-02", name: "Fatema Begum", age: 32, gender: "F", phone: "01822...", time: "10:45 AM", type: "Follow Up", symptoms: "Headache", status: "Waiting", payment: "Pending" },
  { id: "S-03", name: "Korim Hossain", age: 58, gender: "M", phone: "01933...", time: "11:00 AM", type: "First Visit", symptoms: "Chest Pain", status: "Waiting", payment: "Paid", priority: true },
  { id: "S-04", name: "Nusrat Jahan", age: 24, gender: "F", phone: "01644...", time: "11:15 AM", type: "Report Show", symptoms: "Blood Test", status: "Delayed", payment: "Paid" },
];

export default function AssistantDashboardPage() {
  return (
    <div className="w-full flex flex-col gap-6 relative min-h-[800px]">
      
      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="h-[140px] bg-white rounded-[20px] p-6 shadow-sm border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className={`w-[40px] h-[40px] rounded-[12px] flex items-center justify-center ${stat.bg}`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <span className="text-[13px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">{stat.trend}</span>
            </div>
            <div>
              <h3 className="text-[34px] font-bold text-slate-800 leading-none mb-1">{stat.count}</h3>
              <p className="text-[14px] font-medium text-slate-500">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Middle Row: Live Queue & Doctor Status */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Live Queue Control (8 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="xl:col-span-8 h-[240px] bg-white rounded-[20px] shadow-sm border border-slate-100 p-6 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-assistant-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[20px] font-bold text-slate-800 mb-1">Live Queue Control</h2>
              <p className="text-[14px] text-slate-500">Avg. Consultation Time: 12 mins</p>
            </div>
            <div className="text-right">
              <p className="text-[14px] text-slate-500 mb-2">Queue Progress (45%)</p>
              <div className="w-[200px] h-[12px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-assistant-primary rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-medium mb-1">Current Serial</span>
              <span className="text-[52px] font-extrabold text-assistant-primary leading-none">S-01</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] text-slate-500 font-medium mb-1">Next Serial</span>
              <span className="text-[34px] font-bold text-slate-400 leading-none">S-02</span>
            </div>
            
            <div className="flex-1 flex justify-end gap-3 z-10 flex-wrap">
              <button className="h-[48px] px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-[12px] font-semibold text-[15px] transition-all flex items-center gap-2">
                <SkipForward size={18} /> Skip
              </button>
              <button className="h-[48px] px-6 bg-assistant-danger/10 hover:bg-assistant-danger/20 text-assistant-danger rounded-[12px] font-semibold text-[15px] transition-all flex items-center gap-2">
                <AlertTriangle size={18} /> Emergency
              </button>
              <button className="h-[48px] px-8 bg-assistant-primary hover:bg-[#5bc95c] text-white rounded-[12px] font-bold text-[15px] transition-all shadow-[0_8px_20px_rgba(109,218,110,0.3)] flex items-center gap-2">
                <Play size={18} /> Call Next
              </button>
            </div>
          </div>
        </motion.div>

        {/* Doctor Status Card (4 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="xl:col-span-4 h-[240px] bg-white rounded-[20px] shadow-sm border border-slate-100 p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-[20px] font-bold text-slate-800">Doctor Status</h2>
            <span className="text-[13px] text-slate-400">Updated 2m ago</span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-[16px] border border-slate-100">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-white shadow-sm relative shrink-0 bg-slate-200">
               <Image src="/images/signup-doctor.png" alt="Doctor" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-slate-800">Dr. Sarah Rahman</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-[12px] h-[12px] bg-assistant-success rounded-full animate-pulse-subtle"></div>
                <span className="text-[14px] font-medium text-assistant-success">In Consultation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="h-[48px] bg-assistant-warning/10 text-assistant-warning rounded-[12px] font-semibold text-[14px] hover:bg-assistant-warning hover:text-white transition-all flex justify-center items-center gap-2">
              <Pause size={16} /> Pause
            </button>
            <button className="h-[48px] bg-slate-100 text-slate-600 rounded-[12px] font-semibold text-[14px] hover:bg-slate-200 transition-all flex justify-center items-center gap-2">
              <XCircle size={16} /> Close
            </button>
          </div>
        </motion.div>

      </div>

      {/* 3. Today's Queue Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full bg-white rounded-[20px] shadow-sm border border-slate-100 overflow-hidden"
      >
        <div className="h-[76px] px-6 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-[20px] font-bold text-slate-800">Today's Queue</h2>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search queue..." className="h-[44px] pl-9 pr-4 rounded-[12px] border border-slate-200 text-[14px] focus:border-assistant-primary outline-none transition-all w-[240px]" />
            </div>
            <button className="h-[44px] px-5 bg-slate-50 text-slate-600 font-semibold rounded-[12px] text-[14px] hover:bg-slate-100 border border-slate-200 transition-all">
              Filter
            </button>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-[14px] text-slate-500 font-semibold h-[60px]">
                <th className="px-6 py-3 font-semibold w-[80px]">Serial</th>
                <th className="px-6 py-3 font-semibold min-w-[240px]">Patient Info</th>
                <th className="px-6 py-3 font-semibold">Time</th>
                <th className="px-6 py-3 font-semibold">Symptoms</th>
                <th className="px-6 py-3 font-semibold">Status</th>
                <th className="px-6 py-3 font-semibold">Payment</th>
                <th className="px-6 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[15px]">
              {queue.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors h-[72px] group">
                  <td className="px-6 py-4">
                    <span className={`font-bold ${row.priority ? 'text-assistant-danger' : 'text-slate-700'}`}>{row.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-[42px] h-[42px] bg-assistant-primary/10 rounded-full flex items-center justify-center text-assistant-primary font-bold">
                        {row.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 leading-tight">{row.name}</p>
                        <p className="text-[13px] text-slate-500 mt-0.5">{row.age} yrs • {row.gender} • {row.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{row.time}</td>
                  <td className="px-6 py-4">
                    <p className="text-slate-600 truncate max-w-[150px]">{row.symptoms}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-[13px] font-semibold inline-flex items-center gap-1.5
                      ${row.status === 'In Consultation' ? 'bg-assistant-primary/10 text-assistant-primary' : ''}
                      ${row.status === 'Waiting' ? 'bg-assistant-warning/10 text-assistant-warning' : ''}
                      ${row.status === 'Delayed' ? 'bg-assistant-danger/10 text-assistant-danger' : ''}
                    `}>
                      {row.status === 'In Consultation' && <span className="w-2 h-2 rounded-full bg-assistant-primary animate-pulse"></span>}
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${row.payment === 'Paid' ? 'text-assistant-success' : 'text-slate-400'}`}>
                      {row.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-[40px] h-[40px] rounded-[10px] bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-assistant-secondary hover:border-assistant-secondary transition-colors">
                        <FileText size={18} />
                      </button>
                      <button className="w-[40px] h-[40px] rounded-[10px] bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-assistant-primary hover:border-assistant-primary transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 4. Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-[64px] h-[64px] bg-assistant-primary hover:bg-[#5bc95c] text-white rounded-full flex items-center justify-center shadow-[0_12px_24px_rgba(109,218,110,0.4)] transition-all hover:scale-105 group relative">
          <Plus size={28} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

    </div>
  );
}
