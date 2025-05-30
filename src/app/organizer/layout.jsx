import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import HeaderComponent from "./_component/HeaderComponent";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="mt-3">
      <AppSidebar />
      <main className="w-full h-screen">
        <section className="flex items-center justify-start w-full ">
          <SidebarTrigger className="opacity-0" />
          <section className="px-3 w-full pr-10">
            <HeaderComponent />
            {children}
          </section>
        </section>
      </main>
    </SidebarProvider>
  );
}
