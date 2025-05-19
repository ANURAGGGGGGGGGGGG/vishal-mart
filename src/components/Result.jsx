import React from 'react';

export default function Result({ examData, handleBack }) {
  return (
    <div className="container-fluid p-3 p-md-4">
      <div className="card mx-auto shadow" style={{ maxWidth: '800px' }}>
        <div className="card-header bg-primary text-white p-2">
       
        </div>

        <div className="card-body p-2 p-md-3">
          {/* Candidate Info Table */}
          <div className="table-responsive mb-3">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th className="w-25 bg-light">Roll No:</th>
                  <td>{examData.rollNumber}</td>
                </tr>
                <tr>
                  <th className="bg-light">Candidate Name:</th>
                  <td>{examData.candidateName}</td>
                </tr>
                <tr>
                  <th className="bg-light">Date of Birth:</th>
                  <td>
                    {new Date(examData.dateOfBirth).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    }).replace(/\//g, '/')}
                  </td>
                </tr>
                <tr>
                  <th className="bg-light">Admit Card ID:</th>
                  <td>{examData.admitCardId}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Main Subjects Table */}
          <div className="table-responsive mb-3">
            <table className="table table-bordered table-striped">
              <thead className="table-primary">
                <tr>
                  <th>SUB CODE</th>
                  <th>SUB NAME</th>
                  <th>THEORY (80)</th>
                  <th>PRACTICAL (20)</th>
                  <th>TOTAL</th>
                  <th>GRADE</th>
                </tr>
              </thead>
              <tbody>
                {examData.subjects && examData.subjects.filter(s => !s.additional).map((subject, index) => (
                  <tr key={index}>
                    <td className="text-center">{subject.code}</td>
                    <td>{subject.name}</td>
                    <td className="text-center">{subject.theory}</td>
                    <td className="text-center">{subject.practical}</td>
                    <td className="text-center fw-bold">{subject.total}</td>
                    <td className="text-center fw-bold">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Subject */}
          <h5 className="text-center bg-secondary text-white p-2 mb-3">
            ADDITIONAL SUBJECT
          </h5>

          <div className="table-responsive mb-4">
            <table className="table table-bordered table-striped">
              <tbody>
                {examData.subjects && examData.subjects.filter(s => s.additional).map((subject, index) => (
                  <tr key={index}>
                    <td className="text-center">{subject.code}</td>
                    <td>{subject.name}</td>
                    <td className="text-center">{subject.theory}</td>
                    <td className="text-center">{subject.practical}</td>
                    <td className="text-center fw-bold">{subject.total}</td>
                    <td className="text-center fw-bold">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Results Section */}
          <div className="alert alert-success text-center fs-4 fw-bold mb-3">
            SELECTED
          </div>

          <div className="text-center mb-2">
            <strong>Total Marks:</strong> {examData.totalMarks} | <strong>Percentage:</strong> {examData.percentage}%
          </div>

          <div className="text-center mb-3">
            <strong>Cutoff Percentage:</strong> {examData.cutoffPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
}