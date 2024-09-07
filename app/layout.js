import { yekan } from "@/utils/font";
import Layout from "@/components/layout/Layout";

import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک",
  description: "این سایت برای خرید و فروش و اجاره مسکونی میباشد",
  icons:{icon:"./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
