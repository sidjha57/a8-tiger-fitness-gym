import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import Script from "next/script";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
      <Script
          defer
          src="https://kit.fontawesome.com/a7908c27f8.js"
          crossOrigin="anonymous"
          strategy="worker"
        />
    </main>
  );
}
