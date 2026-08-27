import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAgriLab | Agricultural Living Labs",
  description:
    "Connecting regenerative agriculture research, Living Labs and evidence across Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}