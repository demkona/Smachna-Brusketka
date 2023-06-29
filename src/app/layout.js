import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smachna Brusketka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="lazyOnload" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
