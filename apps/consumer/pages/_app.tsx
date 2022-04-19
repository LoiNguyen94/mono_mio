import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { wrapper } from '@monorepo/function-shares';

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>Welcome to consumer!</title>
      </Head>
      <main className="app">
        <AnyComponent {...pageProps} />
      </main>
    </>
  );
}

// export default App;
export default wrapper.withRedux(App);
