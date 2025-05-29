import NavBarComponent from "@/components/NavbarComponent";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent";
// import "leaflet/dist/leaflet.css";
export default function UserLayout({ children }) {
  return (
    <main className="overflow-hidden">
      <NavBarComponent />
      {children}
      <FooterComponent />
    </main>
  );
}
