export default function GeneralInfoPreview({ firstName, lastName, title, email, phone }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {firstName} {lastName}
      </h1>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-3">
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <hr className="my-3 border-gray-300" />
    </div>
  );
}
