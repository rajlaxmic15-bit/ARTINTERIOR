import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scope: "Residential Design",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        scope: "Residential Design",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-ivory text-charcoal">
      {/* Contact Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Contact Us Hero"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="font-body text-xs text-gold uppercase tracking-[0.3em] mb-2 block font-semibold">
            GET IN TOUCH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ivory font-light">
            Contact Our Design Studio
          </h1>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="bg-white border border-gold/10 p-10 md:p-12 shadow-lg rounded-sm text-left">
                  <h2 className="font-display text-2xl sm:text-3xl font-light mb-2">
                    Request a Consultation
                  </h2>
                  <p className="font-body text-xs text-grey-dark mb-8 font-light">
                    Provide your workspace coordinates and styling scope, and our lead designer will contact you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-body text-[10px] uppercase tracking-wider text-charcoal font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="px-4 py-3 bg-beige/40 border border-gold/10 focus:border-gold outline-none text-xs rounded-sm transition-colors font-light"
                          placeholder="e.g. Rahul Deshmukh"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="font-body text-[10px] uppercase tracking-wider text-charcoal font-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="px-4 py-3 bg-beige/40 border border-gold/10 focus:border-gold outline-none text-xs rounded-sm transition-colors font-light"
                          placeholder="e.g. +91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-body text-[10px] uppercase tracking-wider text-charcoal font-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="px-4 py-3 bg-beige/40 border border-gold/10 focus:border-gold outline-none text-xs rounded-sm transition-colors font-light"
                          placeholder="e.g. rahul@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="scope" className="font-body text-[10px] uppercase tracking-wider text-charcoal font-semibold">
                          Project Scope
                        </label>
                        <select
                          id="scope"
                          name="scope"
                          value={formData.scope}
                          onChange={handleChange}
                          className="px-4 py-3 bg-beige/40 border border-gold/10 focus:border-gold outline-none text-xs rounded-sm transition-colors font-light"
                        >
                          <option>Residential Design</option>
                          <option>Modular Kitchen</option>
                          <option>Complete Renovation</option>
                          <option>Commercial Design</option>
                          <option>Hospitality Design</option>
                          <option>Bespoke Furniture</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-body text-[10px] uppercase tracking-wider text-charcoal font-semibold">
                        Design requirements or questions *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="px-4 py-3 bg-beige/40 border border-gold/10 focus:border-gold outline-none text-xs rounded-sm transition-colors font-light resize-none"
                        placeholder="Describe your design goals, timeline, and space coordinates..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className="px-8 py-4 bg-gold hover:bg-gold-light text-charcoal font-body text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm flex items-center justify-center gap-2 mt-4"
                    >
                      {submitted ? (
                        <>
                          <Check size={14} /> Submitted Successfully
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-12 text-left">
              <AnimatedSection delay={0.2}>
                <h2 className="font-display text-2xl sm:text-3xl font-light mb-8">
                  Art Interiorz Studio
                </h2>
                
                <div className="flex flex-col gap-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-beige rounded-sm border border-gold/10">
                      <MapPin className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-charcoal mb-1">Office Location</h4>
                      <p className="font-body text-xs text-grey-dark leading-relaxed font-light">
                        Plot No 13, Suprabhat Apartments, 1st floor,<br />
                        Shilpa Society, Somalwada, Nagpur, MH 440015
                      </p>
                      <p className="font-body text-xs text-gold mt-1 font-medium">
                        T-Point: Manish Nagar, Nagpur
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-beige rounded-sm border border-gold/10">
                      <Phone className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-charcoal mb-1">Direct Call</h4>
                      <a href="tel:+919545002017" className="font-body text-xs text-grey-dark hover:text-gold transition-colors font-light">
                        +91 95450 02017
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-beige rounded-sm border border-gold/10">
                      <Mail className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-charcoal mb-1">Inquiries Email</h4>
                      <a href="mailto:artinteriorz17@gmail.com" className="font-body text-xs text-grey-dark hover:text-gold transition-colors font-light">
                        artinteriorz17@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 bg-beige rounded-sm border border-gold/10">
                      <Clock className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-semibold text-charcoal mb-1">Business Hours</h4>
                      <p className="font-body text-xs text-grey-dark font-light">
                        Monday &ndash; Saturday: 10:00 AM &ndash; 7:30 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section with Grayscale Luxury Styling Overlay */}
      <section className="relative w-full h-[500px] border-t border-gold/10 bg-beige overflow-hidden">
        <iframe
          title="Art Interiorz Office Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1s0x3bd4c09d57545b7f%3A0xc3c50965e64ea9bc!2sPlot+No+13%2C+Shilpa+Society%2C+Somalwada%2C+Nagpur%2C+Maharashtra+440015!5m2!1sen!2sin!5m2!1sen!2sin"
          className="w-full h-full border-none grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-6 left-6 bg-charcoal text-ivory px-6 py-4 border border-white/10 shadow-2xl rounded-sm text-left">
          <span className="font-body text-[10px] text-gold uppercase tracking-widest font-semibold block mb-1">VISIT US</span>
          <span className="font-heading text-sm font-semibold">Art Interiorz Somalwada Office</span>
        </div>
      </section>
    </div>
  );
}
