export default function Form({ children }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl flex flex-col gap-3 mx-5">
      {children}
    </div>
  );
}
