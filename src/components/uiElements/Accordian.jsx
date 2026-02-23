import { IoChevronUp, IoChevronDown } from 'react-icons/io5';

export default function Accordian({ title, icon: Icon, children, isActive, onShow }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl flex flex-col gap-3 mx-5">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center mb-3">
          <Icon size={35} />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>

        <button onClick={onShow}>{isActive ? <IoChevronUp /> : <IoChevronDown />}</button>
      </div>

      {isActive && <div>{children}</div>}
    </div>
  );
}
