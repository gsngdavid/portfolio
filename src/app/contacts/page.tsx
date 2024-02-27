import EmailIcon from "../../assets/Icons/EmainIcon";
import UserIcon from "../../assets/Icons/UserIcon";
import ContactsSvg from "../../assets/svgs/ContactsSvg";

export default function ContactsPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-8 items-center">
        <form className="space-y-4">
          <div className="flex items-center gap-3 rounded-xl bg-[rgba(171,178,191,0.3)] py-2 px-3">
            <UserIcon fill="peru" className="w-4" />
            <input
              className="w-full outline-none bg-transparent"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-[rgba(171,178,191,0.3)] py-2 px-3">
            <EmailIcon fill="peru" className="w-4 h-4" />
            <input
              className="w-full outline-none bg-transparent"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-[rgba(171,178,191,0.3)] py-2 px-3">
            <textarea
              className="w-full outline-none bg-transparent"
              name=""
              id=""
              rows={7}
              placeholder="Message"
            ></textarea>
          </div>
        </form>
        <div>
          <ContactsSvg className="w-full" />
        </div>
      </div>
    </div>
  );
}
