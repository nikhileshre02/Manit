import React from "react";

function Timetable() {
  return (
    <div className="my-8">
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Time table </h1>
      <table class="table-auto w-full border-collapse border border-slate-400" >
        <thead >
          <tr >
            <th className="border border-slate-300">Sno:</th>
            <th className="border border-slate-300">9:00-10:00</th>
            <th className="border border-slate-300">10:00-11:00</th>
            <th className="border border-slate-300">11:00-12:00</th>
            <th className="border border-slate-300">12:00-1:00</th>
            <th className="border border-slate-300">1:00-2:00</th>
            <th className="border border-slate-300">2:00-3:00</th>
            <th className="border border-slate-300">3:00-4:00</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border border-slate-300">mon</td>
          </tr>
          <tr className="border">
            <td className="border border-slate-300">Tue</td>
          </tr>
          <tr className="border">
            <td className="border border-slate-300">Wed</td>
          </tr>
          <tr className="border">
            <td className="border border-slate-300">Thu</td>
          </tr>
          <tr className="border">
            <td className="border border-slate-300">Fri</td>
          </tr>
          <tr className="border">
            <td className="border border-slate-300">Sat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
