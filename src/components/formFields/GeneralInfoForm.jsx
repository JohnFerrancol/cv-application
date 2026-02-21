import InputField from '../uiElements/InputField';

export default function GeneralInfoForm({ firstName, lastName, title, email, phone, onChange }) {
  return (
    <div>
      <InputField id="firstName" value={firstName} label="First Name" onChange={onChange} />
      <InputField id="lastName" value={lastName} label="Last Name" onChange={onChange} />
      <InputField id="title" value={title} label="Job Title" onChange={onChange} />
      <InputField id="email" value={email} label="Email" onChange={onChange} />
      <InputField id="phone" value={phone} label="Phone" onChange={onChange} />
    </div>
  );
}
