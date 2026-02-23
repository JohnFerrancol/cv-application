export default function ExperiencePreview({ experienceList }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Experience</h1>
      <hr className="my-2 border-gray-300" />

      <div className="flex flex-col gap-5">
        {experienceList.map((experience) => (
          <div key={experience.id}>
            <div className="flex justify-between">
              <h1 className="font-semibold text-lg">
                {experience.position} | {experience.company}
              </h1>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <p>{experience.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
