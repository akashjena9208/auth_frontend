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
