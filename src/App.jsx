import { useState } from 'react';
import './App.css';
import GeneralInfoForm from './components/formFields/GeneralInfoForm';
import GeneralInfoPreview from './components/previews/GeneralInfoPreview';

function App() {
  const [cvData, setCvData] = useState({
    personalInformation: {
      firstName: 'John',
      lastName: 'Ferrancol',
      title: 'Software Engineer',
      email: 'john.gg.ferrancol@gmail.com',
      phone: '+65 8888 8888',
    },
  });

  const handleGeneralInfoChange = (e) => {
    setCvData({
      ...cvData,
      personalInformation: { ...cvData.personalInformation, [e.target.id]: e.target.value },
    });
  };

  return (
    <>
      <main className="flex justify-around">
        <div className="left-panel">
          <GeneralInfoForm {...cvData.personalInformation} onChange={handleGeneralInfoChange} />
        </div>
        <div className="right-panel">
          <GeneralInfoPreview {...cvData.personalInformation} />
        </div>
      </main>
    </>
  );
}

export default App;
