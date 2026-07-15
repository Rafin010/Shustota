"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, UserCheck, UserX, UserPlus, Play, Pause, X, SkipForward, ArrowDownUp, Phone, CheckCircle2, MoreVertical
} from 'lucide-react';

const patients = [
  { token: "S-01", name: "Rahim Uddin", type: "Walk-in", payment: "Paid", status: "In Consultation" },
  { token: "S-02", name: "Fatema Begum", type: "Online", payment: "Due", status: "Waiting" },
  { token: "S-03", name: "Abdul Karim", type: "Walk-in", payment: "Paid", status: "Waiting" },
  { token: "S-04", name: "Salma Akter", type: "Online", payment: "Paid", status: "Waiting" },
];

export default function AssistantDashboardPage() {
  const [queuePaused, setQueuePaused] = useState(false);

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[24px] font-bold text-slate-800">Command Center</h1>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
            <span className="w-2.5 h-2.5 bg-assistant-primary rounded-full animate-pulse"></span>
            <span className="text-[14px] font-bold text-slate-700">Live Sync</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          
          {/* Live Queue Control Card (Height 260px) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-[260px] bg-white rounded-[20px] shadow-sm border border-slate-100 p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[14px] text-slate-500 font-semibold uppercase tracking-wider">Current Token</span>
                <h2 className="text-[54px] font-extrabold text-slate-800 leading-tight mt-1">S-01</h2>
                <p className="text-[15px] font-medium text-assistant-primary flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-assistant-primary animate-pulse"></span> Calling...
                </p>
              </div>
              <div className="bg-[#F7FAFC] p-3 rounded-[12px] text-right border border-slate-100">
                <span className="text-[12px] text-slate-500 font-medium block mb-1">Patients Waiting</span>
                <span className="text-[24px] font-bold text-[#F59E0B]">12</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="col-span-2 h-[48px] bg-[#6DDA6E] hover:bg-[#5bc95c] text-white font-bold rounded-[12px] transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(109,218,110,0.3)] hover:-translate-y-0.5">
                <Play size={18} fill="currentColor" /> Call Next (S-02)
              </button>
              
              <div className="col-span-2 grid grid-cols-4 gap-2">
                <button 
                  onClick={() => setQueuePaused(!queuePaused)}
                  className={`h-[40px] flex items-center justify-center gap-1 rounded-[10px] text-[12px] font-bold transition-colors ${queuePaused ? 'bg-red-50 text-red-500 border border-red-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {queuePaused ? <Play size={14} /> : <Pause size={14} />} {queuePaused ? 'Resume' : 'Pause'}
                </button>
                <button className="h-[40px] bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-[10px] flex items-center justify-center gap-1 text-[12px] font-bold transition-colors">
                  <SkipForward size={14} /> Skip
                </button>
                <button className="h-[40px] bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-[10px] flex items-center justify-center gap-1 text-[12px] font-bold transition-colors">
                  <ArrowDownUp size={14} /> Reorder
                </button>
                <button className="h-[40px] bg-red-50 text-red-500 hover:bg-red-100 border border-red-100 rounded-[10px] flex items-center justify-center gap-1 text-[12px] font-bold transition-colors">
                  <X size={14} /> Cancel
                </button>
              </div>
            </div>
          </motion.div>

          {/* Today's Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-5 rounded-[16px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#2F80ED]/10 text-[#2F80ED] flex items-center justify-center mb-3"><Users size={18} /></div>
              <h3 className="text-[24px] font-bold text-slate-800 leading-none mb-1">42</h3>
              <span className="text-[13px] text-slate-500 font-medium">Total Patients</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white p-5 rounded-[16px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#00C2A8]/10 text-[#00C2A8] flex items-center justify-center mb-3"><UserCheck size={18} /></div>
              <h3 className="text-[24px] font-bold text-slate-800 leading-none mb-1">30</h3>
              <span className="text-[13px] text-slate-500 font-medium">Checked In</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-5 rounded-[16px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#6DDA6E]/10 text-[#6DDA6E] flex items-center justify-center mb-3"><CheckCircle2 size={18} /></div>
              <h3 className="text-[24px] font-bold text-slate-800 leading-none mb-1">18</h3>
              <span className="text-[13px] text-slate-500 font-medium">Completed</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white p-5 rounded-[16px] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-red-50 text-red-500 flex items-center justify-center mb-3"><UserX size={18} /></div>
              <h3 className="text-[24px] font-bold text-slate-800 leading-none mb-1">2</h3>
              <span className="text-[13px] text-slate-500 font-medium">No Show</span>
            </motion.div>
          </div>

          {/* Doctor Status */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-[16px] shadow-sm border border-slate-100">
            <h3 className="text-[16px] font-bold text-slate-800 mb-4">Doctor Status</h3>
            <div className="flex items-center gap-4">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-slate-100 relative bg-slate-50 shrink-0 shadow-sm">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-slate-800">Dr. Farzana Alam</h4>
                <div className="flex items-center gap-2 mt-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] animate-pulse"></span>
                  <span className="text-[12px] font-medium text-[#2F80ED]">In Consultation (12 mins)</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT PANEL - TABLE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="xl:col-span-2 bg-white rounded-[20px] shadow-sm border border-slate-100 flex flex-col h-full min-h-[600px] overflow-hidden"
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10 shrink-0">
            <h2 className="text-[18px] font-bold text-slate-800">Today's Appointments</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-[10px] text-[13px] font-bold hover:bg-slate-100 transition-colors">Filter</button>
              <button className="px-4 py-2 bg-[#6DDA6E]/10 text-[#6DDA6E] rounded-[10px] text-[13px] font-bold hover:bg-[#6DDA6E] hover:text-white transition-colors flex items-center gap-2">
                <UserPlus size={16} /> New Walk-in
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="sticky top-0 bg-slate-50/90 backdrop-blur-md z-10">
                <tr className="text-[13px] text-slate-500 font-semibold h-[48px] uppercase tracking-wider border-b border-slate-200">
                  <th className="px-6 py-3 font-semibold">Token</th>
                  <th className="px-6 py-3 font-semibold">Patient Name</th>
                  <th className="px-6 py-3 font-semibold">Type</th>
                  <th className="px-6 py-3 font-semibold">Payment</th>
                  <th className="px-6 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {patients.map((patient, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors h-[64px]">
                    <td className="px-6 py-3 font-bold text-slate-800">{patient.token}</td>
                    <td className="px-6 py-3 font-semibold text-slate-700">{patient.name}</td>
                    <td className="px-6 py-3">
                      <span className={`px-3 py-1 rounded-full text-[12px] font-bold border ${patient.type === 'Online' ? 'bg-[#00C2A8]/5 text-[#00C2A8] border-[#00C2A8]/20' : 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                        {patient.type}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-[13px] font-bold ${patient.payment === 'Paid' ? 'text-[#6DDA6E]' : 'text-[#F59E0B]'}`}>
                        {patient.payment}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        {patient.status === 'Waiting' && (
                           <button className="px-3 py-1.5 bg-white border border-slate-200 shadow-sm text-slate-600 rounded-[8px] text-[12px] font-bold hover:border-[#2F80ED] hover:text-[#2F80ED] transition-colors">Check-in</button>
                        )}
                        <button className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-[8px] text-[12px] font-bold hover:bg-slate-200 transition-colors">
                          <MoreVertical size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}