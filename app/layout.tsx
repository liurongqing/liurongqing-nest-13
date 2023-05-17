import { Nunito } from "next/font/google";
import { Header, Layout, Content } from "@/components";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "RongqingLiu's Blog",
  description: "liurongqing, rongqing, RongqingLiu's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Layout>
          <Header />
          <Content>{children}</Content>
        </Layout>
      </body>
    </html>
  );
}
