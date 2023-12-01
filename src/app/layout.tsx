import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "@/scss/global.scss";
import NavigationComponent from "@/components/top-navigation.component";
import LowerNavigationComponent from "@/components/lower-navigation.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluntech Technical Test",
  description: "Prueba técnica para la empresa soluntech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} authorized-layout`}>
        <div className="authorized-layout__phone-container">
          <Image
            className="authorized-layout__top-bar"
            src="/assets/top-bar.jpg"
            width={500}
            height={59}
            alt="phone top bar"
          />

          <NavigationComponent />

          {children}

          <LowerNavigationComponent />
        </div>
      </body>
    </html>
  );
}
