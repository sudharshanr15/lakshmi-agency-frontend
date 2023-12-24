import { Inter } from "next/font/google";
import TanstackProvider from "@/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TanstackProvider>{children}</TanstackProvider> */}
        {children}
      </body>
    </html>
  );
}
