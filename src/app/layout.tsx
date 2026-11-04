import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayanyiola Enoch | Software Engineer — Frontend Web & Mobile Apps",
  description:
    "Portfolio of Ayanyiola Enoch, Computer Science graduate (LAUTECH) and Software Engineer specializing in React Native, Expo, Next.js, and TypeScript. Builder on Koyo, Jaraaf, DuvicDrop, Duvic Rider, Ceproam, LearnVault, and G&G Restaurant.",
  keywords: [
    "Ayanyiola Enoch",
    "Software Engineer Nigeria",
    "React Native Developer",
    "Frontend Web Developer",
    "Koyo App",
    "Jaraaf",
    "DuvicDrop",
    "Duvic Rider",
    "Ceproam",
    "LearnVault",
    "LAUTECH Computer Science",
  ],
  authors: [{ name: "Ayanyiola Enoch", url: "https://github.com/Ayanyiola-Enoch" }],
  openGraph: {
    title: "Ayanyiola Enoch — Software Engineer (Frontend Web & Mobile)",
    description:
      "Architecting tactile mobile applications and high-clarity web platforms with React Native, Expo, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={satoshi.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
