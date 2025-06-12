import { Geist, Geist_Mono } from "next/font/google";
import { Gabarito } from "next/font/google";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";
import NavBarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import { auth } from "../auth";
import { getUserProfileAction } from "@/action/user-action";
import { redirect } from "next/navigation";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "RippleEco",
  icons: {
    icon: "/logo/EcoLogoPlant.png",
  },
  description:
    "RippleEco platform is to serve as a bridge between event organizers and participants. The platform enables users to easily browse and join volunteer eco-events, engage in meaningful discussions, and receive real-time alerts with the latest information on air quality and natural disasters.",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  console.log("session layout", session);

  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  );
}
