import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";
import GitHubIcon from "../assests/Icons/GithubIcon";
import MediumIcon from "../assests/Icons/MediumIcon";
import DiscordIcon from "../assests/Icons/DiscordIcon";

export const metadata: Metadata = {
  title: "David Gusenga",
  description: "David's portfolio",
};

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${firaCode.className}`}>
      <div className="hidden absolute sm:flex flex-col gap-2 items-center px-2">
          <div className="w-0.5 h-32 bg-gray"></div>
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
        {children}
      </body>
    </html>
  );
}
