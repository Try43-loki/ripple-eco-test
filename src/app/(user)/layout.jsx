import NavBarComponent from "@/components/NavbarComponent";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent";
// import "leaflet/dist/leaflet.css";
export default function UserLayout({ children }) {
  return (
    <main>
      {/* <NavBarComponent /> */}
      {children}
      {/* <FooterComponent /> */}
    </main>
  );
}
