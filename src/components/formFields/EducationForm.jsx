import InputField from '../uiElements/InputField';
import { AddButton } from '../uiElements/Buttons';

export default function EducationForm({ educationList, onChange, onClick }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {educationList.map((education) => (
          <div key={education.id}>
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
        ))}
      </div>
      <AddButton onClick={onClick} />
    </div>
  );
}
