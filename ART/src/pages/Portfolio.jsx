import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Layers, PenTool, MessageSquare, Maximize2, Play } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Portfolio() {
  const categories = ["All", "Bedroom", "Modular Kitchen", "Living Room", "Others"];

  const projects = [
    {
      id: 1,
      category: "Living Room",
      categories: ["Living Room", "Bedroom"],
      title: "The Kumare Residence",
      concept: "High-end contemporary residential design with custom wooden paneling, ducted HVAC ceiling grids, and ambient warm light details.",
      image: "/KUMARE_S/LIVING ROOM1.1.jpg",
      beforeImage: "/KUMARE_S/LIVING ROOM1.3.jpg",
      overview: "A complete turnkey luxury residential design for a multi-room premium apartment in Somalwada, Nagpur. The project integrates custom wood paneling, designer ceilings, and tailored furniture configurations to deliver a state-of-the-art living environment.",
      challenge: "Integrating extensive copper wiring and ducted AC conduits without lowering the main ceiling heights, while maintaining a smooth architectural transition between the public living spaces and private bedroom zones.",
      materials: "Premium Teak Laminates, Italian Marble Floor Polishes, Concealed LED Strips, Acoustic Fabric Panels",
      timeline: "12 Weeks",
      testimonial: " Kapil and Kratika transformed our apartment into a luxurious masterpiece. The carpentry finishes, matching wardrobes, and the living room layout are exceptional.",
      clientName: "Mr. & Mrs. Kumare",
      rooms: {
        "Living Room": [
          "/KUMARE_S/LIVING ROOM1.1.jpg",
          "/KUMARE_S/LIVING ROOM1.2.jpg",
          "/KUMARE_S/LIVING ROOM1.3.jpg",
          "/KUMARE_S/LIVING ROOM1.4.jpg",
          "/KUMARE_S/LIVING ROOM1.5.jpg",
          "/KUMARE_S/LIVING ROOM1.6.jpg",
          "/KUMARE_S/LIVING ROOM1.8.jpg",
          "/KUMARE_S/LIVING ROOM1.9.jpg"
        ],
        "Master Bedroom (Bedroom 1)": [
          "/KUMARE_S/BEDROOM1.1.jpg",
          "/KUMARE_S/BEDROOM1.2.pg.jpg",
          "/KUMARE_S/BEDROOM1.3..jpg"
        ],
        "Kids Bedroom (Bedroom 2)": [
          "/KUMARE_S/BEDROOM2.1.jpg",
          "/KUMARE_S/BEDROOM2.2.jpg",
          "/KUMARE_S/BEDROOM2.3.jpg",
          "/KUMARE_S/BEDROOM2....jpg"
        ],
        "Guest Bedroom (Bedroom 3)": [
          "/KUMARE_S/BEDROOM 3.1.jpg",
          "/KUMARE_S/BEDROOM 3.2.jpg",
          "/KUMARE_S/BEDROOM 3.3.jpg",
          "/KUMARE_S/BEDROOM 3.4.jpg",
          "/KUMARE_S/BEDROOM 3.5.jpg",
          "/KUMARE_S/BEDROOM 3.6.jpg",
          "/KUMARE_S/BEDROOM 3.7.jpg"
        ]
      },
      videos: [
        "/KUMARE_S/WhatsApp Video 2025-12-18 at 12.05.26 PM.mp4",
        "/KUMARE_S/WhatsApp Video 2025-12-20 at 2.57.25 PM.mp4",
        "/KUMARE_S/WhatsApp Video 2025-12-20 at 2.57.30 PM.mp4",
        "/KUMARE_S/WhatsApp Video 2025-12-20 at 2.57.38 PM.mp4"
      ]
    },
    {
      id: 2,
      category: "Living Room",
      categories: ["Living Room"],
      title: "The Fandi Residence",
      concept: "Japandi-inspired open lounge layout featuring soft textures, clean lines, and custom oak media solutions.",
      image: "/FANDI_S/LIVING ROOM 1.jpg.jpeg",
      beforeImage: "/FANDI_S/WhatsApp Image 2026-04-07 at 3.01.03 PM.jpeg",
      overview: "A modern design renovation of a residential living space in Manish Nagar, Nagpur. The layout was structured to promote a serene Scandinavian-Japanese aesthetic, balancing wooden slats with cozy linen modular seating units.",
      challenge: "Transforming a narrow entry lounge to feel wide, open, and filled with natural light, while integrating a full TV media console and concealed storage space.",
      materials: "Lacquered Oak, Off-White Bouclé Textures, Warm Spotlight grids, Frosted Glass partitions",
      timeline: "6 Weeks",
      testimonial: "Art Interiorz brought our vision to life. The living room feels twice as large, and the carpentry finishes are absolutely flawless. The custom media unit is a showstopper!",
      clientName: "Mr. Fandi",
      rooms: {
        "Living Room": [
          "/FANDI_S/LIVING ROOM 1.jpg.jpeg",
          "/FANDI_S/LIVING ROOM 2.jpg.jpeg",
          "/FANDI_S/LIVING ROOM 1 jpg.jpg.jpeg",
          "/FANDI_S/WhatsApp Image 2026-04-07 at 3.01.02 PM.jpeg",
          "/FANDI_S/WhatsApp Image 2026-04-07 at 3.01.03 PM.jpeg",
          "/FANDI_S/WhatsApp Image 2026-04-07 at 3.01.03 PM (2).jpeg",
          "/FANDI_S/WhatsApp Image 2026-04-07 at 3.01.03 PM (3).jpeg"
        ]
      },
      videos: [
        "/FANDI_S/IMG_3686.MP4"
      ]
    },
    {
      id: 3,
      category: "Modular Kitchen",
      categories: ["Modular Kitchen"],
      title: "Emerald & Quartz Culinary Space",
      concept: "Fitted straight modules, anti-scratch shutters, and gold channel trims for a sleek, contemporary kitchen setup.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      beforeImage: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80",
      overview: "Integrating high-durability modular cabinetry with built-in appliances for an efficient workspace flow.",
      challenge: "Optimizing corner accessibility and maximizing storage capacity within a compact rectangular layout.",
      materials: "Quartz Stone Countertop, Marine Grade Plywood shutters with Acrylic Finish, Hettich soft-close channels",
      timeline: "4 Weeks",
      testimonial: "Our modular kitchen is an absolute delight to cook in. The utility storage layout is smart, and the quartz countertops look incredibly luxurious.",
      clientName: "Mrs. Shweta Kulkarni"
    },
    {
      id: 4,
      category: "Others",
      categories: ["Others"],
      title: "The Artisanal Espresso Lounge",
      concept: "Acoustic wall paneling, custom-built solid oak banquettes, and signature gold accent display frames.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      beforeImage: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=80",
      overview: "A premium commercial hospitality layout designed to maximize visitor engagement and floor capacity.",
      challenge: "Ensuring noise dampening coordinates inside an open space filled with metal machinery and high ceiling voids.",
      materials: "Fluted Charcoal wall panels, Velvet seating covers, Raw brass hardware elements",
      timeline: "8 Weeks",
      testimonial: "Our cafe design has become a landmark on Instagram. Art Interiorz combined lighting coordinates and material textures beautifully.",
      clientName: "Owner, Artisanal Cafe"
    }
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeRoom, setActiveRoom] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);
  
  // State for before/after comparison slider position (percentage 0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.categories.includes(activeTab));

  const handleSliderMove = (e) => {
    if (!isResizing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleSelectProject = (p) => {
    setSelectedProject(p);
    setSliderPos(50);
    if (p.rooms) {
      setActiveRoom(Object.keys(p.rooms)[0]);
    } else {
      setActiveRoom("");
    }
  };

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* Portfolio Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="/KUMARE_S/LIVING ROOM1.1.jpg"
            alt="Portfolio Banner"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-2 block font-semibold">
            OUR PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory font-light">
            Selected Workpieces
          </h1>
        </div>
      </section>

      {/* Categories Filter Tabs */}
      <section className="py-12 bg-beige/35 border-b border-gold/5 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 font-body text-xs uppercase tracking-widest transition-all rounded-full ${
                activeTab === cat
                   ? "bg-gold text-charcoal font-semibold"
                  : "bg-white text-charcoal/80 border border-gold/10 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Showcase Masonry/Grid */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((p, i) => (
              <AnimatedSection key={p.id} delay={(i % 2) * 0.1}>
                <div
                  onClick={() => handleSelectProject(p)}
                  className="group cursor-pointer bg-white border border-gold/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 rounded-sm flex flex-col justify-between"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-beige relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-charcoal/10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal/30 backdrop-blur-[2px]">
                      <span className="p-3 bg-white/95 rounded-full shadow-lg text-charcoal hover:text-gold hover:scale-115 transition-transform">
                        <Maximize2 size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-8 text-left">
                    <span className="font-body text-[10px] text-gold uppercase tracking-widest font-semibold block mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-heading text-2xl text-charcoal font-semibold mb-3">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                      {p.concept}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details / Case-Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen py-16 px-6 md:px-16 max-w-6xl mx-auto relative text-left">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 z-50 p-3 bg-white/90 hover:bg-gold hover:text-white text-charcoal rounded-full border border-gold/15 shadow-xl transition-all cursor-pointer"
                aria-label="Close project view"
              >
                <X size={20} />
              </button>

              {/* Title Header */}
              <div className="mb-12 border-b border-white/10 pb-8 mt-12">
                <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                  {selectedProject.category}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl text-ivory font-light mb-4">
                  {selectedProject.title}
                </h2>
                <p className="font-body text-sm text-ivory/70 max-w-xl font-light">
                  {selectedProject.concept}
                </p>
              </div>

              {/* Interactive Before/After Drag Slider */}
              <div className="mb-16">
                <h3 className="font-body text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                  Interactive Before & After View (Drag Slider)
                </h3>
                <div
                  onMouseMove={handleSliderMove}
                  onTouchMove={(e) => {
                    if (e.touches[0]) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.touches[0].clientX - rect.left;
                      setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
                    }
                  }}
                  onMouseDown={() => setIsResizing(true)}
                  onMouseUp={() => setIsResizing(false)}
                  onMouseLeave={() => setIsResizing(false)}
                  onTouchStart={() => setIsResizing(true)}
                  onTouchEnd={() => setIsResizing(false)}
                  className="relative aspect-[16/9] w-full bg-beige overflow-hidden border border-white/10 rounded-sm cursor-ew-resize select-none"
                >
                  {/* Before image (bottom layer) */}
                  <img
                    src={selectedProject.beforeImage}
                    alt="Before redesign"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal/70 backdrop-blur-sm px-3 py-1 text-[10px] text-ivory uppercase tracking-widest font-semibold border border-white/15">
                    Before / Site Stage
                  </div>

                  {/* After image (top sliding layer) */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                  >
                    <img
                      src={selectedProject.image}
                      alt="After redesign"
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-3 py-1 text-[10px] text-charcoal uppercase tracking-widest font-semibold border border-white/15">
                      Completed Design
                    </div>
                  </div>

                  {/* Slider line / handle */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-gold"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold border-2 border-white rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-charcoal text-xs font-bold font-body flex gap-1 select-none">
                        &lsaquo;&rsaquo;
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-ivory/40 uppercase tracking-widest text-center mt-2">
                  Drag the center handler to compare spaces.
                </p>
              </div>

              {/* Room Showcase Gallery */}
              {selectedProject.rooms && (
                <div className="mb-16 border-t border-white/10 pt-12">
                  <h3 className="font-body text-xs font-semibold text-gold uppercase tracking-widest mb-6">
                    Explore Room Galleries
                  </h3>
                  
                  {/* Room select tabs */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {Object.keys(selectedProject.rooms).map((room) => (
                      <button
                        key={room}
                        onClick={() => setActiveRoom(room)}
                        className={`px-5 py-2 font-body text-[10px] uppercase tracking-widest transition-all rounded-full border cursor-pointer ${
                          activeRoom === room
                            ? "bg-gold text-charcoal border-gold font-semibold"
                            : "bg-white/5 text-ivory/80 border-white/10 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {room}
                      </button>
                    ))}
                  </div>

                  {/* Room Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {selectedProject.rooms[activeRoom]?.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage(imgUrl)}
                        className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 bg-white/5 cursor-pointer"
                      >
                        <img
                          src={imgUrl}
                          alt={`${activeRoom} view ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="p-2.5 bg-white/95 rounded-full text-charcoal hover:scale-110 transition-transform">
                            <Maximize2 size={12} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Site Walkthrough Videos */}
              {selectedProject.videos && selectedProject.videos.length > 0 && (
                <div className="mb-16 border-t border-white/10 pt-12">
                  <h3 className="font-body text-xs font-semibold text-gold uppercase tracking-widest mb-6">
                    Site Walkthrough Videos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedProject.videos.map((vidUrl, index) => (
                      <div key={index} className="relative rounded-sm border border-white/10 overflow-hidden bg-black aspect-video group shadow-xl">
                        <video
                          src={vidUrl}
                          controls
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 bg-charcoal/80 text-gold text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-gold/15 backdrop-blur-sm">
                          Walkthrough Video {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case-Study Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-ivory border-t border-white/10 pt-12">
                {/* Left block */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                  <div>
                    <h4 className="font-heading text-xl text-gold mb-3 font-semibold">
                      Project Overview
                    </h4>
                    <p className="font-body text-sm text-ivory/80 leading-relaxed font-light">
                      {selectedProject.overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-gold mb-3 font-semibold">
                      The Layout Challenge
                    </h4>
                    <p className="font-body text-sm text-ivory/80 leading-relaxed font-light">
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>

                {/* Right Specs panel */}
                <div className="lg:col-span-4 bg-white/5 border border-white/15 p-8 flex flex-col gap-6 rounded-sm">
                  <div className="flex items-start gap-3">
                    <Calendar size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gold/60 uppercase tracking-wider block font-semibold">Timeline</span>
                      <span className="font-body text-sm font-semibold">{selectedProject.timeline}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gold/60 uppercase tracking-wider block font-semibold">Materials Used</span>
                      <span className="font-body text-xs font-light leading-relaxed">{selectedProject.materials}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PenTool size={18} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gold/60 uppercase tracking-wider block font-semibold">Design Concept</span>
                      <span className="font-body text-xs font-light leading-relaxed">{selectedProject.concept}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Block */}
              {selectedProject.testimonial && (
                <div className="mt-16 bg-white/5 border border-gold/15 p-10 relative rounded-sm text-ivory shadow-lg">
                  <MessageSquare className="text-gold mb-4" size={24} />
                  <p className="font-display text-lg italic leading-relaxed text-ivory/95 mb-6">
                    "{selectedProject.testimonial}"
                  </p>
                  <div>
                    <h5 className="font-heading text-sm text-ivory font-semibold">{selectedProject.clientName}</h5>
                    <span className="font-body text-[9px] text-gold uppercase tracking-wider">Verified Client</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm border border-gold/15 shadow-2xl"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-8 right-8 p-3.5 bg-white/10 hover:bg-gold hover:text-charcoal text-white rounded-full border border-white/15 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
