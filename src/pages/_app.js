import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export function reportWebVitals(metric) {
  console.log(metric)
}

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
      <Analytics />
    </main>
  );
}
