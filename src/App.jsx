import { useState } from 'react';
import './App.css';

import Header from './components/layout/Header';
import GeneralInfoForm from './components/formFields/GeneralInfoForm';
import EducationForm from './components/formFields/EducationForm';
import ExperienceForm from './components/formFields/ExperienceForm';
import GeneralInfoPreview from './components/previews/GeneralInfoPreview';
import EducationPreview from './components/previews/EducationPreview';
import ExperiencePreview from './components/previews/ExperiencePreview';

import { MdPerson } from 'react-icons/md';
import { IoMdSchool } from 'react-icons/io';
import { MdOutlineWork } from 'react-icons/md';

import Accordian from './components/uiElements/Accordian';

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
  const [activeSection, setActiveSection] = useState('general-info');

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
    <div className="bg-gray-50 font-poppins pb-10 flex flex-col h-screen">
      <Header />
      <main className="flex-1 grid grid-cols-2 pt-6">
        <div className="flex flex-col gap-4 px-15">
          <h1 className="text-4xl font-bold">Your Information</h1>
          <Accordian
            title="Personal Information"
            icon={MdPerson}
            isActive={activeSection === 'general-info'}
            onShow={() => setActiveSection('general-info')}
          >
            <GeneralInfoForm {...cvData.personalInformation} onChange={updateGeneralInfo} />
          </Accordian>
          <Accordian
            title="Education"
            icon={IoMdSchool}
            isActive={activeSection === 'education'}
            onShow={() => setActiveSection('education')}
          >
            <EducationForm
              educationList={cvData.educationList}
              onChange={updateEducationandExperience}
              onClick={() => {
                addEntry('educationList');
              }}
            />
          </Accordian>
          <Accordian
            title="Experience"
            icon={MdOutlineWork}
            isActive={activeSection === 'experience'}
            onShow={() => setActiveSection('experience')}
          >
            <ExperienceForm
              experienceList={cvData.experienceList}
              onChange={updateEducationandExperience}
              onClick={() => {
                addEntry('experienceList');
              }}
            />
          </Accordian>
        </div>
        <div className="flex flex-col gap-5 px-15">
          <h1 className="text-4xl font-bold">Live Preview</h1>
          <div className="bg-white flex-1 px-15 py-5 rounded border border-gray-200 shadow-sm mx-10 flex flex-col gap-5">
            <GeneralInfoPreview {...cvData.personalInformation} />
            <EducationPreview educationList={cvData.educationList} />
            <ExperiencePreview experienceList={cvData.experienceList} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
