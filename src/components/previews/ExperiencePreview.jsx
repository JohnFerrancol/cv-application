export default function ExperiencePreview({ experienceList }) {
  return (
    <>
      {experienceList.map((experience) => (
        <div key={experience.id}>
          <h1>{experience.position}</h1>
          <h2>{experience.company}</h2>
          <h2>
            {experience.startDate} - {experience.endDate}
          </h2>
        </div>
      ))}
    </>
  );
}
