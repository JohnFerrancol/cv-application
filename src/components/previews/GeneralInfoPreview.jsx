import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

export default function GeneralInfoPreview({ firstName, lastName, title, email, phone }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {firstName} {lastName}
      </h1>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-4">
        <p className="flex gap-2 items-center">
          <MdEmail />
          {email}
        </p>
        <p className="flex gap-1 items-center">
          <FaPhone />
          {phone}
        </p>
      </div>
      <hr className="my-3 border-gray-300" />
    </div>
  );
}
