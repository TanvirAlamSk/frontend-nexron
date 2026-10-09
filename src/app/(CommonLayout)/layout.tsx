import Footer from "@/components/ui/Footer";
import Navber from "@/components/ui/Navber";
import React from "react";

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="">
      <Navber></Navber>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
