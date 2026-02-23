import InputField from '../uiElements/InputField';
import { AddButton, DeleteButton } from '../uiElements/Buttons';
// import { MdDelete } from 'react-icons/md';

export default function ExperienceForm({ experienceList, onChange, onAddClick, onDeleteClick }) {
  return (
    <div>
      <div className="flex flex-col gap-5">
        {experienceList.map((experience) => (
          <div
            key={experience.id}
            className="bg-gray-50 p-5 rounded-2xl shadow-xs border-2 border-gray-200 flex flex-col gap-3"
          >
            <DeleteButton onClick={onDeleteClick} buttonId={`experienceList*${experience.id}`} />
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
            <InputField
              id={`experienceList*${experience.id}*responsibilities`}
              value={experience.responsibilities}
              label="Responsibilities"
              onChange={onChange}
              textarea={true}
            />
          </div>
        ))}
        <AddButton onClick={onAddClick} />
      </div>
    </div>
  );
}
