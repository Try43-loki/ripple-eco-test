import NavBarComponent from "@/components/NavbarComponent";
import "../globals.css";
import FooterComponent from "@/components/FooterComponent";
import { getUserProfileAction } from "@/action/user-action";
export default async function UserLayout({ children }) {
  const profile = await getUserProfileAction();
  return (
    <main className="overflow-hidden">
      <NavBarComponent profile={profile} />
      {children}
      <FooterComponent />
    </main>
  );
}
