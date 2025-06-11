// src/app/(main)/layout.js
import "../globals.css"; // Correct path
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "My Awesome Website",
  description: "Welcome to my website's main pages!",
};

export default function MainLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <div className="antialiased relative ">
        <div className="pointer-events-none absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Main Content */}
        <Navbar />
        <div className="">{children}</div>{" "}
        {/* Keep this div's height for content */}
        <Footer />
      </div>
    </ClerkProvider>
  );
}
