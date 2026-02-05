import { Heart } from "lucide-react";
import logoImg from "@/assets/logo-quinta-frequencia.jpeg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50 bg-card/30">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src={logoImg} 
              alt="Quinta Frequência" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display font-bold">
              Quinta Frequência
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Quinta Frequência. Feito com{" "}
            <Heart className="h-3 w-3 text-destructive fill-destructive" />
          </p>
        </div>
      </div>
    </footer>
  );
};
