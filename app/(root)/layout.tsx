import Navbar from "@/components/Navbar";

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