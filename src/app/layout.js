import Header from "@/component/Header/Header";
import "./globals.css";
import Footer from "@/component/Footer/Footer";

export const metadata = {
  title: "Smachna Brusketka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
