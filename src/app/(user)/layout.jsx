import NavBarComponent from "@/components/NavbarComponent";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent";
export default function UserLayout({ children }) {
  return (
    <main className="overflow-hidden">
      <NavBarComponent />
      {children}
      <FooterComponent />
    </main>
  );
}
