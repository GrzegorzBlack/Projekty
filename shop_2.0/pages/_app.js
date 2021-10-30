import Providers from "../components/Providers";
import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
