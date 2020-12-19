import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <Wrap>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/p/[test]" as={`/p/1`}>
          <a>
            dynamic routing
          </a>
        </Link>
    <Content>
      {children}
    </Content>
  </Wrap>
)

const Wrap = styled.div`
  &>a{
    text-decoration:none;
    color:#333333;
    margin-right:20px;
  }
`;

const Content = styled.div`
  margin-top:50px;
`;
export default Layout;