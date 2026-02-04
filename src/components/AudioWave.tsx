import { cn } from "@/lib/utils";

interface AudioWaveProps {
  isPlaying: boolean;
  className?: string;
}

export const AudioWave = ({ isPlaying, className }: AudioWaveProps) => {
  return (
    <div className={cn("flex items-end gap-1 h-8", className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-gradient-primary rounded-full transition-all duration-300",
            isPlaying ? `animate-wave-${i}` : "h-2"
          )}
          style={{
            height: isPlaying ? undefined : '8px',
          }}
        />
      ))}
    </div>
  );
};
