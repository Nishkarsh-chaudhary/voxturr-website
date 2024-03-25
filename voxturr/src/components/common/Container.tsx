import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl px-4 mx-auto z-10">{children}</div>;
};

export default Container;
