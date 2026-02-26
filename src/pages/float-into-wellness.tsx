import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";
import floatHeroLogo from "../assets/float-into-wellness-hero-logo.jpg";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Update BOOKING_URL when Calendly or booking link is confirmed
const BOOKING_URL = "https://calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS";

const services = [
  {
    id: "flotation",
    emoji: "🌊",
    color: "#0EA5E9",
    bgClass: "from-sky-50 to-white border-sky-100",
    title: "Flotation Tank",
    description:
      "Experience weightless relaxation in our sensory deprivation tanks filled with therapeutic Epsom salt water for deep mental and physical recovery.",
  },
  {
    id: "sauna",
    emoji: "🔥",
    color: "#EA580C",
    bgClass: "from-orange-50 to-white border-orange-100",
    title: "Infrared Sauna",
    description:
      "Detoxify and rejuvenate with our full-spectrum infrared saunas that penetrate deep into tissues for therapeutic healing and wellness.",
  },
  {
    id: "salt",
    emoji: "🧂",
    color: "#EC4899",
    bgClass: "from-pink-50 to-white border-pink-100",
    title: "Salt Room",
    description:
      "Breathe in therapeutic Himalayan salt particles to support respiratory health, reduce inflammation, and promote natural healing.",
  },
  {
    id: "holistic",
    emoji: "🌿",
    color: "#059669",
    bgClass: "from-green-50 to-white border-green-100",
    title: "Holistic Healing",
    description:
      "Comprehensive wellness treatments that address mind, body, and spirit through natural and integrative healing approaches.",
  },
  {
    id: "therapy",
    emoji: "✨",
    color: "#7C3AED",
    bgClass: "from-purple-50 to-white border-purple-100",
    title: "Salt Therapy",
    description:
      "Halotherapy sessions using pharmaceutical-grade salt to cleanse airways, boost immunity, and improve overall respiratory wellness.",
  },
  {
    id: "wellness",
    emoji: "🧘",
    color: "#0891B2",
    bgClass: "from-cyan-50 to-white border-cyan-100",
    title: "Wellness Programs",
    description:
      "Customized wellness packages combining multiple therapies for optimal health, relaxation, and personal transformation.",
  },
];

export default function FloatIntoWellness() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Method 1: Listen for postMessage events from Google Forms
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        if (
          event.data.includes("formResponse") ||
          event.data.includes("fbzv") ||
          event.data.includes("formSubmitted")
        ) {
          setIsSubmitted(true);
        }
      }
    };

    // Method 2: Poll for Google Forms confirmation page element
    const checkInterval = setInterval(() => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const iframeDoc = iframe.contentWindow.document;
          if (iframeDoc.querySelector(".freebirdFormviewerViewResponseConfirmationMessage")) {
            setIsSubmitted(true);
            clearInterval(checkInterval);
          }
        } catch {
          try {
            const currentSrc = iframe.contentWindow.location.href;
            if (currentSrc && currentSrc.includes("formResponse")) {
              setIsSubmitted(true);
              clearInterval(checkInterval);
            }
          } catch {
            // Cross-origin blocked — continue polling
          }
        }
      }
    }, 500);

    // Method 3: Detect iframe reload triggered by form submission
    const iframe = iframeRef.current;
    let loadCount = 0;
    const handleLoad = () => {
      loadCount++;
      if (loadCount >= 2) {
        setTimeout(() => {
          setIsSubmitted(true);
        }, 1000);
      }
    };

    window.addEventListener("message", handleMessage);
    if (iframe) {
      iframe.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(checkInterval);
      if (iframe) {
        iframe.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">

      {/* ── Navigation ──────────────────────────────────── */}
      <Navigation />

      <main>

        {/* ── Hero Section ────────────────────────────────── */}
        <section
          className="relative min-h-[600px] bg-gradient-to-br from-sky-200 to-teal-300 flex items-center"
          aria-label="Welcome to Float Into Wellness"
        >
          <div className="absolute inset-0 bg-black bg-opacity-20" aria-hidden="true"></div>
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">

                {/* Hero image */}
                <div className="flex justify-center md:justify-start md:pl-12">
                  <img
                    src={floatHeroLogo}
                    alt="Float Into Wellness — Wellness All In One Spot"
                    className="w-80 h-80 object-contain drop-shadow-xl"
                    width={320}
                    height={320}
                    loading="eager"
                  />
                </div>

                {/* Hero text */}
                <div className="text-white text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                    Float Into Wellness
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 font-semibold drop-shadow-md">
                    Wellness All In One Spot
                  </p>
                  <p className="text-lg md:text-xl mb-8 drop-shadow-md leading-relaxed">
                    Flotation Tank, Infrared Sauna, and Salt Room,<br />
                    Holistic Healing, Salt Therapy and more
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button
                      onClick={() => scrollToSection("services")}
                      className="text-white font-bold px-8 py-4 text-lg shadow-lg"
                      style={{ backgroundColor: "#0EA5E9" }}
                      aria-label="View our wellness services"
                      data-testid="button-view-services"
                    >
                      Explore Services
                    </Button>
                    <Button
                      onClick={() => window.open(BOOKING_URL, "_blank")}
                      className="text-teal-600 font-bold px-8 py-4 text-lg shadow-lg bg-white hover:bg-gray-100 transition-colors"
                      aria-label="Book your wellness session"
                      data-testid="button-book-float"
                    >
                      Book Session
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Section ─────────────────────────────── */}
        <section id="services" className="py-16 bg-white" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Our Wellness Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className={`text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b ${service.bgClass} border card-hover`}
                  data-testid={`card-${service.id}`}
                >
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-3xl" role="img" aria-label={service.title}>
                      {service.emoji}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </article>
              ))}
            </div>

            {/* Services CTA */}
            <div className="text-center mt-12">
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="text-white font-bold px-10 py-4 text-lg shadow-lg"
                style={{ backgroundColor: "#0EA5E9" }}
                aria-label="Book a session at Float Into Wellness"
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </section>

        {/* ── About Section ────────────────────────────────── */}
        <section id="about" className="py-16 bg-gray-50" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
              About Float Into Wellness
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Float Into Wellness is your sanctuary for complete mind-body restoration in Woodbridge, NJ.
              Our comprehensive wellness center combines ancient healing wisdom with modern therapeutic
              technologies to create transformative experiences. From our state-of-the-art flotation tanks
              to our therapeutic salt rooms, every service is designed to help you disconnect from daily
              stress and reconnect with your natural state of wellness and vitality.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 px-8 py-3 text-lg rounded-lg transition-all font-semibold"
              style={{ borderColor: "#0EA5E9", color: "#0EA5E9" }}
              aria-label="Contact Float Into Wellness"
            >
              Get In Touch
            </Button>
          </div>
        </section>

        {/* ── Contact Section ───────────────────────────────── */}
        <section id="contact" className="py-16 bg-white" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <div className="text-center" role="status" aria-live="polite">
                <div className="flex justify-center mb-6">
                  <CheckCircle2 className="w-24 h-24 text-cyan-500" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600">We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2
                    id="contact-heading"
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  >
                    Contact Float Into Wellness
                  </h2>
                  <p className="text-lg text-gray-600">
                    Have questions about float sessions or wellness packages? Reach out and we'll reply
                    shortly.
                  </p>
                </div>

                <div
                  className="rounded-xl overflow-hidden shadow-2xl bg-white max-w-3xl mx-auto relative"
                  style={{ border: "4px solid #0EA5E9" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 bg-white z-10"
                    style={{ height: "120px" }}
                    aria-hidden="true"
                  ></div>
                  <iframe
                    ref={iframeRef}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfsA-AXUtZ6_HQpJKSezAbikG76_fuMQp3_RJ-ZGRYutoemMQ/viewform?embedded=true&hl=en"
                    width="100%"
                    height="1100"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    loading="lazy"
                    title="Float Into Wellness Contact Form"
                    aria-label="Contact form for Float Into Wellness"
                    data-testid="form-contact-float"
                    style={{ border: "none", marginTop: "-120px" }}
                  >
                    Loading…
                  </iframe>
                </div>
              </>
            )}
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
