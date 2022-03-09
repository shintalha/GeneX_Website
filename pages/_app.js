import "../styles/globals.css";
import "../styles/basic.css";
import '../styles/logo.css';
import '../styles/ptext.css';
import '../styles/roadmap.css';
import '../styles/gallery.css';

import { StatusProvider } from "../context/statusContext";

function MyApp({ Component, pageProps }) {
  return (
    <StatusProvider>
      <Component {...pageProps} />
    </StatusProvider>
  );
}

export default MyApp;
