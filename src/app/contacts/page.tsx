import Link from "next/link";
import EmailIcon from "../../assets/Icons/EmainIcon";
import UserIcon from "../../assets/Icons/UserIcon";
import ContactsSvg from "../../assets/svgs/ContactsSvg";
import GitHubIcon from "../../assets/Icons/GithubIcon";
import InstagramIcon from "../../assets/Icons/InstagramIcon";
import DiscordIcon from "../../assets/Icons/DiscordIcon";

export default function ContactsPage() {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-8 items mt-10">
        <form className="space-y-8">
          <p className="text-sm text-gray">
            If you have any inquiries or requests, feel free to reach out to me.
            I&#39;m always open to questions and happy to assist.
          </p>
          <div className="space-y-4">
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
          </div>
        </form>
        <div className="">
          <ContactsSvg className="w-full -mt-28" />
        </div>
      </div>

        <div className="flex items-start gap-3 my-10">
          <div className="w-fit min-w-64 border border-gray p-4">
            <h2 className="font-bold mb-3">Message me here</h2>
            <div className="flex flex-col gap-2 text-sm text-gray">
              <Link href="#" className="flex items-center gap-2">
                <DiscordIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <EmailIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid@gmail.com</span>
              </Link>
            </div>
          </div>
          <div className="w-fit min-w-64 border border-gray p-4">
            <h2 className="font-bold mb-3">All media</h2>
            <div className="flex flex-col gap-2 text-sm text-gray">
              <Link href="#" className="flex items-center gap-2">
                <InstagramIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <InstagramIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <InstagramIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid</span>
              </Link>
              <Link href="#" className="flex items-center gap-2">
                <InstagramIcon fill="#ABB2BF" className="w-5 h-5" />
                <span className="pb-1">gsngdavid</span>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
