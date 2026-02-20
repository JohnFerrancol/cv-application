export default function GeneralInfoForm({ firstName, lastName, title, email, phone, onChange }) {
  return (
    <>
      <div className="flex gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          className="border-2 border-gray"
          id="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="border-2 border-gray"
          id="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="title">Job Title</label>
        <input className="border-2 border-gray" id="title" value={title} onChange={onChange} />
      </div>
      <div className="flex gap-2">
        <label htmlFor="email">Last Name</label>
        <input className="border-2 border-gray" id="email" value={email} onChange={onChange} />
      </div>
      <div className="flex gap-2">
        <label htmlFor="phone">Last Name</label>
        <input className="border-2 border-gray" id="phone" value={phone} onChange={onChange} />
      </div>
    </>
  );
}
