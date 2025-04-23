// layouts/MainLayout.tsx
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
