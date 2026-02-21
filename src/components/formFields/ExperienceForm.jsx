import InputField from '../uiElements/InputField';
import { AddButton } from '../uiElements/Buttons';

export default function ExperienceForm({ experienceList, onChange, onClick }) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {experienceList.map((experience) => (
          <div key={experience.id}>
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
        ))}
      </div>
      <AddButton onClick={onClick} />
    </div>
  );
}
