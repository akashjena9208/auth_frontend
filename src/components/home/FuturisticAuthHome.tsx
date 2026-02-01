// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { Shield, Lock, Sparkles, Fingerprint } from "lucide-react";
// import { useNavigate } from "react-router";
// import useAuth from "@/auth/store";

// export default function FuturisticAuthHome() {
//   const navigate = useNavigate();
//   const checkLogin = useAuth((s) => s.checkLogin);

//   const handleGetStarted = () => {
//     navigate(checkLogin() ? "/dashboard" : "/signup");
//   };

//   const handleLearnMore = () => {
//     document
//       .getElementById("features")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
//       {/* ================= BACKGROUND GLOW ================= */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-[140px] rounded-full" />
//         <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" />
//       </div>

//       {/* ================= HERO ================= */}
//       <section className="relative py-32 px-6 text-center flex flex-col items-center justify-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-5xl md:text-7xl font-extrabold tracking-tight"
//         >
//           A modern platform for secure 
//           <span className="block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//             Access...
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
//         >
//           A next-generation authentication platform engineered for security,
//           speed, and modern applications.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-12 flex gap-6"
//         >
//           {/* GET STARTED */}
//           <motion.div whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               onClick={handleGetStarted}
//               className="rounded-2xl text-lg px-8 shadow-lg shadow-primary/40 hover:shadow-primary/70 transition"
//             >
//               Get Started
//             </Button>
//           </motion.div>

//           {/* LEARN MORE */}
//           <Button
//             size="lg"
//             variant="outline"
//             onClick={handleLearnMore}
//             className="rounded-2xl text-lg px-8 border-border hover:bg-primary/10 transition"
//           >
//             Learn More
//           </Button>
//         </motion.div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section id="features" className="py-28 px-6">
//         <h2 className="text-4xl font-bold text-center mb-16">
//           Powerful Features
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {
//           // [
//           //   {
//           //     title: "Biometric Login",
//           //     desc: "Advanced fingerprint and identity-based authentication.",
//           //     icon: <Fingerprint className="w-10 h-10" />,
//           //   },
//           //   {
//           //     title: "Multi-Layer Encryption",
//           //     desc: "Industry-grade encryption protecting every request.",
//           //     icon: <Lock className="w-10 h-10" />,
//           //   },
//           //   {
//           //     title: "Smart Access Control",
//           //     desc: "AI-powered security that adapts in real time.",
//           //     icon: <Shield className="w-10 h-10" />,
//           //   },
//           // ]
//           [
//             {
//               title: "Secure Authentication",
//               desc: "Robust login and identity verification for modern applications.",
//               icon: <Lock className="w-10 h-10" />,
//             },
//             {
//               title: "Role-Based Access Control",
//               desc: "Fine-grained permissions to protect sensitive resources.",
//               icon: <Shield className="w-10 h-10" />,
//             },
//             {
//               title: "Session Management",
//               desc: "Secure sessions with token handling and protection.",
//               icon: <Fingerprint className="w-10 h-10" />,
//             },
//           ]
//           .map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="relative bg-card/60 backdrop-blur-xl border-border rounded-3xl shadow-xl hover:shadow-primary/30 transition group">
//                 <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
//                 <CardContent className="relative p-8 text-center">
//                   <div className="flex justify-center mb-6 text-primary">
//                     {f.icon}
//                   </div>
//                   <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
//                   <p className="text-muted-foreground">{f.desc}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-32 px-6 text-center bg-card/40 backdrop-blur-xl border-t border-border">
//         <h2 className="text-4xl font-bold">
//           Start Securing Your App Today
//         </h2>

//         <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
//           Join developers worldwide building secure, scalable applications.
//         </p>

//         <motion.div whileTap={{ scale: 0.95 }}>
//           <Button
//             size="lg"
//             onClick={handleGetStarted}
//             className="mt-10 px-10 text-lg rounded-2xl shadow-xl shadow-primary/40 hover:shadow-primary/70 transition"
//           >
//             Create Account
//           </Button>
//         </motion.div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-28 px-6">
//         <h2 className="text-4xl font-bold text-center mb-14">
//           Why Choose Our Auth Platform?
//         </h2>

//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground">
//           {[
//             "AI-Driven Security",
//             "Lightning-Fast Performance",
//             "Developer-Friendly API",
//             "Highly Customizable",
//           ].map((title, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
//                 <Sparkles className="w-6 h-6 text-primary" />
//                 {title}
//               </h3>
//               <p>
//                 Built for modern security needs while staying flexible,
//                 fast, and developer-friendly.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Lock, Sparkles, Fingerprint } from "lucide-react";
import { useNavigate } from "react-router";
import useAuth from "@/auth/store";

export default function FuturisticAuthHome() {
  const navigate = useNavigate();
  const checkLogin = useAuth((s) => s.checkLogin);

  const handleGetStarted = () => {
    navigate(checkLogin() ? "/dashboard" : "/signup");
  };

  const handleLearnMore = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative pt-20 pb-16 sm:py-32 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          A modern platform for secure
          <span className="block bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Access...
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground"
        >
          A next-generation authentication platform engineered for security,
          speed, and modern applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          {/* GET STARTED */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="rounded-2xl text-lg px-8 shadow-lg shadow-primary/40 hover:shadow-primary/70 transition"
            >
              Get Started
            </Button>
          </motion.div>

          {/* LEARN MORE */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleLearnMore}
            className="rounded-2xl text-lg px-8 border-border hover:bg-primary/10 transition"
          >
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 sm:py-28 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Secure Authentication",
              desc: "Robust login and identity verification for modern applications.",
              icon: <Lock className="w-10 h-10" />,
            },
            {
              title: "Role-Based Access Control",
              desc: "Fine-grained permissions to protect sensitive resources.",
              icon: <Shield className="w-10 h-10" />,
            },
            {
              title: "Session Management",
              desc: "Secure sessions with token handling and protection.",
              icon: <Fingerprint className="w-10 h-10" />,
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-card/60 backdrop-blur-xl border-border rounded-3xl shadow-xl hover:shadow-primary/30 transition group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <CardContent className="relative p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 text-center bg-card/40 backdrop-blur-xl border-t border-border">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Start Securing Your App Today
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
          Join developers worldwide building secure, scalable applications.
        </p>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            size="lg"
            onClick={handleGetStarted}
            className="mt-8 sm:mt-10 px-10 text-lg rounded-2xl shadow-xl shadow-primary/40 hover:shadow-primary/70 transition"
          >
            Create Account
          </Button>
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 sm:py-28 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-14">
          Why Choose Our Auth Platform?
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 text-muted-foreground">
          {[
            "AI-Driven Security",
            "Lightning-Fast Performance",
            "Developer-Friendly API",
            "Highly Customizable",
          ].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                {title}
              </h3>
              <p>
                Built for modern security needs while staying flexible,
                fast, and developer-friendly.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
