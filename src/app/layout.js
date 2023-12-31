"use client";
import { Inter } from "next/font/google";
// import TanstackProvider from "@/providers/TanstackProvider";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TanstackProvider>{children}</TanstackProvider> */}
        <Provider store={store()}>{children}</Provider>
      </body>
    </html>
  );
}
