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
