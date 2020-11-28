import App, {Container} from 'next/app';
import { createGlobalStyle, ThemeProvider} from 'styled-components';
import { Provider } from "mobx-react";
import TestStore from '../store/testStore';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
    colors: {
        primary: "#0070f3"
    }
}

const store = new TestStore();
export default class MyApp extends App{
    render(){
        const { Component, pageProps } = this.props;
        return(
        <>
        <Provider testStore={store}>
            <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
        </Provider>
        </>
    )
    }
}