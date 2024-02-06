import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

function Header() {
  return (
    <div className=" container flex justify-between items-center py-8">
      <Link href="#" className="flex gap-2 items-center">
        <Image src="/images/logo.png" alt="Logo" width={20} height={20} />
        <span>David</span>
      </Link>
      <div className="flex gap-4">
        <NavLink exact href="/"><span className="text-primary">#</span>home</NavLink>
        {/* <Link  className={router.pathname === '/' ? '': 'text-gray'} href="/"><span className="text-primary">#</span>home</Link> */}
        <NavLink exact href="/works"><span className="text-primary">#</span>works</NavLink>
        <NavLink exact href="/about-me"><span className="text-primary">#</span>about-me</NavLink>
        <NavLink exact href="/contacts"><span className="text-primary">#</span>contacts</NavLink>
        <select name="lang" id="">
            <option value="english">EN</option>
            <option value="french">FR</option>
            <option value="german">GR</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
