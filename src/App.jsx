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
setResultsMarquee("Results are out ! ! ! 🎉 🥳                                 Check your results ! ! ! 🥳 🎉                             Results are out ! ! ! 🎉 🥳                         Check your results ! ! ! 🥳 🎉");  }, []);

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <div className="bg-red-800 text-white py-4 px-2 text-center">
        <h1 className="text-2xl font-bold">CIRCUIT BOARD OF SYSTEM ELECTRONICS</h1>
        {page === 'form' && (
          <div className="text-xl mt-2">Examination Results 2025</div>
        )}
        {page === 'result' && (
          <div className="text-xl mt-2">Vishal Mega Mart Guard Entrance Examination 2025</div>
        )}
        <div className="text-sm mt-2"></div>
      </div>
      
      <div className="bg-blue-900 text-white p-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {resultsMarquee}
        </div>
      </div>
      
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
      
      <div className="p-3 text-center text-gray-600 text-sm">
        2025 Circuit Board of System Electronics. All Rights Reserved.
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
              white-space: pre;

          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}