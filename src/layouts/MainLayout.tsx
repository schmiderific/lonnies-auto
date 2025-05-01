// layouts/MainLayout.tsx
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Services from "../components/Services";
import GoogleReviews from "../components/GoogleReviews";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <GoogleReviews />
      <Services />
      <Header />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
