import { Footer, NavBar } from "@/components";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <NavBar />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
