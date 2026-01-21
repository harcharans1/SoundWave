import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { Slider } from "./ui/slider";

interface Track {
  id: number;
  title: string;
  artist: string;
  cover: string;
  duration: string;
}

interface MusicPlayerProps {
  tracks: Track[];
  currentTrackIndex: number;
  onTrackChange: (index: number) => void;
}

const MusicPlayer = ({ tracks, currentTrackIndex, onTrackChange }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  
  const currentTrack = tracks[currentTrackIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    onTrackChange(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    onTrackChange(prevIndex);
  };

  // Simulate progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex]);

  return (
    <div className="glass rounded-2xl p-6 w-full max-w-md mx-auto animate-scale-in">
      {/* Album Cover */}
      <div className="relative mb-6">
        <div className={`aspect-square rounded-xl overflow-hidden ${isPlaying ? 'animate-pulse-glow' : ''}`}>
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-full h-full object-cover"
          />
        </div>
        {isPlaying && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-primary rounded-full music-bar ${i === 1 ? 'music-bar-delay-1' : i === 2 ? 'music-bar-delay-2' : i === 3 ? 'music-bar-delay-3' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{currentTrack.title}</h3>
        <p className="text-muted-foreground">{currentTrack.artist}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <Slider
          value={[progress]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={(value) => setProgress(value[0])}
        />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>{Math.floor(progress / 100 * 3)}:{String(Math.floor((progress / 100 * 180) % 60)).padStart(2, '0')}</span>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <button
          onClick={handlePrevious}
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <SkipBack className="w-6 h-6" />
        </button>
        <button
          onClick={handlePlayPause}
          className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center glow-primary hover:opacity-90 transition-opacity"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          )}
        </button>
        <button
          onClick={handleNext}
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          <SkipForward className="w-6 h-6" />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={100}
          step={1}
          className="flex-1"
          onValueChange={(value) => {
            setVolume(value[0]);
            setIsMuted(false);
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
