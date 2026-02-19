import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";
import floatLogo from "../assets/float-into-wellness-logo.jpg";
import floatHeroLogo from "../assets/float-into-wellness-hero-logo.jpg";

export default function FloatIntoWellness() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        if (event.data.includes("formResponse") || 
            event.data.includes("fbzv") || 
            event.data.includes("formSubmitted")) {
          setIsSubmitted(true);
        }
      }
    };

    const checkInterval = setInterval(() => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const iframeDoc = iframe.contentWindow.document;
          if (iframeDoc.querySelector('.freebirdFormviewerViewResponseConfirmationMessage')) {
            setIsSubmitted(true);
            clearInterval(checkInterval);
          }
        } catch (e) {
          try {
            const currentSrc = iframe.contentWindow.location.href;
            if (currentSrc && currentSrc.includes('formResponse')) {
              setIsSubmitted(true);
              clearInterval(checkInterval);
            }
          } catch (e2) {
          }
        }
      }
    }, 500);

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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ "--brand-color": "#0EA5E9" } as React.CSSProperties}>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <img 
                src={floatLogo} 
                alt="Float Into Wellness Logo"
                className="h-12 w-12 object-cover rounded-full"
              />
              <span className="text-2xl font-bold" style={{ color: "#0EA5E9" }}>Float Into Wellness</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:opacity-75 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:opacity-75 font-medium">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:opacity-75 font-medium">Contact</button>
              <Button 
                onClick={() => window.open('https://calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS', '_blank')}
                className="text-white font-semibold"
                style={{ backgroundColor: "#0EA5E9" }}
                data-testid="button-book-now"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[600px] bg-gradient-to-br from-sky-200 to-teal-300 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:justify-start md:pl-12">
                <img 
                  src={floatHeroLogo} 
                  alt="Float Into Wellness Logo"
                  className="w-80 h-80 object-contain drop-shadow-xl"
                />
              </div>
              
              <div className="text-white text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                  Float Into Wellness
                </h1>
                <p className="text-xl md:text-2xl mb-4 font-semibold drop-shadow-md">
                  Wellness All In One Spot
                </p>
                <p className="text-lg md:text-xl mb-8 drop-shadow-md leading-relaxed">
                  Flotation Tank, Infrared Sauna, and Salt Room,<br/>
                  Holistic Healing, Salt Therapy and more
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => scrollToSection('services')}
                    className="text-white font-bold px-8 py-4 text-lg shadow-lg"
                    style={{ backgroundColor: "#0EA5E9" }}
                    data-testid="button-view-services"
                  >
                    Explore Services
                  </Button>
                  <Button 
                    onClick={() => window.open('https://calendly.com/PLACEHOLDER_FLOAT_INTO_WELLNESS', '_blank')}
                    className="text-teal-600 font-bold px-8 py-4 text-lg shadow-lg bg-white hover:bg-gray-100 transition-colors"
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

      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Wellness Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-sky-50 to-white border border-sky-100" data-testid="card-flotation">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
                <span className="text-white font-bold text-3xl">🌊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Flotation Tank</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience weightless relaxation in our sensory deprivation tanks filled with therapeutic Epsom salt water for deep mental and physical recovery.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-orange-50 to-white border border-orange-100" data-testid="card-sauna">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EA580C" }}>
                <span className="text-white font-bold text-3xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Infrared Sauna</h3>
              <p className="text-gray-600 leading-relaxed">
                Detoxify and rejuvenate with our full-spectrum infrared saunas that penetrate deep into tissues for therapeutic healing and wellness.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-pink-50 to-white border border-pink-100" data-testid="card-salt">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#EC4899" }}>
                <span className="text-white font-bold text-3xl">🧂</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Salt Room</h3>
              <p className="text-gray-600 leading-relaxed">
                Breathe in therapeutic Himalayan salt particles to support respiratory health, reduce inflammation, and promote natural healing.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-green-50 to-white border border-green-100" data-testid="card-holistic">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#059669" }}>
                <span className="text-white font-bold text-3xl">🌿</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Holistic Healing</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive wellness treatments that address mind, body, and spirit through natural and integrative healing approaches.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-purple-50 to-white border border-purple-100" data-testid="card-therapy">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#7C3AED" }}>
                <span className="text-white font-bold text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Salt Therapy</h3>
              <p className="text-gray-600 leading-relaxed">
                Halotherapy sessions using pharmaceutical-grade salt to cleanse airways, boost immunity, and improve overall respiratory wellness.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-cyan-50 to-white border border-cyan-100" data-testid="card-wellness">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0891B2" }}>
                <span className="text-white font-bold text-3xl">🧘</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Wellness Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Customized wellness packages combining multiple therapies for optimal health, relaxation, and personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About Float Into Wellness
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Float Into Wellness is your sanctuary for complete mind-body restoration. Our comprehensive wellness center combines ancient healing wisdom with modern therapeutic technologies to create transformative experiences. From our state-of-the-art flotation tanks to our therapeutic salt rooms, every service is designed to help you disconnect from daily stress and reconnect with your natural state of wellness and vitality.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-24 h-24 text-cyan-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600">We will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Contact Float Into Wellness
                </h2>
                <p className="text-lg text-gray-600">
                  Have questions about float sessions or wellness packages? Reach out and we'll reply shortly.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl bg-white max-w-3xl mx-auto border-4 border-cyan-500 relative">
                <div 
                  className="absolute top-0 left-0 right-0 bg-white z-10"
                  style={{ height: '120px' }}
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
                  data-testid="form-contact-float"
                  style={{ border: 'none', marginTop: '-120px' }}
                >
                  Loading…
                </iframe>
              </div>
            </>
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h3 className="text-2xl font-bold mb-4">Float Into Wellness</h3>
    <p className="text-gray-300 mb-6">Recovery for body and mind</p>
    <p className="text-gray-400 text-sm">
      © 2026 Float Into Wellness. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}
