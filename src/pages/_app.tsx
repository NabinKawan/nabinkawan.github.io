import '@app/assets/css/globals.css';
import Layout from '@app/layouts/_layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
