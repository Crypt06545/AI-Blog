import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "Dashboard - My App",
  description: "Your personalized dashboard area.",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
}
