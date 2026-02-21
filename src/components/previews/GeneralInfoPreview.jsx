export default function GeneralInfoPreview({ firstName, lastName, title, email, phone }) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{title}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
