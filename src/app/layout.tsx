"use client";

import "../globals.css";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import GitHubIcon from "../assets/Icons/GithubIcon";
import MediumIcon from "../assets/Icons/MediumIcon";
import DiscordIcon from "../assets/Icons/DiscordIcon";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <html lang="en">
      <body className="relative" style={{ fontFamily: "Fira Code, monospace" }}>
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
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
