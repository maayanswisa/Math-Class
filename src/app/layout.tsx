import type { Metadata } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";

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
  title: "מעיין | שיעורי מתמטיקה בקבוצות קטנות במרכז תל אביב",
  description:
    "מעיין — מורה פרטית למתמטיקה עם חמש שנות ניסיון, בוגרת מדעי המחשב. הרשמה לשנת הלימודים הקרובה: קבוצות לפי כיתות ורמות, במרכז תל אביב.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable}`}>
      <body className="font-[family-name:var(--font-assistant)] antialiased">{children}</body>
    </html>
  );
}
