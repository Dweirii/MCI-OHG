import type { Metadata } from "next";
import { Geist, Inter, Mea_Culpa } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const meaCulpa = Mea_Culpa({
  variable: "--font-mea-culpa",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MCI — Design and Implementation",
  description:
    "We shape ideas into spaces people can feel. Architecture, interiors, landscape, engineering, and execution in one connected process.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${meaCulpa.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
