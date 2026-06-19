// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.scss";
import styles from "./layout.module.scss";
import Header from "../components/header/header"


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
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          {/* <Footer /> will go here later */}
        </div>
      </body>
    </html>
  );
}