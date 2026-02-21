export default function EducationPreview({ educationList }) {
  return (
    <>
      {educationList.map((education) => (
        <div key={education.id}>
          <h1>{education.school}</h1>
          <h2>{education.program}</h2>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </div>
      ))}
    </>
  );
}
