import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Audio Workshop Indonesia — Premium Car Audio",
  description:
    "Indonesia's premier authorized distributor of premium car audio systems. Focal, Alpine, Audison, Hertz and more.",
  metadataBase: new URL("https://audioworkshop.co.id"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
