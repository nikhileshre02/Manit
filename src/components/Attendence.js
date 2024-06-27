import React from "react";

function Attendence(props) {
  const { subject } = props;

  const name = subject.name;
  const attended = subject.attended;
  const totalSoFar = subject.totalSoFar;
  const totalByEnd = subject.totalByEnd;

  const attendencePercentage = Math.ceil((attended / totalSoFar) * 100);
  const remainClasses = totalByEnd - totalSoFar;
  const requiredClasses= (75/100*totalByEnd)-attended;

  return (
    <div class="my-4">
      
      <table class="border-separate border border-slate-400 w-[600px]">
        <thead>
          <tr>
            <th border border-slate-300>
              
            </th>
            <th border border-slate-300>
              AttendedPercent
            </th>
            <th border border-slate-300>
              RemainingClasses
            </th>
            <th border border-slate-300>
              RequiredClasses
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td border border-slate-300 text-center>
              {name}
            </td>
            <td border border-slate-300>
              <div className="flex justify-center">
                {attendencePercentage}
              </div>
            </td>
            <td border border-slate-300>
            <div className="flex justify-center">
                {remainClasses}
              </div>
            </td>
            <td border border-slate-300>
            <div className="flex justify-center">
                {requiredClasses}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendence;
