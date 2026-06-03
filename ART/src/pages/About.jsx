import { motion } from "framer-motion";
import { Award, Compass, Eye, Heart } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  const founders = [
    {
      name: "Mr. Kapil Thakur",
      role: "Co-Founder & Lead Architect",
      desc: "An visionary architect committed to merging structural constraints with elegant designs. Kapil oversees project specifications, technical engineering, and site execution structures.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mrs. Kratika Thakur",
      role: "Co-Founder & Creative Director",
      desc: "A passionate designer specialized in mood configurations, premium fabric styling, and custom furniture curation. Kratika ensures every finished space matches our luxury standards.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const milestones = [
    { year: "2017", title: "The Beginning", desc: "Art Interiorz founded in Nagpur with a vision to integrate architecture and luxury decoration under one single billing roof." },
    { year: "2019", title: "100+ Homes Handed Over", desc: "Rapidly established trust as the leading design agency in Manish Nagar and Somalwada areas." },
    { year: "2022", title: "Bespoke Furniture Line", desc: "Launched customized wooden manufacturing modules delivering custom-built sofas and custom closets." },
    { year: "2025", title: "Nagpur's Landmark Firm", desc: "Recognized as the premier firm for turnkey residential and modular kitchen installations." },
  ];

  const values = [
    {
      title: "Trust & Transparency",
      desc: "Complete itemized invoicing matching custom budget parameters. Absolutely zero hidden prices.",
      icon: <Award className="text-gold" size={28} />,
    },
    {
      title: "Premium Craftsmanship",
      desc: "Meticulous carpentry, premium raw woods, and durable surface coatings applied by master artisans.",
      icon: <Compass className="text-gold" size={28} />,
    },
    {
      title: "Innovation & Aesthetics",
      desc: "Blending modular conveniences with classic materials for timeless layout designs that stay fresh for decades.",
      icon: <Eye className="text-gold" size={28} />,
    },
    {
      title: "Customer Satisfaction",
      desc: "Delivering continuous updates and maintaining close feedback loops throughout client engagements.",
      icon: <Heart className="text-gold" size={28} />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="/KUMARE_S/LIVING ROOM1.8.jpg"
            alt="About Us Banner"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-2 block font-semibold">
            OUR STORY
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory font-light">
            Designing Dreams Since Day One
          </h1>
        </div>
      </section>

      {/* Magazine-Style Story Section */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <AnimatedSection>
                <div className="aspect-[3/4] bg-beige overflow-hidden border border-gold/10 relative shadow-xl rounded-sm">
                  <img
                    src="/KUMARE_S/LIVING ROOM1.9.jpg"
                    alt="Creative workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/5" />
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 text-left order-1 lg:order-2">
              <AnimatedSection>
                <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light mb-6">
                  Where Dream Homes Begin
                </h2>
                <p className="font-body text-sm md:text-base text-grey-dark leading-relaxed mb-6 font-light">
                  Since 2017, Art Interiorz has been motivated by a singular desire to better serve our customers. We understand the deep value of establishing true, lasting relationships with our clients, and we embrace the opportunities we have to create their dream homes. Customer service is the cornerstone of our company.
                </p>
                <p className="font-body text-sm md:text-base text-grey-dark leading-relaxed mb-6 font-light">
                  A firm that integrates both interior design and architectural execution cuts unnecessary costs, centralizes construction responsibility, and leads to a significantly better outcome. It guarantees a seamless transition between external structural limits and internal design flow.
                </p>
                <p className="font-body text-sm md:text-base text-grey-dark leading-relaxed font-light">
                  We don't believe in generic design. Every house we structure is tailored uniquely to the lifestyle, preferences, and ergonomic comforts of its owners.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-28 bg-beige/30 border-y border-gold/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                LEADERSHIP TEAM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Meet the Founders
              </h2>
              <p className="font-body text-xs md:text-sm text-grey-dark max-w-lg mx-auto mt-4 font-light leading-relaxed">
                Guiding Art Interiorz towards excellence with combined expertise in architecture and modern design styling.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <div className="bg-white border border-gold/10 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                  <div className="aspect-[4/5] overflow-hidden bg-beige relative">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-8 text-left flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-heading text-xl text-charcoal font-semibold mb-1">
                        {founder.name}
                      </h3>
                      <span className="font-body text-[10px] text-gold uppercase tracking-widest font-semibold block mb-4">
                        {founder.role}
                      </span>
                      <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                        {founder.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-charcoal text-ivory p-12 border border-white/5 shadow-xl h-full flex flex-col justify-between rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-4 block font-semibold">
                    THE VISION
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-ivory font-light mb-6">
                    Bespoke Living Environments
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ivory/65 leading-relaxed font-light">
                    To be Nagpur's most trusted luxury design studio, crafting bespoke living environments that reflect modern elegance, structural safety, and unique user personalities.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-12 border border-gold/10 shadow-lg h-full flex flex-col justify-between rounded-sm">
                <div>
                  <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-4 block font-semibold">
                    THE MISSION
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-light mb-6">
                    Precision & Execution
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-grey-dark leading-relaxed font-light">
                    Integrating architectural precision with design style. Centralizing project responsibility to deliver budget-friendly luxury without compromise, transforming houses into true designer spaces.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-28 bg-beige/20 border-t border-gold/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR PATH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Company Journey
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                <div className="bg-white p-8 border border-gold/10 hover:border-gold rounded-sm shadow-sm h-full flex flex-col justify-between text-left transition-all duration-500">
                  <div>
                    <span className="font-display text-4xl text-gold font-light block mb-4">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-lg text-charcoal mb-2 font-semibold">
                      {m.title}
                    </h3>
                    <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <span className="font-body text-xs text-gold uppercase tracking-[0.25em] mb-2 block font-semibold">
                OUR CODE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-light">
                Values We Hold Close
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 border border-gold/5 bg-white/50 hover:bg-white rounded-sm transition-all duration-300 text-left h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="mb-6">{v.icon}</div>
                    <h3 className="font-heading text-lg text-charcoal font-semibold mb-2">
                      {v.title}
                    </h3>
                    <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
