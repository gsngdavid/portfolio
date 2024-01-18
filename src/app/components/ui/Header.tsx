import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className=" container flex justify-between items-center py-8">
      <Link href="#" className="flex gap-2 items-center">
        <Image src="/images/logo.png" alt="Logo" width={20} height={20} />
        <span>David</span>
      </Link>
      <div className="flex gap-4">
        <Link href="#"><span className="text-primary">#</span>home</Link>
        <Link href="#" className="text-gray"><span className="text-primary">#</span>works</Link>
        <Link href="#" className="text-gray"><span className="text-primary">#</span>about-me</Link>
        <Link href="#" className="text-gray"><span className="text-primary">#</span>contacts</Link>
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
