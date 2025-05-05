// layouts/MainLayout.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
// import GoogleReviews from "../components/GoogleReviews";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* <GoogleReviews /> */}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
