import { MdOutlineStickyNote2, MdDownload } from 'react-icons/md';

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4 bg-blue-500 text-white shadow-lg">
      <div className="flex gap-3 items-center">
        <MdOutlineStickyNote2 size={50} />
        <h1 className="font-bold text-3xl">OdinCV</h1>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="text-white border border-white-600 p-3 rounded-xl"
          onClick={() => window.print()}
        >
          <div className="flex gap-2 items-center">
            Download PDF <MdDownload size={20} />
          </div>
        </button>
      </div>
    </header>
  );
}
