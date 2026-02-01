// import React from "react";
// import { Outlet } from "react-router";
// import Navbar from "../components/Navbar";
// import { Toaster } from "react-hot-toast";
// function RootLayout() {
//   return (
//     <div>
//       <Toaster />
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// }

// export default RootLayout;
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Toaster />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
