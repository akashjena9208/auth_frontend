// // import useAuth from "@/auth/store";
// // import { Navigate, Outlet } from "react-router";

// // function Userlayout() {
// //   const checkLogin = useAuth((state) => state.checkLogin);

// //   if (checkLogin())
// //     return (
// //       <div>
// //         <Outlet />
// //       </div>
// //     );
// //   else return <Navigate to={"/login"} />;
// // }

// // export default Userlayout;
// import { Outlet, NavLink, useLocation, Navigate } from "react-router";
// import { Shield, LayoutDashboard, User, LogOut } from "lucide-react";
// import useAuth from "@/auth/store";
// import { motion } from "framer-motion";

// function Userlayout() {
//   const checkLogin = useAuth((s) => s.checkLogin);
//   const logout = useAuth((s) => s.logout);
//   const location = useLocation();

//   if (!checkLogin()) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return (
//     <div className="relative flex min-h-screen bg-[#070b12] text-white overflow-hidden">

//       {/* 🌌 Background Effects */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/30 blur-[160px] rounded-full" />
//         <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[160px] rounded-full" />
//         <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] [background-size:70px_70px]" />
//       </div>

//       {/* 🧊 Sidebar */}
//       <aside className="w-72 bg-white/5 backdrop-blur-2xl border-r border-cyan-400/10 p-6 flex flex-col justify-between shadow-[0_0_60px_-15px_rgba(0,255,255,0.2)]">

//         <div>
//           <h2 className="text-xl font-bold text-cyan-400 flex items-center gap-2 mb-12">
//             <Shield className="w-6 h-6" /> SecureAuth
//           </h2>

//           <nav className="space-y-4">
//             <NavLink
//               to="/dashboard"
//               className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 transition"
//             >
//               <LayoutDashboard className="w-5 h-5" /> Dashboard
//             </NavLink>

//             <NavLink
//               to="/profile"
//               className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 transition"
//             >
//               <User className="w-5 h-5" /> Profile
//             </NavLink>
//           </nav>
//         </div>

//         <button
//           onClick={logout}
//           className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
//         >
//           <LogOut className="w-5 h-5" /> Logout
//         </button>
//       </aside>

//       {/* 🧠 Main Panel */}
//       <main className="flex-1 relative p-10 overflow-y-auto">

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Outlet />
//         </motion.div>

//       </main>
//     </div>
//   );
// }

// export default Userlayout;
import useAuth from "@/auth/store";
import { Navigate, Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";

function Userlayout() {
  const checkLogin = useAuth((state) => state.checkLogin);
  const location = useLocation();

  if (!checkLogin()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="relative min-h-screen bg-[#070b12] text-white overflow-hidden">

      {/* Global Neon Environment */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Floating light */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Userlayout;
