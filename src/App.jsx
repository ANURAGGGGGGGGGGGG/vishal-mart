import { useState, useEffect } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import { subjects } from './constants/subjects';
import { 
  generateRandomID,
  generateRandomCaptcha,
  generateRandomGrade,
  generateRandomScore 
} from './utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [page, setPage] = useState('form');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [message, setMessage] = useState('');
  const [examData, setExamData] = useState({});
  const [resultsMarquee, setResultsMarquee] = useState('');

  useEffect(() => {
    setCaptcha(generateRandomCaptcha());
    setResultsMarquee("Results are out ! ! ! 🎉 🥳      Check your results ! ! ! 🥳 🎉       Results are out ! ! ! 🎉 🥳        Check your results ! ! ! 🥳 🎉");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fullName.trim()) {
      setMessage("Please enter your full name");
      return;
    }
    
    if (!dob) {
      setMessage("Please enter your date of birth");
      return;
    }
    
    if (userCaptcha !== captcha) {
      setMessage("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateRandomCaptcha());
      setUserCaptcha('');
      return;
    }
    
    const subjectsWithScores = subjects.map(subject => {
      const theory = generateRandomScore(45, 76);
      const practical = generateRandomScore(10, 20);
      const total = theory + practical;
      return {
        ...subject,
        theory,
        practical,
        total,
        grade: generateRandomGrade(total)
      };
    });
    
    const totalMarks = subjectsWithScores.reduce((sum, subject) => sum + subject.total, 0);
    const percentage = (totalMarks / (subjectsWithScores.length * 100) * 100).toFixed(2);
    
    setExamData({
      rollNumber: generateRandomID('VMG'),
      candidateName: fullName,
      dateOfBirth: dob,
      admitCardId: generateRandomID('AC'),
      subjects: subjectsWithScores,
      totalMarks,
      percentage,
      cutoffPercentage: "73.2"
    });
    
    setPage('result');
  };

  const refreshCaptcha = () => {
    setCaptcha(generateRandomCaptcha());
    setUserCaptcha('');
  };

  const handleReset = () => {
    setFullName('');
    setDob('');
    setUserCaptcha('');
    setCaptcha(generateRandomCaptcha());
    setMessage('');
  };

  const handleBack = () => {
    setPage('form');
    handleReset();
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <div className="bg-danger text-white py-4 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">CIRCUIT BOARD OF SYSTEM ELECTRONICS</h1>
          {page === 'form' && (
            <div className="h4 mt-2">Examination Results 2025</div>
          )}
          {page === 'result' && (
            <div className="h4 mt-2">Vishal Mega Mart Guard Entrance Examination 2025</div>
          )}
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-primary text-white p-2 overflow-hidden">
        <div className="animate-marquee text-nowrap" style={{ whiteSpace: 'pre' }}>
          {resultsMarquee}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow-1 py-4">
        <div className="container">
          {page === 'form' && (
            <Form
              fullName={fullName}
              setFullName={setFullName}
              dob={dob}
              setDob={setDob}
              captcha={captcha}
              userCaptcha={userCaptcha}
              setUserCaptcha={setUserCaptcha}
              message={message}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              refreshCaptcha={refreshCaptcha}
            />
          )}
          
          {page === 'result' && (
            <Result examData={examData} handleBack={handleBack} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-auto">
        <div className="container text-center text-muted small">
          2025 Circuit Board of System Electronics. All Rights Reserved.
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: inline-block;
          padding-left: 100%; /* Add initial offset */
        }
      `}</style>
    </div>
  );
}