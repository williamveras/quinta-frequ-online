import { Radio, Headphones, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "24 Horas no Ar",
    description: "Transmissão contínua todos os dias da semana",
  },
  {
    icon: Headphones,
    title: "Alta Qualidade",
    description: "Áudio em alta definição para sua melhor experiência",
  },
  {
    icon: Heart,
    title: "Com Amor",
    description: "Feito com carinho para você, nosso ouvinte",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Conectando pessoas através da música",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Sobre a{" "}
              <span className="text-gradient-primary">Quinta Frequência</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos uma rádio web dedicada a trazer a melhor seleção musical diretamente 
              para você, onde quer que esteja. Nossa programação é cuidadosamente 
              preparada para acompanhar cada momento do seu dia.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Com transmissão 24 horas, oferecemos uma variedade de estilos musicais 
              e programas especiais para todos os gostos. A Quinta Frequência é mais 
              que uma rádio - é uma comunidade de amantes da boa música.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-shadow">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
