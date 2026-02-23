import InputField from '../uiElements/InputField';
import { AddButton } from '../uiElements/Buttons';
import Form from '../uiElements/Form';
import { MdOutlineWork } from 'react-icons/md';

export default function ExperienceForm({ experienceList, onChange, onClick }) {
  return (
    <Form>
      <div className="flex gap-3 items-center mb-3">
        <MdOutlineWork size={35} />
        <h1 className="text-2xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col gap-5">
        {experienceList.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-50 p-5 rounded-2xl shadow-xs border-2 border-gray-200 flex flex-col gap-3"
          >
            <InputField
              id={`experienceList*${experience.id}*position`}
              value={experience.position}
              label="Position"
              onChange={onChange}
            />
            <InputField
              id={`experienceList*${experience.id}*company`}
              value={experience.company}
              label="Company"
              onChange={onChange}
            />
            <div className="grid grid-cols-2 gap-15">
              <InputField
                id={`experienceList*${experience.id}*startDate`}
                value={experience.startDate}
                label="Start Date"
                onChange={onChange}
              />
              <InputField
                id={`experienceList*${experience.id}*endDate`}
                value={experience.endDate}
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
