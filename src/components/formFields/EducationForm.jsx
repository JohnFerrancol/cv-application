import InputField from '../uiElements/InputField';
import { AddButton } from '../uiElements/Buttons';
import Form from '../uiElements/Form';
import { IoMdSchool } from 'react-icons/io';

export default function EducationForm({ educationList, onChange, onClick }) {
  return (
    <Form>
      <div className="flex gap-3 items-center mb-3">
        <IoMdSchool size={35} />
        <h1 className="text-2xl font-bold">Education</h1>
      </div>
      <div className="flex flex-col gap-5">
        {educationList.map((education) => (
          <div
            key={education.id}
            className="bg-gray-50 p-5 rounded-2xl shadow-xs border-2 border-gray-200 flex flex-col gap-3"
          >
            <InputField
              id={`educationList*${education.id}*school`}
              value={education.school}
              label="School"
              onChange={onChange}
            />
            <InputField
              id={`educationList*${education.id}*program`}
              value={education.program}
              label="Program"
              onChange={onChange}
            />
            <div className="grid grid-cols-2 gap-15">
              <InputField
                id={`educationList*${education.id}*startDate`}
                value={education.startDate}
                label="Start Date"
                onChange={onChange}
              />
              <InputField
                id={`educationList*${education.id}*endDate`}
                value={education.endDate}
                label="End Date"
                onChange={onChange}
              />
            </div>
          </div>
        ))}
      </div>
      <AddButton onClick={onClick} />
    </Form>
  );
}
