// // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { BarChart3, User, ShieldCheck, Activity } from "lucide-react";
// // // // // // import { getCurrentUser } from "@/services/AuthService";
// // // // // // import useAuth from "@/auth/store";
// // // // // // import { useState } from "react";
// // // // // // import type UserT from "@/models/User";
// // // // // // import toast from "react-hot-toast";

// // // // // // function Userhome() {
// // // // // //   const user = useAuth((state) => state.user);
// // // // // //   const [user1, setUser1] = useState<UserT | null>(null);

// // // // // //   const getUserData = async () => {
// // // // // //     try {
// // // // // //       const user1 = await getCurrentUser(user?.email);

// // // // // //       setUser1(user1);
// // // // // //       toast.success("you are able to access secured apis")
// // // // // //     } catch (error) {
// // // // // //       console.log(error);
// // // // // //       toast.error("error in getting data");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-background text-foreground p-6">
// // // // // //       {/* Page Title */}
// // // // // //       <motion.h1
// // // // // //         initial={{ opacity: 0, y: 10 }}
// // // // // //         animate={{ opacity: 1, y: 0 }}
// // // // // //         transition={{ duration: 0.6 }}
// // // // // //         className="text-4xl font-bold mb-8"
// // // // // //       >
// // // // // //         Dashboard Overview
// // // // // //       </motion.h1>

// // // // // //       {/* Stats Grid */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
// // // // // //         {[
// // // // // //           {
// // // // // //             title: "Total Logins",
// // // // // //             value: "1,245",
// // // // // //             icon: <User className="w-8 h-8 text-primary" />,
// // // // // //           },
// // // // // //           {
// // // // // //             title: "Security Score",
// // // // // //             value: "98%",
// // // // // //             icon: <ShieldCheck className="w-8 h-8 text-primary" />,
// // // // // //           },
// // // // // //           {
// // // // // //             title: "Active Sessions",
// // // // // //             value: "12",
// // // // // //             icon: <Activity className="w-8 h-8 text-primary" />,
// // // // // //           },
// // // // // //         ].map((stat, i) => (
// // // // // //           <motion.div
// // // // // //             key={i}
// // // // // //             initial={{ opacity: 0, y: 20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.5, delay: i * 0.1 }}
// // // // // //           >
// // // // // //             <Card className="bg-card/70 backdrop-blur-lg border-border rounded-2xl shadow-lg">
// // // // // //               <CardContent className="p-6 flex items-center gap-4">
// // // // // //                 <div className="p-3 bg-muted rounded-xl">{stat.icon}</div>
// // // // // //                 <div>
// // // // // //                   <p className="text-muted-foreground text-sm">{stat.title}</p>
// // // // // //                   <h3 className="text-2xl font-semibold">{stat.value}</h3>
// // // // // //                 </div>
// // // // // //               </CardContent>
// // // // // //             </Card>
// // // // // //           </motion.div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Activity Section */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0 }}
// // // // // //         animate={{ opacity: 1 }}
// // // // // //         transition={{ duration: 0.6, delay: 0.2 }}
// // // // // //       >
// // // // // //         <Card className="bg-card/70 backdrop-blur-lg border-border rounded-2xl shadow-lg mb-10">
// // // // // //           <CardContent className="p-6">
// // // // // //             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// // // // // //               <BarChart3 className="w-6 h-6 text-primary" /> Recent Activity
// // // // // //             </h2>
// // // // // //             <ul className="space-y-3 text-muted-foreground">
// // // // // //               <li>• Logged in from Chrome (Windows)</li>
// // // // // //               <li>• Password updated</li>
// // // // // //               <li>• New device added to trusted list</li>
// // // // // //               <li>• Logged out from Safari (iPhone)</li>
// // // // // //             </ul>
// // // // // //           </CardContent>
// // // // // //         </Card>
// // // // // //       </motion.div>

// // // // // //       {/* Dummy CTA */}
// // // // // //       <div className="text-center">
// // // // // //         <Button onClick={getUserData} className="rounded-2xl px-8 text-lg">
// // // // // //           Get current user
// // // // // //         </Button>

// // // // // //         <p>{user1?.name}</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Userhome;


// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { motion } from "framer-motion";
// // // // // import { BarChart3, User, ShieldCheck, Activity } from "lucide-react";
// // // // // import { getCurrentUser } from "@/services/AuthService";
// // // // // import useAuth from "@/auth/store";
// // // // // import { useState } from "react";
// // // // // import type UserT from "@/models/User";
// // // // // import toast from "react-hot-toast";

// // // // // function Userhome() {
// // // // //   const user = useAuth((state) => state.user);
// // // // //   const [user1, setUser1] = useState<UserT | null>(null);

// // // // //   const getUserData = async () => {
// // // // //     try {
// // // // //       const user1 = await getCurrentUser(user?.email);
// // // // //       setUser1(user1);
// // // // //       toast.success("Secure API accessed");
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //       toast.error("Error loading data");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative min-h-screen bg-[#070b12] text-white overflow-hidden p-6">

// // // // //       {/* 🌌 Background Effects */}
// // // // //       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 blur-[160px] rounded-full" />
// // // // //       <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full" />
// // // // //       <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#00ffff_1px,transparent_1px),linear-gradient(to_bottom,#00ffff_1px,transparent_1px)] [background-size:70px_70px]" />

// // // // //       <div className="relative z-10 space-y-10">

// // // // //         {/* Title */}
// // // // //         <motion.h1
// // // // //           initial={{ opacity: 0, y: 10 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           className="text-4xl font-bold text-cyan-400 tracking-wide"
// // // // //         >
// // // // //           Security Control Dashboard
// // // // //         </motion.h1>

// // // // //         {/* Stats */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //           {[
// // // // //             { title: "Total Logins", value: "1,245", icon: <User className="w-6 h-6" /> },
// // // // //             { title: "Security Score", value: "98%", icon: <ShieldCheck className="w-6 h-6" /> },
// // // // //             { title: "Active Sessions", value: "12", icon: <Activity className="w-6 h-6" /> },
// // // // //           ].map((stat, i) => (
// // // // //             <motion.div key={i} whileHover={{ scale: 1.05 }}>
// // // // //               <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_-10px_rgba(0,255,255,0.3)]">
// // // // //                 <CardContent className="p-6 flex justify-between items-center">
// // // // //                   <div>
// // // // //                     <p className="text-sm text-gray-400">{stat.title}</p>
// // // // //                     <h3 className="text-3xl font-bold">{stat.value}</h3>
// // // // //                   </div>
// // // // //                   <div className="text-cyan-400">{stat.icon}</div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Activity */}
// // // // //         <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl shadow-lg">
// // // // //           <CardContent className="p-6">
// // // // //             <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-400">
// // // // //               <BarChart3 className="w-6 h-6" /> System Activity
// // // // //             </h2>
// // // // //             <ul className="space-y-2 text-gray-400 text-sm">
// // // // //               <li>✔ Logged in from Chrome (Windows)</li>
// // // // //               <li>✔ Password updated</li>
// // // // //               <li>✔ New trusted device added</li>
// // // // //               <li>⚠ Failed login attempt</li>
// // // // //             </ul>
// // // // //           </CardContent>
// // // // //         </Card>

// // // // //         {/* API Button */}
// // // // //         <div className="text-center">
// // // // //           <Button
// // // // //             onClick={getUserData}
// // // // //             className="rounded-2xl px-8 text-lg bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
// // // // //           >
// // // // //             Fetch Secure User
// // // // //           </Button>
// // // // //           <p className="mt-4 text-cyan-400">{user1?.name}</p>
// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Userhome;

// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { motion } from "framer-motion";
// // // // import { User, ShieldCheck, Activity, BarChart3 } from "lucide-react";
// // // // import {
// // // //   LineChart, Line, ResponsiveContainer,
// // // //   XAxis, YAxis, Tooltip, AreaChart, Area
// // // // } from "recharts";

// // // // const loginData = [
// // // //   { day: "Mon", value: 120 },
// // // //   { day: "Tue", value: 210 },
// // // //   { day: "Wed", value: 180 },
// // // //   { day: "Thu", value: 250 },
// // // //   { day: "Fri", value: 300 },
// // // //   { day: "Sat", value: 280 },
// // // //   { day: "Sun", value: 320 },
// // // // ];

// // // // const threatData = [
// // // //   { day: "Mon", threats: 2 },
// // // //   { day: "Tue", threats: 4 },
// // // //   { day: "Wed", threats: 1 },
// // // //   { day: "Thu", threats: 3 },
// // // //   { day: "Fri", threats: 5 },
// // // //   { day: "Sat", threats: 2 },
// // // //   { day: "Sun", threats: 1 },
// // // // ];

// // // // function Userhome() {
// // // //   const stats = [
// // // //     { title: "Total Logins", value: "1,245", icon: <User /> },
// // // //     { title: "Security Score", value: "98%", icon: <ShieldCheck /> },
// // // //     { title: "Active Sessions", value: "12", icon: <Activity /> },
// // // //   ];

// // // //   return (
// // // //     <div className="p-6 space-y-12 text-white">

// // // //       <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
// // // //         className="text-4xl font-bold text-cyan-400">
// // // //         Security Command Center
// // // //       </motion.h1>

// // // //       {/* Stats */}
// // // //       <div className="grid md:grid-cols-3 gap-8">
// // // //         {stats.map((s, i) => (
// // // //           <motion.div key={i} whileHover={{ scale: 1.05 }}>
// // // //             <Card className="relative bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl overflow-hidden">
// // // //               <motion.div className="absolute inset-0 border border-cyan-400/30 rounded-3xl"
// // // //                 animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
// // // //               <CardContent className="relative p-6 flex justify-between items-center">
// // // //                 <div>
// // // //                   <p className="text-sm text-gray-400">{s.title}</p>
// // // //                   <h3 className="text-3xl font-bold">{s.value}</h3>
// // // //                 </div>
// // // //                 <div className="text-cyan-400">{s.icon}</div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Charts */}
// // // //       <div className="grid lg:grid-cols-2 gap-10">

// // // //         <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl p-6">
// // // //           <h2 className="text-xl text-cyan-400 mb-4 flex items-center gap-2">
// // // //             <BarChart3 /> Login Activity
// // // //           </h2>
// // // //           <ResponsiveContainer width="100%" height={250}>
// // // //             <LineChart data={loginData}>
// // // //               <XAxis dataKey="day" stroke="#aaa" />
// // // //               <YAxis stroke="#aaa" />
// // // //               <Tooltip />
// // // //               <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={3} />
// // // //             </LineChart>
// // // //           </ResponsiveContainer>
// // // //         </Card>

// // // //         <Card className="bg-white/5 border border-cyan-400/10 backdrop-blur-xl rounded-3xl p-6">
// // // //           <h2 className="text-xl text-cyan-400 mb-4">Threat Monitoring</h2>
// // // //           <ResponsiveContainer width="100%" height={250}>
// // // //             <AreaChart data={threatData}>
// // // //               <XAxis dataKey="day" stroke="#aaa" />
// // // //               <YAxis stroke="#aaa" />
// // // //               <Tooltip />
// // // //               <Area type="monotone" dataKey="threats" stroke="#ff4d4d" fill="#ff4d4d55" />
// // // //             </AreaChart>
// // // //           </ResponsiveContainer>
// // // //         </Card>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Userhome;
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { motion } from "framer-motion";
// // // import { User, ShieldCheck, Activity, BarChart3 } from "lucide-react";
// // // import {
// // //   LineChart,
// // //   Line,
// // //   ResponsiveContainer,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   AreaChart,
// // //   Area,
// // // } from "recharts";

// // // const loginData = [
// // //   { day: "Mon", value: 120 },
// // //   { day: "Tue", value: 210 },
// // //   { day: "Wed", value: 180 },
// // //   { day: "Thu", value: 250 },
// // //   { day: "Fri", value: 300 },
// // //   { day: "Sat", value: 280 },
// // //   { day: "Sun", value: 320 },
// // // ];

// // // const threatData = [
// // //   { day: "Mon", threats: 2 },
// // //   { day: "Tue", threats: 4 },
// // //   { day: "Wed", threats: 1 },
// // //   { day: "Thu", threats: 3 },
// // //   { day: "Fri", threats: 5 },
// // //   { day: "Sat", threats: 2 },
// // //   { day: "Sun", threats: 1 },
// // // ];

// // // function Userhome() {
// // //   const stats = [
// // //     { title: "Total Logins", value: "1,245", icon: <User className="w-5 h-5" /> },
// // //     { title: "Security Score", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
// // //     { title: "Active Sessions", value: "12", icon: <Activity className="w-5 h-5" /> },
// // //   ];

// // //   return (
// // //     <div className="p-6 space-y-12 text-white">

// // //       {/* Title */}
// // //       <motion.h1
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         className="text-4xl font-bold text-cyan-400"
// // //       >
// // //         Security Command Center
// // //       </motion.h1>

// // //       {/* ================= STATS ================= */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //         {stats.map((stat, i) => (
// // //           <motion.div key={i} whileHover={{ scale: 1.03 }}>
// // //             <Card className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.02] border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition hover:border-cyan-400/40">

// // //               {/* Accent edge */}
// // //               <div className="absolute left-0 top-0 h-full w-[3px] bg-cyan-400/70" />

// // //               <CardContent className="p-6 flex items-center justify-between">
// // //                 <div className="space-y-1">
// // //                   <p className="text-xs uppercase tracking-widest text-gray-400">
// // //                     {stat.title}
// // //                   </p>
// // //                   <h3 className="text-3xl font-bold text-white tracking-tight">
// // //                     {stat.value}
// // //                   </h3>
// // //                 </div>

// // //                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-cyan-400 shadow-inner">
// // //                   {stat.icon}
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </motion.div>
// // //         ))}
// // //       </div>

// // //       {/* ================= CHARTS ================= */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

// // //         {/* Login Activity */}
// // //         <Card className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
// // //           <h2 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
// // //             <BarChart3 className="w-5 h-5" /> Login Activity
// // //           </h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <LineChart data={loginData}>
// // //               <XAxis dataKey="day" stroke="#aaa" />
// // //               <YAxis stroke="#aaa" />
// // //               <Tooltip />
// // //               <Line
// // //                 type="monotone"
// // //                 dataKey="value"
// // //                 stroke="#00ffff"
// // //                 strokeWidth={2.5}
// // //               />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         {/* Threat Monitoring */}
// // //         <Card className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
// // //           <h2 className="text-lg font-semibold text-cyan-400 mb-4">
// // //             Threat Monitoring
// // //           </h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <AreaChart data={threatData}>
// // //               <XAxis dataKey="day" stroke="#aaa" />
// // //               <YAxis stroke="#aaa" />
// // //               <Tooltip />
// // //               <Area
// // //                 type="monotone"
// // //                 dataKey="threats"
// // //                 stroke="#ff4d4d"
// // //                 fill="#ff4d4d44"
// // //               />
// // //             </AreaChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Userhome;
// // import { Card, CardContent } from "@/components/ui/card";
// // import { motion } from "framer-motion";
// // import { User, ShieldCheck, Activity, BarChart3 } from "lucide-react";
// // import {
// //   LineChart, Line, ResponsiveContainer,
// //   XAxis, YAxis, Tooltip, AreaChart, Area
// // } from "recharts";

// // const loginData = [
// //   { day: "Mon", value: 120 },
// //   { day: "Tue", value: 210 },
// //   { day: "Wed", value: 180 },
// //   { day: "Thu", value: 250 },
// //   { day: "Fri", value: 300 },
// //   { day: "Sat", value: 280 },
// //   { day: "Sun", value: 320 },
// // ];

// // const threatData = [
// //   { day: "Mon", threats: 2 },
// //   { day: "Tue", threats: 4 },
// //   { day: "Wed", threats: 1 },
// //   { day: "Thu", threats: 3 },
// //   { day: "Fri", threats: 5 },
// //   { day: "Sat", threats: 2 },
// //   { day: "Sun", threats: 1 },
// // ];

// // function Userhome() {
// //   const stats = [
// //     { title: "Total Logins", value: "1,245", icon: <User className="w-5 h-5" /> },
// //     { title: "Security Score", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
// //     { title: "Active Sessions", value: "12", icon: <Activity className="w-5 h-5" /> },
// //   ];

// //   return (
// //     <div className="relative min-h-screen p-6 space-y-14 text-white overflow-hidden">

// //       {/* 🔮 Dynamic AI Background */}
// //       <div className="absolute inset-0 bg-[#05080f]" />
// //       <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
// //       <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full" />

// //       <motion.div
// //         className="absolute w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full"
// //         animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
// //         transition={{ duration: 30, repeat: Infinity }}
// //       />

// //       <div className="relative z-10 space-y-12">

// //         {/* 🧠 AI SYSTEM TITLE */}
// //         <motion.h1
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
// //         >
// //           AI Security Command Center
// //         </motion.h1>

// //         {/* ================= STAT CARDS ================= */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {stats.map((stat, i) => (
// //             <motion.div key={i} whileHover={{ scale: 1.04 }}>
// //               <Card className="relative bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl overflow-hidden">

// //                 {/* Animated top glow */}
// //                 <motion.div
// //                   className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
// //                   animate={{ opacity: [0.2, 1, 0.2] }}
// //                   transition={{ duration: 2, repeat: Infinity }}
// //                 />

// //                 <CardContent className="p-6 flex justify-between items-center">
// //                   <div>
// //                     <p className="text-xs uppercase tracking-widest text-gray-400">{stat.title}</p>
// //                     <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
// //                   </div>
// //                   <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
// //                     {stat.icon}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* ================= CHARTS ================= */}
// //         <div className="grid lg:grid-cols-2 gap-10">

// //           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
// //             <h2 className="text-lg text-cyan-400 mb-4 flex items-center gap-2">
// //               <BarChart3 /> Login Activity
// //             </h2>
// //             <ResponsiveContainer width="100%" height={260}>
// //               <LineChart data={loginData}>
// //                 <XAxis dataKey="day" stroke="#aaa" />
// //                 <YAxis stroke="#aaa" />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={3} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </Card>

// //           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
// //             <h2 className="text-lg text-cyan-400 mb-4">Threat Monitoring</h2>
// //             <ResponsiveContainer width="100%" height={260}>
// //               <AreaChart data={threatData}>
// //                 <XAxis dataKey="day" stroke="#aaa" />
// //                 <YAxis stroke="#aaa" />
// //                 <Tooltip />
// //                 <Area type="monotone" dataKey="threats" stroke="#ff4d4d" fill="#ff4d4d55" />
// //               </AreaChart>
// //             </ResponsiveContainer>
// //           </Card>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Userhome;
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import { User, ShieldCheck, Activity, BarChart3 } from "lucide-react";
// import useAuth from "@/auth/store";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Tooltip,
//   AreaChart,
//   Area,
// } from "recharts";

// const loginData = [
//   { day: "Mon", value: 120 },
//   { day: "Tue", value: 210 },
//   { day: "Wed", value: 180 },
//   { day: "Thu", value: 250 },
//   { day: "Fri", value: 300 },
//   { day: "Sat", value: 280 },
//   { day: "Sun", value: 320 },
// ];

// const threatData = [
//   { day: "Mon", threats: 2 },
//   { day: "Tue", threats: 4 },
//   { day: "Wed", threats: 1 },
//   { day: "Thu", threats: 3 },
//   { day: "Fri", threats: 5 },
//   { day: "Sat", threats: 2 },
//   { day: "Sun", threats: 1 },
// ];

// function Userhome() {
//   const user = useAuth((state) => state.user);

//   const stats = [
//     { title: "Total Logins", value: "1,245", icon: <User className="w-5 h-5" /> },
//     { title: "Security Score", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
//     { title: "Active Sessions", value: "12", icon: <Activity className="w-5 h-5" /> },
//   ];

//   return (
//     <div className="relative min-h-screen p-6 space-y-12 text-white overflow-hidden">

//       {/* 🔮 Background Effects */}
//       <div className="absolute inset-0 bg-[#05080f]" />
//       <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
//       <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full" />

//       <motion.div
//         className="absolute w-[800px] h-[800px] bg-cyan-500/10 blur-[200px] rounded-full"
//         animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
//         transition={{ duration: 30, repeat: Infinity }}
//       />

//       <div className="relative z-10 space-y-10">

//         {/* 🧠 Title */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//         >
//           AI Security Command Center
//         </motion.h1>

//         {/* 👤 User Welcome Panel */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white/[0.03] border border-cyan-400/20 rounded-xl px-6 py-4 backdrop-blur-md">

//           <div>
//             <h2 className="text-xl font-semibold text-white">
//               Welcome {user?.name}
//             </h2>
//             <p className="text-sm text-cyan-400">{user?.email}</p>
//           </div>

//           <div className="flex items-center gap-2 mt-2 md:mt-0">
//             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             <span className="text-sm text-green-400">Session Active</span>
//           </div>

//         </div>

//         {/* ================= STAT CARDS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, i) => (
//             <motion.div key={i} whileHover={{ scale: 1.04 }}>
//               <Card className="relative bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl overflow-hidden">

//                 <motion.div
//                   className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
//                   animate={{ opacity: [0.2, 1, 0.2] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 />

//                 <CardContent className="p-6 flex justify-between items-center">
//                   <div>
//                     <p className="text-xs uppercase tracking-widest text-gray-400">{stat.title}</p>
//                     <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
//                   </div>
//                   <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
//                     {stat.icon}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================= SYSTEM HEALTH CARDS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
//             <h3 className="text-xs text-gray-400 uppercase tracking-widest">Server Status</h3>
//             <p className="text-2xl font-bold text-green-400 mt-2">Operational</p>
//           </Card>

//           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
//             <h3 className="text-xs text-gray-400 uppercase tracking-widest">API Health</h3>
//             <p className="text-2xl font-bold text-green-400 mt-2">Stable</p>
//           </Card>

//           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
//             <h3 className="text-xs text-gray-400 uppercase tracking-widest">Last Sync</h3>
//             <p className="text-2xl font-bold text-cyan-400 mt-2">2 min ago</p>
//           </Card>
//         </div>

//         {/* ================= CHARTS ================= */}
//         <div className="grid lg:grid-cols-2 gap-10">

//           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
//             <h2 className="text-lg text-cyan-400 mb-4 flex items-center gap-2">
//               <BarChart3 /> Login Activity
//             </h2>
//             <ResponsiveContainer width="100%" height={260}>
//               <LineChart data={loginData}>
//                 <XAxis dataKey="day" stroke="#aaa" />
//                 <YAxis stroke="#aaa" />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </Card>

//           <Card className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-lg rounded-2xl p-6">
//             <h2 className="text-lg text-cyan-400 mb-4">Threat Monitoring</h2>
//             <ResponsiveContainer width="100%" height={260}>
//               <AreaChart data={threatData}>
//                 <XAxis dataKey="day" stroke="#aaa" />
//                 <YAxis stroke="#aaa" />
//                 <Tooltip />
//                 <Area type="monotone" dataKey="threats" stroke="#ff4d4d" fill="#ff4d4d55" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default Userhome;
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, ShieldCheck, Activity, BarChart3 } from "lucide-react";
import useAuth from "@/auth/store";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

const loginData = [
  { day: "Mon", value: 120 },
  { day: "Tue", value: 210 },
  { day: "Wed", value: 180 },
  { day: "Thu", value: 250 },
  { day: "Fri", value: 300 },
  { day: "Sat", value: 280 },
  { day: "Sun", value: 320 },
];

const threatData = [
  { day: "Mon", threats: 2 },
  { day: "Tue", threats: 4 },
  { day: "Wed", threats: 1 },
  { day: "Thu", threats: 3 },
  { day: "Fri", threats: 5 },
  { day: "Sat", threats: 2 },
  { day: "Sun", threats: 1 },
];

function Userhome() {
  const user = useAuth((state) => state.user);

  const stats = [
    { title: "Total Logins", value: "1,245", icon: <User className="w-5 h-5" /> },
    { title: "Security Score", value: "98%", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Active Sessions", value: "12", icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <div className="relative min-h-screen p-6 space-y-12 bg-background text-foreground overflow-hidden transition-colors duration-500">

      {/* 🌌 THEME AWARE GLOW EFFECTS */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] bg-cyan-400/10 dark:bg-cyan-400/20 blur-[180px] rounded-full" />

      <motion.div
        className="absolute w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full"
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      />

      <div className="relative z-10 space-y-10">

        {/* 🧠 TITLE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
        >
          Authentication Control Platform
        </motion.h1>

        {/* 👤 USER PANEL */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-card/60 backdrop-blur-lg border border-border rounded-xl px-6 py-4">

          <div>
            <h2 className="text-xl font-semibold">
              Welcome {user?.name}
            </h2>
            <p className="text-sm text-primary">{user?.email}</p>
          </div>

          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-500">Session Active</span>
          </div>

        </div>

        {/* ================= STAT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.04 }}>
              <Card className="bg-card/60 backdrop-blur-lg border border-border rounded-2xl overflow-hidden">

                <motion.div
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.title}</p>
                    <h3 className="text-4xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ================= SYSTEM HEALTH ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/60 backdrop-blur-lg border border-border p-6 rounded-2xl">
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Server Status</h3>
            <p className="text-2xl font-bold text-green-500 mt-2">Operational</p>
          </Card>

          <Card className="bg-card/60 backdrop-blur-lg border border-border p-6 rounded-2xl">
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest">API Health</h3>
            <p className="text-2xl font-bold text-green-500 mt-2">Stable</p>
          </Card>

          <Card className="bg-card/60 backdrop-blur-lg border border-border p-6 rounded-2xl">
            <h3 className="text-xs text-muted-foreground uppercase tracking-widest">Last Sync</h3>
            <p className="text-2xl font-bold text-primary mt-2">2 min ago</p>
          </Card>
        </div>

        {/* ================= CHARTS ================= */}
        <div className="grid lg:grid-cols-2 gap-10">

          <Card className="bg-card/60 backdrop-blur-lg border border-border p-6 rounded-2xl">
            <h2 className="text-lg text-primary mb-4 flex items-center gap-2">
              <BarChart3 /> Login Activity
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={loginData}>
                <XAxis dataKey="day" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#00ffff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="bg-card/60 backdrop-blur-lg border border-border p-6 rounded-2xl">
            <h2 className="text-lg text-primary mb-4">Threat Monitoring</h2>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={threatData}>
                <XAxis dataKey="day" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip />
                <Area type="monotone" dataKey="threats" stroke="#ff4d4d" fill="#ff4d4d55" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

        </div>

      </div>
    </div>
  );
}

export default Userhome;
