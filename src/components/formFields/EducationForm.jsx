import InputField from '../uiElements/InputField';
import { AddButton, DeleteButton } from '../uiElements/Buttons';

export default function EducationForm({ educationList, onChange, onAddClick, onDeleteClick }) {
  return (
    <div>
      <div className=" flex flex-col gap-5">
        {educationList.map((education) => (
          <div
            key={education.id}
            className="bg-gray-50 p-5 rounded-2xl shadow-xs border-2 border-gray-200 flex flex-col gap-1"
          >
            <DeleteButton onClick={onDeleteClick} buttonId={`educationList*${education.id}`} />
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
        <AddButton onClick={onAddClick} />
      </div>
    </div>
  );
}
