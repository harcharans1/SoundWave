import { Play, Clock } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
}

interface TrackListProps {
  tracks: Track[];
  currentTrackIndex: number;
  onTrackSelect: (index: number) => void;
}

const TrackList = ({ tracks, currentTrackIndex, onTrackSelect }: TrackListProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Popular Tracks</h3>
      </div>
      <div className="divide-y divide-border">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            onClick={() => onTrackSelect(index)}
            className={`flex items-center gap-4 p-4 hover:bg-secondary/50 cursor-pointer transition-colors group ${
              currentTrackIndex === index ? 'bg-secondary/30' : ''
            }`}
          >
            <span className="w-6 text-center text-muted-foreground text-sm group-hover:hidden">
              {index + 1}
            </span>
            <Play className="w-4 h-4 text-primary hidden group-hover:block" />
            
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={track.cover}
                alt={track.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`font-medium truncate ${currentTrackIndex === index ? 'text-primary' : 'text-foreground'}`}>
                {track.title}
              </p>
              <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="w-4 h-4" />
              <span>{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
