// import React from "react";

// function OAuthFailure() {
//   return (
//     <div className="p-10 flex justify-center items-center">
//       <h1>Login failed!!</h1>
//     </div>
//   );
// }

// export default OAuthFailure;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function OAuthFailure() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background px-4 overflow-hidden">
      {/* Futuristic background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl p-8 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center mb-6"
        >
          <XCircle className="w-16 h-16 text-red-500" />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Authentication Failed
        </h1>

        {/* Description */}
        <p className="text-muted-foreground mb-8">
          We couldn’t sign you in using the selected provider.
          This may happen due to a cancelled login, network issue,
          or provider restrictions.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="w-full rounded-2xl"
            onClick={() => navigate("/login")}
          >
            Try Again
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-2xl"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </div>

        {/* Help text */}
        <p className="mt-6 text-xs text-muted-foreground">
          If the problem continues, please contact support.
        </p>
      </motion.div>
    </div>
  );
}
