function AddButton({ onClick }) {
  return (
    <button
      type="button"
      className="text-body bg-success box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
      onClick={onClick}
    >
      Add +
    </button>
  );
}

export { AddButton };
