import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jonas Franke",
  description: "Offizielle Webseite von Jonas Franke",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
