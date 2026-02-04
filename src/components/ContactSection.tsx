import { Instagram, Facebook, Mail, MessageCircle, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:contato@quintafrequencia.com.br" },
];

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Fale <span className="text-gradient-primary">Conosco</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10">
            Quer mandar um recado, pedir uma música ou entrar em contato? 
            Estamos nas redes sociais!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                size="lg"
                className="gap-2 border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Newsletter or Message */}
          <div className="p-8 rounded-3xl glass border border-border/50">
            <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow-sm">
              <Radio className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Peça sua música!
            </h3>
            <p className="text-muted-foreground mb-6">
              Envie sua música favorita e nós tocamos pra você ao vivo!
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow-sm transition-all"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Enviar Pedido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
