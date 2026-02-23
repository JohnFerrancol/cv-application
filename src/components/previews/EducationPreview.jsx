export default function EducationPreview({ educationList }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Education</h1>
      <hr className="my-2 border-gray-300" />

      <div className="flex flex-col gap-5">
        {educationList.map((education) => (
          <div key={education.id}>
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">{education.school}</h1>
              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>
            <h2>{education.program}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
