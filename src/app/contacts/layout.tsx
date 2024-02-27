import { Metadata } from "next";
import TitleHolder from "../../components/TitleHolder";

export const metadata: Metadata = {
  title: "David Gusenga | Contacts",
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
        <TitleHolder title="Contacts" subtitle="Who am I?" />
      </div>
      {children}
    </>
  );
}
