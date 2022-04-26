import React from "react";

type LayoutProps = {
  children: React.ReactElement | React.ReactNode | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
