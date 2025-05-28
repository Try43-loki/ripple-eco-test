import NavBarComponent from "@/components/NavbarComponent";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent";
export default function UserLayout({ children }) {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="absolute top-0 left-0 w-full z-10">
          <NavBarComponent /> 
        </div>
      </section>
      {children}
      <FooterComponent />
    </main>
  );
}
