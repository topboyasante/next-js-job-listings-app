import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}

export default Layout;
