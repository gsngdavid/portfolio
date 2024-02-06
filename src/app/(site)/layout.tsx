import { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Gusenga",
  description: "David's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
