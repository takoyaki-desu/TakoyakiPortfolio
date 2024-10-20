import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';
import Logo from '@/components/logo';
export const metadata: Metadata = {
  title: "Profile",
  description: "Profile Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
      <div className="text-center">
      <Logo />
      <main>{children}</main>
      </div>
      <Footer />
      </body>

    </html>
  );
}
