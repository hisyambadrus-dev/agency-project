import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FORMA® — Strategy, Design & Digital Experiences",
  description:
    "FORMA is an independent digital studio helping ambitious brands grow with strategy, design, and meaningful digital experiences.",
  applicationName: "FORMA Digital Studio",
  keywords: [
    "digital agency",
    "brand strategy",
    "visual identity",
    "web design",
    "Next.js",
  ],
  openGraph: {
    title: "FORMA® — Strategy, Design & Digital Experiences",
    description:
      "Clarity for the brand. Intention in the design. Momentum for what comes next.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
