import Layout from '~components/Layout';
import TabBar from '~components/TabBar';
import Welcome from '~components/Welcome';
import '../styles/globals.css';
import '../styles/sakura.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'yet-another-react-lightbox/styles.css';
import 'aos/dist/aos.css';
import Music from '~components/Music';
import AppContextProvider from '~context/AppContext';

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <div className="sakura-wrapper fixed h-screen w-full z-50 overflow-x-hidden pointer-events-none" />
      <Layout>
        <Component {...pageProps} />
        <TabBar />
        <Welcome />
      </Layout>
      <Music />
    </AppContextProvider>
  );
}

export default MyApp;
