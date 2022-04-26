import React from "react";
import styled from "@emotion/styled";

type LayoutProps = {
  children: React.ReactElement | React.ReactNode | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #181818;
`;
