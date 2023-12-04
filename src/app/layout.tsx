import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "@/scss/global.scss";
import NavigationComponent from "@/components/top-navigation.component";
import { ReduxProvider } from "@/state/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soluntech Technical Test",
  description: "Prueba técnica para la empresa soluntech",
};

interface Props {
  children: React.ReactNode
}

const RootLayout = (props: Props) => {
  return (
    <html lang="en">
      <body className={`${inter.className} authorized-layout`}>
        <ReduxProvider>
          <div className="authorized-layout__phone-container">
            <Image
              className="authorized-layout__top-bar"
              src="/static/top-bar.jpg"
              width={500}
              height={59}
              alt="phone top bar"
            />

            <NavigationComponent />

            {props.children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
