import { Radio, Play, Users } from "lucide-react";

interface RadioStationProps {
  name: string;
  genre: string;
  listeners: number;
  image: string;
  isLive?: boolean;
  onPlay: () => void;
}

const RadioStation = ({ name, genre, listeners, image, isLive = true, onPlay }: RadioStationProps) => {
  return (
    <div className="glass glass-hover rounded-xl p-4 group cursor-pointer" onClick={onPlay}>
      <div className="relative mb-4">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {isLive && (
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-destructive/90 px-2 py-1 rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white">LIVE</span>
          </div>
        )}
        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full gradient-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity glow-primary">
          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
        </button>
      </div>
      
      <div>
        <h4 className="font-semibold text-foreground mb-1 truncate">{name}</h4>
        <p className="text-sm text-muted-foreground mb-2">{genre}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span>{listeners.toLocaleString()} listening</span>
        </div>
      </div>
    </div>
  );
};

export default RadioStation;
