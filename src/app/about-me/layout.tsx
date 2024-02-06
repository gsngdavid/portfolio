import { Metadata } from "next";
import LinesLeaningIcon from "../../assets/Icons/LinesLeaning";

export const metadata: Metadata = {
  title: "David Gusenga | About me",
  description: "David's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="container">
        <div className="flex gap-1 items-center">
          <LinesLeaningIcon fill="peru" className="w-6 h-6" />
          <h1 className="text-2xl">About-me</h1>
        </div>
        <p className="text-sm">Who am I?</p>
      </div>
      {children}
    </div>
  );
}
