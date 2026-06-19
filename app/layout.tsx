import type { Metadata } from "next";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Patrick [Nachname]",
    template: "%s | Patrick [Nachname]",
  },
  description:
    "Recommendation systems, product development and cultural discovery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}