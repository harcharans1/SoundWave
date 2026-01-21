import { Headphones, Radio } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Live Radio Streaming</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">Feel the </span>
            <span className="gradient-text">Rhythm</span>
            <br />
            <span className="text-foreground">Anywhere</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Stream unlimited music and tune into live radio stations from around the world. 
            Your favorite tunes, always at your fingertips.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="gradient-bg hover:opacity-90 text-primary-foreground border-0 glow-primary text-lg px-8 py-6">
              <Headphones className="w-5 h-5 mr-2" />
              Start Listening
            </Button>
            <Button size="lg" variant="outline" className="bg-secondary/50 border-border hover:bg-secondary text-foreground text-lg px-8 py-6">
              <Radio className="w-5 h-5 mr-2" />
              Explore Radio
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">50K+</p>
              <p className="text-muted-foreground text-sm">Songs</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">200+</p>
              <p className="text-muted-foreground text-sm">Radio Stations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text">1M+</p>
              <p className="text-muted-foreground text-sm">Active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Music Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-1 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-primary to-accent rounded-full"
            style={{
              height: `${Math.random() * 40 + 10}px`,
              animation: `music-bar ${1 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
