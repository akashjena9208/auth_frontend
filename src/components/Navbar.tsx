import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import useAuth from "@/auth/store";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("theme-1");

  const checkLogin = useAuth((s) => s.checkLogin);
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const navigate = useNavigate();

  /* LOAD THEME */
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "theme-1";
    document.documentElement.className = saved;
    setTheme(saved);
  }, []);

  /* CHANGE THEME */
  const toggleTheme = () => {
    const next =
      theme === "theme-1"
        ? "theme-2"
        : theme === "theme-2"
        ? "theme-3"
        : "theme-1";

    document.documentElement.className = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="border-b border-border px-4">
        <div className="max-w-7xl mx-auto h-14 flex items-center justify-between">
          
          

          {/* LOGO */}
            <NavLink
              to="/"
              className="flex items-center gap-2 font-semibold hover:opacity-90 transition"
            >
              <span className="h-7 w-7 rounded-md bg-gradient-to-r from-primary to-primary/40 flex items-center justify-center text-sm">
                A
              </span>
              <span>Auth App</span>
            </NavLink>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink className="nav-link" to="/">Home</NavLink>

            {checkLogin() ? (
              <>
                <NavLink className="nav-link" to="/dashboard/profile">
                  {user?.name}
                </NavLink>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <Button size="sm" variant="outline">Login</Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button size="sm" variant="outline">Signup</Button>
                </NavLink>
              </>
            )}

            {/* THEME TOGGLE ICON */}
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "theme-1" && "🟢"}
              {theme === "theme-2" && "🔴"}
              {theme === "theme-3" && "🔵"}
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 border border-border rounded-md"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-full w-72
          bg-gradient-to-b from-black/95 via-black/90 to-black/95
          backdrop-blur-2xl
          border-l border-white/10
          shadow-2xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex flex-col gap-6 h-full">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="self-end w-9 h-9 rounded-full border border-white/10 hover:bg-white/10 transition"
          >
            ✕
          </button>

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="text-lg px-3 py-2 rounded-md hover:bg-white/5"
          >
            Home
          </NavLink>

          {checkLogin() ? (
            <>
              <NavLink
                to="/dashboard/profile"
                onClick={() => setOpen(false)}
                className="text-lg px-3 py-2 rounded-md hover:bg-white/5"
              >
                {user?.name}
              </NavLink>

              <Button
                variant="outline"
                onClick={() => {
                  logout();
                  setOpen(false);
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="outline">Login</Button>
              </NavLink>
              <NavLink to="/signup" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="outline">Signup</Button>
              </NavLink>
            </>
          )}

          {/* SPACER */}
          <div className="flex-1" />

          {/* THEME TOGGLE */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-sm opacity-70">Theme</span>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "theme-1" && "🟢"}
              {theme === "theme-2" && "🔴"}
              {theme === "theme-3" && "🔵"}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
