import FooterComponent from "@/components/FooterComponent";
import HeroSection from "@/components/HeroSection";
import UserNavbarComponent from "@/components/NavbarComponent";

export default function UserLayout({ children }) {
  return (
    <main>
      {/* Will Change Later */}

      {children}
      <FooterComponent />
    </main>
  );
}
