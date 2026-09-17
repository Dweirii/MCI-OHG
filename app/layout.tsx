import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Lato is the typeface on MCI's business card and company profile.
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "MCI — Design and Implementation",
  description:
    "We shape ideas into spaces people can feel. Architecture, interiors, landscape, engineering, and execution in one connected process.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lato.variable}>
      <body>{children}</body>
    </html>
  );
}
