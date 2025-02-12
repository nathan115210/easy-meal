import { Metadata } from "next";

import Navbar from "@/components/Navbar";
import { getMetadata } from "@/lib/getMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return await getMetadata();
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
