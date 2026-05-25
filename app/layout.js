import { Space_Grotesk, Sora } from "next/font/google";

import "./globals.css";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "3D Developer Portfolio",
  description:
    "A Next.js and Three.js developer portfolio inspired by the original 3D portfolio project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-primary font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
