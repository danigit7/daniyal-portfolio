import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBaseUrl(window.location.origin); // e.g., https://example.com
    }
    if (baseUrl == /*'http://localhost:3000'*/ 'https://daniyal.vercel.app')
    axios
      .get(`${baseUrl}/api/hello`)
      .then((response) => {
        // Handle the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data:", error);
      });
  }, [baseUrl]);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
      <Analytics />
    </>
  );
}
