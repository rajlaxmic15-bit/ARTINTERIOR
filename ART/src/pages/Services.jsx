import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Services() {
  const serviceList = [
    {
      id: 1,
      title: "Residential Design",
      desc: "Creating stunning, highly functional, and personalized luxury interiors for apartments, custom villas, and penthouses.",
      details: "Our residential design starts by understanding your lifestyle. We map coordinates for lighting flows, choose premium textures, curate custom wardrobes, and design modern bedrooms that reflect your absolute identity.",
      image: "/KUMARE_S/LIVING ROOM1.4.jpg",
    },
    {
      id: 2,
      title: "Commercial Design",
      desc: "Designing corporate spaces, conference areas, and collaborative office designs to enhance output and luxury styling.",
      details: "We design ergonomic desks, modern soundproof conference compartments, elegant reception lobbies, and rest zones incorporating custom company coloring paradigms.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Hospitality Design",
      desc: "Atmospheric and functional interior setups for boutique hotels, premium fine-dining spots, and lounge bars.",
      details: "Delivering immersive experiences where lighting levels, custom-built tables, acoustic ceiling elements, and premium fabrics maximize guest comfort and dining aesthetics.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Landscape Design",
      desc: "Bespoke courtyard designs, custom rooftop layouts, terrace pools, and green pathways matching regional flora.",
      details: "Connecting indoor living spaces seamlessly to outdoor spaces. We layout paving schedules, select weather-resilient furniture models, and design custom planters.",
      image: "https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Interior Design",
      desc: "General interior coordination, custom material curations, mood board arrangements, and premium lighting placements.",
      details: "The core service that details materials, finishes, electrical points, flooring styles, wall cladding patterns, paint schemes, and detailed fabric lists.",
      image: "/KUMARE_S/LIVING ROOM1.5.jpg",
    },
    {
      id: 6,
      title: "Modular Kitchen",
      desc: "State-of-the-art modular straight, L-shape, U-shape, and island kitchen designs with custom built-in appliances.",
      details: "Fitted with high-end channels, anti-scratch acrylic shutter surfaces, custom quartz stone counter panels, soft-close hinges, and smart corner pullout accessories.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "Architectural Design",
      desc: "External structural plans, space alignments, zoning layouts, elevation drawings, and structural blueprints.",
      details: "Providing integrated architecture planning where elevation styles match internal room dividers. Eliminates structural redundancies and minimizes construction errors.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "Space Planning",
      desc: "Ergonomic layout alignments, clearance calculations, structural walkthroughs, and spatial flow optimization.",
      details: "Analyzing floor plans to eliminate dark spots, guarantee natural ventilation, optimize pathways, and ensure comfortable movement between private and public areas.",
      image: "/KUMARE_S/LIVING ROOM1.6.jpg",
    },
    {
      id: 9,
      title: "3D Visualization",
      desc: "Detailed photorealistic render perspectives, digital materials simulations, and 3D interior fly-through walkthroughs.",
      details: "Before initiating any civil construction, we provide highly detailed digital models showcasing lighting, shadows, wood finishes, and furniture configurations.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 10,
      title: "Renovation",
      desc: "Complete structural transformations of pre-existing older rooms or full homes into modern, luxury layouts.",
      details: "We execute clean brick teardowns, replace obsolete electrical/plumbing systems, raise ceiling profiles, modify floors, and fit new luxury modular elements.",
      image: "/KUMARE_S/BEDROOM1.3..jpg",
    },
    {
      id: 11,
      title: "Retail Space",
      desc: "Luxury product displays, storefront plans, premium styling booths, and high-impact commercial boutique designs.",
      details: "Developing layouts where shelving layouts, customer path loops, lighting angles, and product showcases align to create a high-end luxury retail brand presence.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 12,
      title: "Custom Furniture",
      desc: "Bespoke tables, premium dining sets, custom sofa structures, and luxury headboards crafted by top carpenters.",
      details: "Using solid teak woods, premium high-grade veneers, gold accents, and scratch-resistant finishes tailored exactly to the dimensions of your rooms.",
      image: "/KUMARE_S/BEDROOM 3.3.jpg",
    },
  ];

  const workflow = [
    { num: "01", title: "Consultation", desc: "Aligning styles, client ideas, and custom budget limits." },
    { num: "02", title: "Space Concept", desc: "Detailed 2D spatial zoning layouts and space coordinates." },
    { num: "03", title: "3D Visuals", desc: "High-end photorealistic modeling showing material structures." },
    { num: "04", title: "Site Execution", desc: "Bespoke manufacturing, carpentry, and lighting assemblies." },
    { num: "05", title: "Handover", desc: "Final quality inspects and styling deliveries." },
  ];

  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="/FANDI_S/LIVING ROOM 2.jpg.jpeg"
            alt="Services Hero Banner"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-2 block font-semibold">
            WHAT WE DO
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory font-light">
            Luxury Design & Execution
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR SERVICES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Comprehensive Architectural & Interior Solutions
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((svc, i) => (
              <AnimatedSection key={svc.id} delay={(i % 3) * 0.1}>
                <div className="group bg-white border border-gold/10 hover:border-gold/30 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between text-left">
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-beige relative">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-in-out"
                      />
                      <div className="absolute inset-0 bg-charcoal/5" />
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-xl text-charcoal font-semibold mb-3 group-hover:text-gold transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-body text-xs text-grey-dark leading-relaxed font-light mb-6">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-8">
                    <button
                      onClick={() => setActiveModal(svc)}
                      className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-widest text-gold hover:text-charcoal transition-colors"
                    >
                      Read Details <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-beige/30 border-y border-gold/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR METHOD
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Luxury Horizontal Workflow
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {workflow.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 border border-gold/10 rounded-sm relative h-full flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md">
                  <div>
                    <span className="font-display text-3xl text-gold font-light block mb-4">
                      {item.num}
                    </span>
                    <h3 className="font-heading text-lg text-charcoal font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-charcoal text-ivory text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-4 block font-semibold">
              ELEVATE YOUR SPACE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-light mb-8 leading-tight">
              Ready to Design Your Masterpiece?
            </h2>
            <p className="font-body text-sm text-ivory/60 max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Connect with Nagpur's leading turnkey interior design agency. We translate layouts, coordinate materials, and deliver premium results.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=919545002017&text=Hello%20Art%20Interiorz,%20I'd%20like%20to%20inquire%20about%20your%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gold hover:bg-gold-light text-charcoal font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm"
            >
              Book a Free Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full border border-gold/20 shadow-2xl relative rounded-sm overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-white hover:text-gold bg-black/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-6 left-8 text-left">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white font-semibold">
                    {activeModal.title}
                  </h3>
                </div>
              </div>
              <div className="p-8 text-left">
                <h4 className="font-body text-[11px] text-gold uppercase tracking-wider font-semibold mb-3">
                  Service Details & Execution Scope
                </h4>
                <p className="font-body text-sm text-grey-dark leading-relaxed mb-6 font-light">
                  {activeModal.details}
                </p>
                <div className="border-t border-gold/10 pt-6">
                  <h5 className="font-body text-xs font-semibold text-charcoal mb-4 uppercase tracking-wider">
                    What we cover:
                  </h5>
                  <div className="grid grid-cols-2 gap-3 text-xs text-grey-dark font-light">
                    <div className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Materials Inspection
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Space Clearance Coordinates
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Detailed 3D Modeling
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={14} className="text-gold" /> Dedicated Supervisor
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
