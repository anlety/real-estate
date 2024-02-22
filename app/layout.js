import { Inter } from "next/font/google";
import "@/assets/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real-estate",
  description: "Find your dream property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
