import { Metadata } from "next";
import TitleHolder from "../../components/TitleHolder";

export const metadata: Metadata = {
  title: "David Gusenga | Projects",
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
        <TitleHolder title="Projects" subtitle="List of my projects" />
      </div>
      {children}
    </>
  );
}
