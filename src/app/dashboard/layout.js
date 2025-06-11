import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import 'quill/dist/quill.snow.css';
const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="p-10">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
