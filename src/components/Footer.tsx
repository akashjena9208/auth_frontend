import Logo from "./Logo";
import { Github, Linkedin, Globe} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-gradient-to-b from-card/40 to-background backdrop-blur-xl">

      {/* subtle glow background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm">

        {/* BRAND */}
        {/* <div className="space-y-5">
          <Logo />
          <p className="text-muted-foreground leading-relaxed">
            SecureAuth provides authentication infrastructure designed for
            reliability, scalability, and modern application security.
          </p>
          <p className="text-xs text-muted-foreground">
            Developed by <span className="text-primary font-medium">Akash Jena</span>
          </p>
        </div> */}
        {/* BRAND */}
        {/* BRAND */}
        <div className="space-y-5">
        <Logo />

        <p className="text-muted-foreground leading-relaxed">
            Auth Application provides authentication infrastructure designed for
            reliability, scalability, and modern application security.
        </p>

        <div className="space-y-1 text-sm">
            <p>
            Developed by{" "}
            <span className="text-primary font-semibold text-base tracking-wide">
                Akash Jena
            </span>
            </p>

            <p className="text-muted-foreground">
            📧 <a
                href="mailto:akashjena9208@gmail.com"
                className="hover:text-primary transition"
            >
                akashjena9208@gmail.com
            </a>
            </p>
        </div>
        </div>



        {/* PRODUCT */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="hover:text-primary transition cursor-pointer">Features</li>
            <li className="hover:text-primary transition cursor-pointer">Security</li>
            <li className="hover:text-primary transition cursor-pointer">Docs</li>
            <li className="hover:text-primary transition cursor-pointer">API</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="hover:text-primary transition cursor-pointer">About</li>
            <li className="hover:text-primary transition cursor-pointer">Careers</li>
            <li className="hover:text-primary transition cursor-pointer">Blog</li>
            <li className="hover:text-primary transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-foreground font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/akashjena9208" target="_blank" className="p-3 rounded-xl bg-card hover:bg-primary/10 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/akash-jena9208" target="_blank" className="p-3 rounded-xl bg-card hover:bg-primary/10 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://akashjena9208.github.io/Akash_Personal_Portfolio/" target="_blank" className="p-3 rounded-xl bg-card hover:bg-primary/10 transition">
              <Globe className="w-5 h-5" />
            </a>
            
          </div>
        </div>

      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Auth Application  Authentication Infrastructure Platform
      </div>
    </footer>
  );
}
