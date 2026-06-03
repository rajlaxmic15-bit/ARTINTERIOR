import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location.pathname === "/";

  return (
    <>
      {/* Top micro contact bar */}
      <div className="bg-charcoal text-ivory/80 text-[11px] py-2 px-6 border-b border-white/5 z-50 relative font-body font-light uppercase tracking-widest hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+919545002017" className="hover:text-gold transition-colors flex items-center gap-1.5">
              <Phone size={10} className="text-gold" />
              +91-9545002017
            </a>
            <a href="mailto:artinteriorz17@gmail.com" className="hover:text-gold transition-colors">
              artinteriorz17@gmail.com
            </a>
          </div>
          <div className="text-gold tracking-widest">
            Nagpur's Best Design Firm since 2017
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal-light/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
            : isHome
            ? "bg-transparent py-6"
            : "bg-charcoal py-6 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-ivory uppercase group-hover:text-gold transition-colors">
              Art Interiorz
            </span>
            <span className="font-body text-[9px] tracking-[0.3em] text-gold uppercase -mt-1 font-semibold">
              Nagpur
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-xs uppercase tracking-widest transition-all duration-300 relative py-1 hover:text-gold ${
                    isActive ? "text-gold font-medium" : "text-ivory/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send/?phone=919545002017&text=Hello%20Art%20Interiorz,%20I'm%20interested%20in%20your%20design%20services&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-ivory hover:text-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/98 transition-all duration-500 ease-in-out transform md:hidden ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
            <span className="font-heading text-2xl font-bold tracking-widest text-ivory uppercase">
              Art Interiorz
            </span>
            <span className="font-body text-[9px] tracking-[0.3em] text-gold uppercase -mt-1">
              Nagpur
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ivory hover:text-gold transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 h-[60vh] px-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-2xl tracking-widest uppercase hover:text-gold transition-colors ${
                  isActive ? "text-gold font-semibold" : "text-ivory"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href="https://api.whatsapp.com/send/?phone=919545002017&text=Hello%20Art%20Interiorz,%20I'm%20interested%20in%20your%20design%20services&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-gold text-charcoal hover:bg-gold-light font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 w-full text-center rounded-sm"
          >
            Enquire Now
          </a>
        </nav>

        <div className="absolute bottom-10 left-0 w-full text-center px-6">
          <p className="font-body text-xs text-ivory/60 tracking-wider">
            +91 95450 02017 &bull; artinteriorz17@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
