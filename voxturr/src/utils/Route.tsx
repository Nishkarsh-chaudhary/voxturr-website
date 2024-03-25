"use client";
import React, { createContext, useEffect, useState } from "react";

import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import { IAppContextType } from "@/src/utils/type";

export const AppContext = createContext<IAppContextType>({
  isMobile: false,
  setIsMobile: () => {},
});

const Route = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <AppContext.Provider value={{ isMobile }}>
        <Header />
        {children}
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default Route;
