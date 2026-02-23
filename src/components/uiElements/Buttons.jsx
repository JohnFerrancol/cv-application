function AddButton({ onClick }) {
  return (
    <button
      type="button"
      className="text-white font-medium text-lg bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-2xl py-3 hover:border-2 hover:border-gray-200"
      onClick={onClick}
    >
      Add +
    </button>
  );
}

export { AddButton };
