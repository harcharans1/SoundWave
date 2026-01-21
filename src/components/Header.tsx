import { Radio, Music, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center glow-primary">
              <Music className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">SoundWave</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#music" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Music
            </a>
            <a href="#radio" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Radio
            </a>
            <a href="#playlist" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Playlists
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:flex gradient-bg hover:opacity-90 text-primary-foreground border-0 glow-primary">
            <Radio className="w-4 h-4 mr-2" />
            Go Live
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-slide-up">
            <a href="#music" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Music
            </a>
            <a href="#radio" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Radio
            </a>
            <a href="#playlist" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Playlists
            </a>
            <Button className="gradient-bg hover:opacity-90 text-primary-foreground border-0 w-full">
              <Radio className="w-4 h-4 mr-2" />
              Go Live
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

