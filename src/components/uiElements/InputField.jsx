export default function InputField({ id, value, label, onChange, textarea = false }) {
  return (
    <div className="flex flex-col gap-1">
      <label id={label} htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className="bg-white w-full p-2 border border-gray-300 rounded-lg shadow-xs text-gray-500 focus:outline-none focus:border-gray-500 focus:border-2"
          id={id}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="bg-white w-full p-2 border border-gray-300 rounded-lg shadow-xs text-gray-500 focus:outline-none focus:border-gray-500 focus:border-2"
          id={id}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
