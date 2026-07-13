import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "./components/ScrollAnimations";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מעיין | שיעורי מתמטיקה · קבוצתיים ופרטניים",
  description:
    "נפתחה ההרשמה לשנת הלימודים הקרובה. שיעורי מתמטיקה קבוצתיים ופרטניים במרכז תל אביב.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable}`}>
      <body className="font-[family-name:var(--font-assistant)] antialiased">
        {children}
        <ScrollAnimations />
      </body>
    </html>
  );
}
