import { useState } from 'react';
import './App.css';
import GeneralInfoForm from './components/formFields/GeneralInfoForm';
import EducationForm from './components/formFields/EducationForm';
import ExperienceForm from './components/formFields/ExperienceForm';
import GeneralInfoPreview from './components/previews/GeneralInfoPreview';
import EducationPreview from './components/previews/EducationPreview';
import ExperiencePreview from './components/previews/ExperiencePreview';

function App() {
  const [cvData, setCvData] = useState({
    personalInformation: {
      firstName: 'John',
      lastName: 'Ferrancol',
      title: 'Software Engineer',
      email: 'john.gg.ferrancol@gmail.com',
      phone: '+65 8888 8888',
    },
    educationList: [
      {
        id: crypto.randomUUID(),
        school: 'Oxford University',
        program: "Master's Degree in Financial Engineering",
        startDate: 'Aug 2030',
        endDate: 'Aug 2031',
      },
      {
        id: crypto.randomUUID(),
        school: 'National University of Singapore',
        program: "Bachelor's Degree in Computer Science",
        startDate: 'Aug 2026',
        endDate: 'Aug 2030',
      },
    ],
    experienceList: [
      {
        id: crypto.randomUUID(),
        company: 'Jump Trading',
        position: 'Quantative Developer',
        startDate: 'Aug 2031',
        endDate: 'Present',
      },
      {
        id: crypto.randomUUID(),
        position: 'Quantative Developer Intern',
        company: 'Jump Trading',
        startDate: 'Feb 2030',
        endDate: 'Aug 2030',
      },
    ],
  });

  const defaultTemplate = {
    educationList: {
      school: 'School',
      program: 'Program',
      startDate: 'Start Date',
      endDate: 'End Date',
    },
    experienceList: {
      position: 'Position',
      company: 'Company',
      startDate: 'Start Date',
      endDate: 'End Date',
    },
  };

  const updateGeneralInfo = (e) => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      personalInformation: { ...prevCvData.personalInformation, [e.target.id]: e.target.value },
    }));
  };

  const updateEducationandExperience = (e) => {
    const [sectionToUpdate, targetId, targetInputField] = e.target.id.split('*');

    setCvData((prevCvData) => {
      return {
        ...prevCvData,
        [sectionToUpdate]: prevCvData[sectionToUpdate].map((entry) => {
          if (entry.id !== targetId) {
            return entry;
          } else {
            return {
              ...entry,
              [targetInputField]: e.target.value,
            };
          }
        }),
      };
    });
  };

  const addEntry = (sectionToUpdate) => {
    setCvData((prevCvData) => {
      const newEntry = {
        id: crypto.randomUUID(),
        ...defaultTemplate[sectionToUpdate],
      };

      return {
        ...prevCvData,
        [sectionToUpdate]: [...prevCvData[sectionToUpdate], newEntry],
      };
    });
  };

  return (
    <>
      <main className="flex justify-around">
        <div className="flex flex-col gap-4">
          <GeneralInfoForm {...cvData.personalInformation} onChange={updateGeneralInfo} />
          <EducationForm
            educationList={cvData.educationList}
            onChange={updateEducationandExperience}
            onClick={() => {
              addEntry('educationList');
            }}
          />
          <ExperienceForm
            experienceList={cvData.experienceList}
            onChange={updateEducationandExperience}
            onClick={() => {
              addEntry('experienceList');
            }}
          />
        </div>
        <div className="flex flex-col gap-10">
          <GeneralInfoPreview {...cvData.personalInformation} />
          <EducationPreview educationList={cvData.educationList} />
          <ExperiencePreview experienceList={cvData.experienceList} />
        </div>
      </main>
    </>
  );
}

export default App;
