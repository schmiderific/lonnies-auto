// layouts/MainLayout.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 bg-[url('/dark-wall.png')] bg-repeat">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      </div>
    </>
  );
}
