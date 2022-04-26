import React from "react";
import styled from "@emotion/styled";

type LayoutProps = {
  children: React.ReactElement | React.ReactNode | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
