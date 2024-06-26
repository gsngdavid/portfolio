import { Metadata } from "next";
import TitleHolder from "../../components/TitleHolder";

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
    <>
      <div className="container">
      <TitleHolder title="About-me" subtitle="Who am I?" />
      </div>
      {children}
    </>
  );
}
