// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.scss";
import styles from "./layout.module.scss";
import Header from "../components/header/header"
import Footer from "../components/footer/footer"


export const metadata: Metadata = {
  title: "Viktor | Front-end Developer",
  description: "Portfolio of Viktor, a self-taught front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          {/* <SocialSidebar /> */}
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}