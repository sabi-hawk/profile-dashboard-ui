import type { Metadata } from "next";
import "./global.css";
import { ReactQueryProvider } from "./providers";

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Modern dashboard interface built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
