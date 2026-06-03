import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Star, Shield, Award, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "350+", label: "Projects Completed" },
    { number: "100%", label: "Happy Homeowners" },
    { number: "15+", label: "Design Awards" },
  ];

  const whyChooseUs = [
    {
      title: "Personalized Approach",
      desc: "Every concept is tailored to match your specific lifestyle, preferences, and ergonomic comforts.",
      icon: <Users className="text-gold" size={28} />,
    },
    {
      title: "Premium Materials",
      desc: "We curate high-durability luxury materials for long-lasting aesthetics and structural integrity.",
      icon: <Award className="text-gold" size={28} />,
    },
    {
      title: "Expert Management",
      desc: "End-to-end execution supervised by certified project managers with zero headache on your side.",
      icon: <Shield className="text-gold" size={28} />,
    },
    {
      title: "Transparent Pricing",
      desc: "Detailed custom budget sheets matching your design scope with absolutely zero hidden charges.",
      icon: <CheckCircle className="text-gold" size={28} />,
    },
  ];

  const services = [
    {
      title: "Residential Design",
      desc: "Stunning modern home interiors designed from living spaces to private luxury bedrooms.",
      image: "/KUMARE_S/LIVING ROOM1.2.jpg",
    },
    {
      title: "Modular Kitchen",
      desc: "Highly functional L-shaped, U-shaped and straight kitchen modules built for optimal utility.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Complete Renovation",
      desc: "Transforming obsolete spaces into state-of-the-art contemporary interior masterpieces.",
      image: "/KUMARE_S/BEDROOM1.1.jpg",
    },
    {
      title: "Hospitality Design",
      desc: "Inviting lobbies, boutique restaurants, and premium guest suites that maximize occupant comfort.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Project Signup & Consultation",
      desc: "Aligning on layout preferences, budgeting constraints, and styling expectations.",
    },
    {
      num: "02",
      title: "Design Presentation & 3D Renders",
      desc: "Delivering realistic 3D visualizations so you can review room flows in detail.",
    },
    {
      num: "03",
      title: "Design Sign-Off & Detail Drawings",
      desc: "Finalizing execution blueprints, electrical plans, and material selections.",
    },
    {
      num: "04",
      title: "Modular Production & Installation",
      desc: "Supervising on-site carpentry, modular assemblies, and lighting integrations.",
    },
    {
      num: "05",
      title: "Final Handover",
      desc: "Quality inspections, styling checks, and delivering your dream luxury home.",
    },
  ];

  const testimonials = [
    {
      name: "Rohit & Smita Deshmukh",
      role: "Homeowners, Manish Nagar",
      text: "Art Interiorz transformed our 3 BHK into a stunning modern sanctuary. Their attention to detail, custom modular kitchen design, and transparent costing made the entire process completely stress-free.",
    },
    {
      name: "Abhishek Sharma",
      role: "Commercial Client, Somalwada",
      text: "We hired Kapil and his team for our office redesign. The space planning is incredibly functional, and they finalized the project right on time. Highly recommended for premium interior services.",
    },
    {
      name: "Dr. Pallavi Joshi",
      role: "Villa Owner, Nagpur",
      text: "Their execution and project management are unmatched. They delivered exactly what they showed us in the 3D renders. Absolutely in love with our living room and master bedroom layout!",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="/KUMARE_S/LIVING ROOM1.1.jpg"
            alt="Luxury Interior Background"
            className="w-full h-full object-cover opacity-50 animate-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-4 block font-semibold">
              Nagpur's Premier Luxury Interior Studio
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-ivory font-light mb-6 leading-[1.1] tracking-tight">
              Where Dream Homes Begin <br />
              <span className="italic text-gold font-serif">with Thoughtful Design</span>
            </h1>
            <p className="font-body text-base md:text-lg text-ivory/80 mb-10 max-w-xl font-light leading-relaxed">
              We craft bespoke, elegant, and functional luxury interiors tailored to your life's unique rhythm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-gold hover:bg-gold-light text-charcoal font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm text-center"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 hover:border-gold hover:text-gold text-ivory font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm text-center bg-black/20 backdrop-blur-sm"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Ambient bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Brand Introduction */}
      <section className="py-28 bg-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <AnimatedSection>
                <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                  ESTABLISHED 2017
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-light leading-tight mb-8">
                  Innovative Interiors Backed by Years of Craftsmanship
                </h2>
                <p className="font-body text-sm md:text-base text-grey-dark leading-relaxed mb-6 font-light">
                  Art Interiorz is a full-service design firm assisting clients with a wide range of challenges, including the selection of architectural details and finishes, collaborating with builders, and decorating functional, beautiful spaces with tailor-made furniture, fabrics, and accessories.
                </p>
                <p className="font-body text-sm md:text-base text-grey-dark leading-relaxed mb-8 font-light">
                  A firm with both interior design and architectural services cuts costs, centralizes responsibility, and leads to a better outcome—a seamless transition between external and internal design. We are committed to delivering more than just realistic images.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest font-semibold text-gold hover:text-charcoal transition-colors group"
                >
                  Read Our Story{" "}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6 relative">
              <AnimatedSection delay={0.2}>
                <div className="aspect-[4/3] bg-beige overflow-hidden rounded-sm border border-gold/15 relative group">
                  <img
                    src="/FANDI_S/LIVING ROOM 1.jpg.jpeg"
                    alt="Luxury interior design process"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-charcoal/10" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-8 -left-8 bg-charcoal text-ivory p-8 border border-white/5 shadow-2xl hidden md:block">
                  <span className="block font-display text-3xl text-gold font-light">8+ Years</span>
                  <span className="font-body text-[9px] text-ivory/60 uppercase tracking-widest font-semibold">
                    Of Creating Masterpieces
                  </span>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-charcoal text-ivory py-16 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="font-display text-4xl md:text-5xl text-gold font-light mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-[10px] md:text-xs text-ivory/60 uppercase tracking-widest font-light">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR PROMISE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Why We're the Right Choice for Your Space
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="bg-white p-8 border border-gold/10 hover:border-gold/30 rounded-sm shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col items-start text-left">
                  <div className="bg-ivory p-4 rounded-sm border border-gold/5 mb-6">
                    {card.icon}
                  </div>
                  <h3 className="font-heading text-xl text-charcoal mb-4 font-semibold">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR EXPERTISE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Bringing You the Best in Design
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest font-semibold text-gold hover:text-charcoal transition-colors mt-4 md:mt-0"
              >
                View All Services{" "}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group bg-white border border-gold/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 rounded-sm h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-beige relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow text-left">
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-3 font-semibold group-hover:text-gold transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-28 bg-charcoal text-ivory relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gold/[0.02] mix-blend-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-24">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR METHODOLOGY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-ivory font-light">
                The Luxury Journey
              </h2>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Timeline center line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[1px] bg-white/10 hidden lg:block" />

            <div className="flex flex-col gap-16 lg:gap-24">
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <AnimatedSection key={idx}>
                    <div className={`flex flex-col lg:flex-row items-center justify-between ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}>
                      {/* Text */}
                      <div className="w-full lg:w-[45%] text-left">
                        <span className="font-display text-4xl text-gold font-light mb-4 block">
                          {step.num}
                        </span>
                        <h3 className="font-heading text-xl text-ivory mb-3 font-semibold">
                          {step.title}
                        </h3>
                        <p className="font-body text-xs md:text-sm text-ivory/60 leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>

                      {/* Icon connector center dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-charcoal border border-gold flex items-center justify-center text-[10px] text-gold font-bold hidden lg:flex">
                        {idx + 1}
                      </div>

                      {/* Spacer for layout */}
                      <div className="w-full lg:w-[45%] hidden lg:block" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-beige/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
              TESTIMONIALS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light mb-16">
              Words From Our Clients
            </h2>
          </AnimatedSection>

          <div className="relative bg-white p-10 md:p-16 border border-gold/10 shadow-lg rounded-sm text-left">
            <Star className="text-gold mb-6 fill-gold" size={24} />
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-lg sm:text-xl text-charcoal italic leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <h4 className="font-heading text-base text-charcoal font-semibold">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="font-body text-[11px] text-gold uppercase tracking-wider">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </motion.div>

            {/* Slider controls */}
            <div className="flex gap-3 justify-end mt-8 border-t border-gold/10 pt-6">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 border border-gold/20 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-charcoal transition-all rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 border border-gold/20 hover:border-gold hover:bg-gold/5 flex items-center justify-center text-charcoal transition-all rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-charcoal text-ivory relative text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-charcoal z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-4 block font-semibold">
              READY FOR EXCELLENCE?
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-light mb-8 leading-tight">
              Start Your Luxury Home Journey Today
            </h2>
            <p className="font-body text-sm text-ivory/60 max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Connect with our layout planners and design team to map out space coordinates and bespoke styling models.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=919545002017&text=Hello%20Art%20Interiorz,%20I'd%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-gold hover:bg-gold-light text-charcoal font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm"
            >
              Book a Free Consultation
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
