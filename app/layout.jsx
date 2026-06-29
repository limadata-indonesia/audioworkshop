import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Nav from "../components/Nav";
import Breadcrumbs from "../components/Breadcrumbs";
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
        <Breadcrumbs />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
