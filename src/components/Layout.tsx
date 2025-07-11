import { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-green-50">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
