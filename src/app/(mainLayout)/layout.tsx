import Footer from "@/componets/ui/Footer";
import Navbar from "@/componets/ui/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default layout;
