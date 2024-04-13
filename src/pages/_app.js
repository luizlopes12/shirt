import "@/styles/globals.css";
import Head from "next/head"; // Corrigindo a importação do componente Head
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shirt.</title>
        <link rel='icon' href='/img/favicon.svg' /> {/* Corrigindo o caminho do favicon */}
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
