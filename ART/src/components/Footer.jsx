import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/90 border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-3xl font-bold tracking-widest text-ivory uppercase">
              Art Interiorz
            </span>
            <span className="font-body text-[10px] tracking-[0.3em] text-gold uppercase -mt-1 font-semibold">
              Nagpur
            </span>
          </Link>
          <p className="font-body text-xs text-ivory/60 leading-relaxed max-w-xs font-light">
            We create functional, stunning spaces that reflect your personality and style. Dedicated craftsmanship and customer service is the cornerstone of our company.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Explore
          </span>
          <div className="flex flex-col gap-2.5">
            <Link to="/" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-1 group">
              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Home
            </Link>
            <Link to="/about" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-1 group">
              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /> About Us
            </Link>
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-1 group">
              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Services
            </Link>
            <Link to="/portfolio" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-1 group">
              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Portfolio
            </Link>
            <Link to="/contact" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-1 group">
              <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" /> Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Services
          </span>
          <div className="flex flex-col gap-2.5">
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors">Residential Design</Link>
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors">Modular Kitchens</Link>
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors">Renovations</Link>
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors">Hospitality Design</Link>
            <Link to="/services" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors">Architectural Design</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
            Contact
          </span>
          <div className="flex flex-col gap-3.5">
            <p className="font-body text-xs text-ivory/70 leading-relaxed font-light flex items-start gap-2.5">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>
                <strong>Office:</strong> Plot No 13, Suprabhat Apartments, 1st floor, Shilpa Society, Somalwada, Nagpur, MH 440015
              </span>
            </p>
            <p className="font-body text-xs text-ivory/70 leading-relaxed font-light flex items-start gap-2.5">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>
                <strong>T-Point:</strong> Manish Nagar, Nagpur
              </span>
            </p>
            <a href="tel:+919545002017" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-2.5">
              <Phone size={14} className="text-gold shrink-0" />
              +91 95450 02017
            </a>
            <a href="mailto:artinteriorz17@gmail.com" className="font-body text-xs text-ivory/70 hover:text-gold transition-colors flex items-center gap-2.5">
              <Mail size={14} className="text-gold shrink-0" />
              artinteriorz17@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-[11px] text-ivory/40 uppercase tracking-widest font-light">
        <span>&copy; {new Date().getFullYear()} Art Interiorz. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span>Nagpur, India</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>Luxury Redesign V2.0</span>
        </div>
      </div>
    </footer>
  );
}
