import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Wrap>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </Wrap>
)

const Wrap = styled.div`
    border: 1px solid #b4b2b2;
    padding:20px;
`;

export default Layout;