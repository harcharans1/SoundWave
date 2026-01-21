import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MusicPlayer from "@/components/MusicPlayer";
import RadioStation from "@/components/RadioStation";
import TrackList from "@/components/TrackList";

// Import images
import musicCover1 from "@/assets/music-cover-1.jpg";
import musicCover2 from "@/assets/music-cover-2.jpg";
import musicCover3 from "@/assets/music-cover-3.jpg";
import radio1 from "@/assets/radio-1.jpg";
import radio2 from "@/assets/radio-2.jpg";
import radio3 from "@/assets/radio-3.jpg";
import radio4 from "@/assets/radio-4.jpg";
import radio5 from "@/assets/radio-5.jpg";
import radio6 from "@/assets/radio-6.jpg";

const tracks = [
  { id: 1, title: "Neon Dreams", artist: "Synthwave Collective", cover: musicCover1, duration: "3:24" },
  { id: 2, title: "Midnight Pulse", artist: "DJ Nova", cover: musicCover2, duration: "4:12" },
  { id: 3, title: "Electric Horizons", artist: "Future Bass", cover: musicCover3, duration: "3:58" },
  { id: 4, title: "Digital Love", artist: "Synthwave Collective", cover: musicCover1, duration: "3:45" },
  { id: 5, title: "Cyber Sunset", artist: "DJ Nova", cover: musicCover2, duration: "4:30" },
];

const radioStations = [
  { id: 1, name: "Retro FM", genre: "Classic Hits", listeners: 12500, image: radio1 },
  { id: 2, name: "Electronic Pulse", genre: "EDM / House", listeners: 28900, image: radio2 },
  { id: 3, name: "Jazz Lounge", genre: "Smooth Jazz", listeners: 8700, image: radio3 },
  { id: 4, name: "Rock Nation", genre: "Classic Rock", listeners: 15200, image: radio4 },
  { id: 5, name: "Classical FM", genre: "Classical", listeners: 6400, image: radio5 },
  { id: 6, name: "Chill Vibes", genre: "Lofi / Ambient", listeners: 21300, image: radio6 },
];

const Index = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleRadioPlay = (stationName: string) => {
    console.log(`Playing radio station: ${stationName}`);
    // In a real app, this would connect to the radio stream
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Music Section */}
      <section id="music" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Now <span className="gradient-text">Playing</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Stream your favorite tracks with our immersive music player
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <MusicPlayer
              tracks={tracks}
              currentTrackIndex={currentTrackIndex}
              onTrackChange={setCurrentTrackIndex}
            />
            <TrackList
              tracks={tracks}
              currentTrackIndex={currentTrackIndex}
              onTrackSelect={setCurrentTrackIndex}
            />
          </div>
        </div>
      </section>

      {/* Radio Stations Section */}
      <section id="radio" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Live <span className="gradient-text">Radio Stations</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tune into live radio stations from around the world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {radioStations.map((station) => (
              <RadioStation
                key={station.id}
                name={station.name}
                genre={station.genre}
                listeners={station.listeners}
                image={station.image}
                onPlay={() => handleRadioPlay(station.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                </svg>
              </div>
              <span className="text-lg font-bold gradient-text">SoundWave</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 SoundWave. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

