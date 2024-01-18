import Link from "next/link";
import DiscordIcon from "../../../assests/Icons/DiscordIcon";
import GitHubIcon from "../../../assests/Icons/GithubIcon";
import Image from "next/image";
import MediumIcon from "../../../assests/Icons/MediumIcon";

function Footer() {
  return (
    <footer className="border-t-2 border-gray py-8">
      <div className="container flex flex-col xs:flex-row justify-between gap-10 text-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1"><Image src="/images/logo.png" alt="logo" width={13} height={13} />
            <span>David</span></div>
            <Link href="#" className="text-gray">gsngdavid@gmail.com</Link>
          </div>
          <p>Web designer and front-end developer</p>
        </div>
        <div className="flex gap-4 xs:block xs:space-y-4">
          <h3 className="text-lg xs:text-center">Media<span className="xs:hidden">:</span></h3>
          <div className="flex items-center gap-2">
            <Link href="#">
              <GitHubIcon fill="#ABB2BF" className="w-4 h-4" />
            </Link>
            <Link href="#">
              <MediumIcon fill="#ABB2BF" className="w-4 h-4" />
            </Link>
            <Link href="#">
              <DiscordIcon fill="#ABB2BF" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-gray text-sm mt-4">
        © Copyright {new Date().getFullYear()}. Made by gsngdavid
      </p>
    </footer>
  );
}

export default Footer;
