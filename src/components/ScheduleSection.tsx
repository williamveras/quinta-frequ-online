import { Clock, Music, Mic2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schedule = [
  {
    time: "06:00 - 10:00",
    name: "Bom Dia Quinta",
    description: "Comece o dia com as melhores músicas",
    icon: Music,
    isLive: false,
  },
  {
    time: "10:00 - 14:00",
    name: "Hits do Momento",
    description: "Os maiores sucessos da atualidade",
    icon: Music,
    isLive: true,
  },
  {
    time: "14:00 - 18:00",
    name: "Tarde Especial",
    description: "Músicas para sua tarde",
    icon: Music,
    isLive: false,
  },
  {
    time: "18:00 - 22:00",
    name: "Quinta da Noite",
    description: "O melhor da música brasileira",
    icon: Mic2,
    isLive: false,
  },
  {
    time: "22:00 - 02:00",
    name: "Balada Quinta",
    description: "As melhores para dançar",
    icon: Music,
    isLive: false,
  },
  {
    time: "02:00 - 06:00",
    name: "Madrugada Relax",
    description: "Músicas calmas para relaxar",
    icon: Music,
    isLive: false,
  },
];

export const ScheduleSection = () => {
  return (
    <section id="programacao" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Programação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Confira nossa grade de programas e não perca nenhum momento
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {schedule.map((program, index) => (
            <div
              key={index}
              className={cn(
                "group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]",
                program.isLive
                  ? "bg-gradient-primary shadow-glow"
                  : "bg-card hover:bg-surface-elevated border border-border/50"
              )}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center",
                  program.isLive
                    ? "bg-primary-foreground/20"
                    : "bg-secondary"
                )}>
                  <program.icon className={cn(
                    "h-6 w-6",
                    program.isLive ? "text-primary-foreground" : "text-primary"
                  )} />
                </div>
                {program.isLive && (
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-semibold">
                    AO VIVO
                  </span>
                )}
              </div>
              
              <h3 className={cn(
                "font-display text-xl font-bold mb-2",
                program.isLive ? "text-primary-foreground" : "text-foreground"
              )}>
                {program.name}
              </h3>
              
              <p className={cn(
                "text-sm mb-4",
                program.isLive ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {program.description}
              </p>
              
              <div className={cn(
                "flex items-center gap-2 text-sm",
                program.isLive ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>
                <Clock className="h-4 w-4" />
                <span>{program.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
