import InputField from '../uiElements/InputField';

export default function GeneralInfoForm({ firstName, lastName, title, email, phone, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-15">
        <InputField id="firstName" value={firstName} label="First Name" onChange={onChange} />
        <InputField id="lastName" value={lastName} label="Last Name" onChange={onChange} />
      </div>
      <InputField id="title" value={title} label="Job Title" onChange={onChange} />
      <div className="grid grid-cols-2 gap-15">
        <InputField id="email" value={email} label="Email" onChange={onChange} />
        <InputField id="phone" value={phone} label="Phone" onChange={onChange} />
      </div>
    </div>
  );
}
