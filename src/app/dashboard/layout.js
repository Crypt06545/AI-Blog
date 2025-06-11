"use client";

import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import "quill/dist/quill.snow.css";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

const DashboardLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <SignedIn>
        <div className="bg-white">
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <SidebarTrigger />
              <div className="p-10">{children}</div>
            </main>
          </SidebarProvider>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
};

export default DashboardLayout;
