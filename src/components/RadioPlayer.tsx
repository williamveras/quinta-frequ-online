import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AudioWave } from "./AudioWave";
import { LiveBadge } from "./LiveBadge";
import { cn } from "@/lib/utils";

interface RadioPlayerProps {
  className?: string;
  variant?: "hero" | "fixed";
}

export const RadioPlayer = ({ className, variant = "hero" }: RadioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "http://129.146.110.208:8001/radio.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (variant === "fixed") {
    return (
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 px-4 py-3",
        className
      )}>
        <audio ref={audioRef} src={streamUrl} preload="none" />
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="ghost"
              onClick={togglePlay}
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>
            <div className="hidden sm:block">
              <AudioWave isPlaying={isPlaying} />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <LiveBadge />
            <span className="text-sm text-muted-foreground hidden md:block">
              Quinta Frequência
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="h-8 w-8"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              onValueChange={(v) => setVolume(v[0])}
              max={100}
              step={1}
              className="w-24 hidden sm:flex"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "flex flex-col items-center gap-6",
      className
    )}>
      <audio ref={audioRef} src={streamUrl} preload="none" />
      
      <LiveBadge className="mb-2" />
      
      <Button
        size="lg"
        onClick={togglePlay}
        className={cn(
          "h-24 w-24 rounded-full transition-all duration-300",
          "bg-gradient-primary hover:scale-105 shadow-glow",
          isPlaying && "shadow-glow animate-pulse-glow"
        )}
      >
        {isPlaying ? (
          <Pause className="h-10 w-10" />
        ) : (
          <Play className="h-10 w-10 ml-1" />
        )}
      </Button>

      <AudioWave isPlaying={isPlaying} className="h-12" />

      <div className="flex items-center gap-3 mt-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleMute}
          className="h-10 w-10"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          onValueChange={(v) => setVolume(v[0])}
          max={100}
          step={1}
          className="w-32"
        />
      </div>
    </div>
  );
};
