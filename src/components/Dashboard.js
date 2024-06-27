import React from "react";
import Timetable from "./Timetable";
import Attendence from "./Attendence";

function Dashboard() {
  const subjects = [
    { name: "Math", attended: 12, totalSoFar: 16, totalByEnd: 20 },
    { name: "English", attended: 10, totalSoFar: 15, totalByEnd: 20 },
    { name: "Science", attended: 8, totalSoFar: 15, totalByEnd: 20 },
  ];
  return (
    <>
      <Timetable />
      <div>
        <h2 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Attendance details
        </h2>
        <div class="flex flex-row flex-wrap w-[800px] justify-center my-4 mx-auto">
          {subjects.map((subject) => {
            return <Attendence subject={subject} />;
          })}
        </div>
        <div>
          <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            Marksheet Section
          </h1>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
