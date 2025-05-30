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
          <section className="flex justify-center items-center flex-col gap-y-5 w-full pl-4 pr-8">
            <HeaderComponent className="w-full" />
            {children}
          </section>
        </section>
      </main>
    </SidebarProvider>
  );
}
