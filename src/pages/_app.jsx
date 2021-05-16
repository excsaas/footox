import { ThemeProvider } from 'styled-components';

import { GlobalStyle, darkTheme } from '../utils/themes';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
