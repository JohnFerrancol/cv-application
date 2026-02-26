import { useState } from 'react';
import './styles/App.css';

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
  // Initialise the cvData state variable which houses the relevant information displayed in the CV Preview
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
        responsibilities:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      {
        id: crypto.randomUUID(),
        position: 'Quantative Developer Intern',
        company: 'Jump Trading',
        startDate: 'Feb 2030',
        endDate: 'Aug 2030',
        responsibilities:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
    ],
  });

  // Initialise an activeSection state to store which section of the resume does the user want to change
  const [activeSection, setActiveSection] = useState('general-info');

  const DEFAULT_TEMPLATE = {
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
      responsibilities: 'Enter key responsbilities and roles',
    },
  };

  // Function defined to dynamically change the user's personal information in the CV
  const updateGeneralInfo = (e) => {
    // Changes the CV Data by getting the id of the target which coincides with the relevant key and change the value
    setCvData((prevCvData) => ({
      ...prevCvData,
      personalInformation: { ...prevCvData.personalInformation, [e.target.id]: e.target.value },
    }));
  };

  // Function defined to dynamically change the user's education and experiences information in the CV
  const updateEducationandExperience = (e) => {
    // The input in these form fields are defined by three parts divided into 3 parts seperated by an *: the section of CV to update, the target id of the entry within that section and the target input field to change
    const [sectionToUpdate, targetId, targetInputField] = e.target.id.split('*');

    setCvData((prevCvData) => {
      return {
        ...prevCvData,
        // Find the id of the entry within the section and then change the relevant values from the target key
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

  // Function defined to add an entry to the user's education and experiences information in the CV
  const addEntry = (sectionToUpdate) => {
    setCvData((prevCvData) => {
      // Initialise a new object using the default template for new entries for education/experience
      const newEntry = {
        id: crypto.randomUUID(),
        ...DEFAULT_TEMPLATE[sectionToUpdate],
      };

      // Add the the new entry to the cvData state
      return {
        ...prevCvData,
        [sectionToUpdate]: [...prevCvData[sectionToUpdate], newEntry],
      };
    });
  };

  // Function defined to delete an entry to the user's education and experiences information in the CV
  const deleteEntry = (e) => {
    // The input in these form fields are defined by three parts divided into 2 parts seperated by an *: which section does the id of the entry belong to, the target id of the entry
    const [sectionToUpdate, targetEntryId] = e.currentTarget.dataset.buttonId.split('*');

    // From the relevant section, filter the id that the user wants to delete
    setCvData((prevCvData) => {
      return {
        ...prevCvData,
        [sectionToUpdate]: prevCvData[sectionToUpdate].filter(
          (entry) => entry.id !== targetEntryId
        ),
      };
    });
  };

  return (
    <div className="bg-gray-50 font-poppins pb-10 flex flex-col">
      <Header />
      <main className="min-h-screen grid grid-cols-2 pt-6">
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
              onAddClick={() => {
                addEntry('educationList');
              }}
              onDeleteClick={deleteEntry}
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
              onAddClick={() => {
                addEntry('experienceList');
              }}
              onDeleteClick={deleteEntry}
            />
          </Accordian>
        </div>
        <div className="flex flex-col gap-5 px-15">
          <h1 className="text-4xl font-bold">Live Preview</h1>
          <div
            id="cv-preview"
            className="bg-white flex-1 px-15 py-5 rounded border border-gray-200 shadow-sm mx-10 flex flex-col gap-5"
          >
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
