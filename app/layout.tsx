import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Self-hosted via @fontsource (no runtime/build-time fetch to Google Fonts required).
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Giorgi Zoidze — Full-Stack Developer",
    template: "%s · Giorgi Zoidze",
  },
  description:
    "Full-stack developer building React/TypeScript interfaces on top of Oracle PL/SQL and Node services. Profile, experience and project case studies.",
};

// Applied before paint so the user's saved theme choice never flashes the wrong theme.
const themeInitScript = `
(function(){
  try{
    var saved = localStorage.getItem('gz-theme');
    if(saved === 'light' || saved === 'dark'){
      document.documentElement.setAttribute('data-theme', saved);
    }
  }catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <div className="crop tl" />
        <div className="crop tr" />
        <div className="crop bl" />
        <div className="crop br" />
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
