export default function InputField({ id, value, label, onChange }) {
  return (
    <div className="flex gap-4">
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full p-2 border-2 border-gray"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
