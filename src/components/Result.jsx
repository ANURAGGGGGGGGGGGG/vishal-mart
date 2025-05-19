import React from 'react';

export default function Result({ examData, handleBack }) {
  return (
    <div className="flex-1 p-2 sm:p-4">
      <div className="max-w-2xl mx-auto bg-white pb-4 sm:pb-6 rounded-md shadow-md">
        {/* Button Group */}
        <div className="bg-blue-900 text-white p-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4">
          <button className="bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-1 rounded text-sm sm:text-base">
            Print
          </button>
          <button 
            className="bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-1 rounded text-sm sm:text-base"
            onClick={handleBack}
          >
            Back
          </button>
        </div>

        <div className="px-2 sm:px-4">
          {/* Candidate Info Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4 min-w-[300px]">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-1.5 sm:p-2 font-bold text-sm sm:text-base w-1/3">Roll No:</td>
                  <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">{examData.rollNumber}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1.5 sm:p-2 font-bold text-sm sm:text-base">Candidate Name:</td>
                  <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">{examData.candidateName}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1.5 sm:p-2 font-bold text-sm sm:text-base">Date of Birth:</td>
                  <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">
                    {new Date(examData.dateOfBirth).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    }).replace(/\//g, '/')}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-1.5 sm:p-2 font-bold text-sm sm:text-base">Admit Card ID:</td>
                  <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">{examData.admitCardId}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Main Subjects Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-4 min-w-[600px] sm:min-w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">SUB CODE</th>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">SUB NAME</th>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">THEORY (80)</th>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">PRACTICAL (20)</th>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">TOTAL</th>
                  <th className="border border-gray-300 p-1.5 sm:p-2 text-xs sm:text-sm">GRADE</th>
                </tr>
              </thead>
              <tbody>
                {examData.subjects && examData.subjects.filter(s => !s.additional).map((subject, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.code}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">{subject.name}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.theory}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.practical}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center font-bold text-sm sm:text-base">{subject.total}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center font-bold text-sm sm:text-base">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Subject */}
          <div className="w-full text-center bg-gray-200 p-2 font-bold mb-4 text-sm sm:text-base">
            ADDITIONAL SUBJECT
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6 min-w-[600px] sm:min-w-full">
              <tbody>
                {examData.subjects && examData.subjects.filter(s => s.additional).map((subject, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.code}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-sm sm:text-base">{subject.name}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.theory}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center text-sm sm:text-base">{subject.practical}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center font-bold text-sm sm:text-base">{subject.total}</td>
                    <td className="border border-gray-300 p-1.5 sm:p-2 text-center font-bold text-sm sm:text-base">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Results Section */}
          <div className="w-full bg-green-100 text-green-700 p-2 sm:p-4 text-center text-xl sm:text-3xl font-bold mb-4">
            SELECTED
          </div>

          <div className="text-center mb-4 text-sm sm:text-base">
            Total Marks: {examData.totalMarks} | Percentage: {examData.percentage}%
          </div>

          <div className="text-center mb-4 text-sm sm:text-base">
            Cutoff Percentage: {examData.cutoffPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
}