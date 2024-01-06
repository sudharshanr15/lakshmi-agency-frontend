"use client";
// import TanstackProvider from "@/providers/TanstackProvider";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { Poppins } from "next/font/google";
import { persistStore } from "redux-persist";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

persistStore(store());

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <TanstackProvider>{children}</TanstackProvider> */}
        <Provider store={store()}>{children}</Provider>
      </body>
    </html>
  );
}
