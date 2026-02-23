import reactLogo from '../../assets/react.svg';

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4 bg-blue-500 text-white shadow-lg">
      <div className="flex gap-3 items-center">
        <img src={reactLogo} width={50} height={50} alt="React logo" />
        <h1 className="font-bold text-3xl">OdinCV</h1>
      </div>
      <div className="flex gap-3">
        <button type="button" className="text-white border border-white-600 p-2 rounded-md">
          Download PDF
        </button>
      </div>
    </header>
  );
}
