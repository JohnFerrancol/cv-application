export default function GeneralInfoPreview({ firstName, lastName, title, email, phone }) {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{title}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}
