import floatLogo from "../assets/float-into-wellness-logo.jpg";

const BRAND_SKY = "#0EA5E9";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand + NAP */}
          <div>
            <img
              src={floatLogo}
              alt="Float Into Wellness"
              width={56}
              height={56}
              className="h-14 w-14 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-bold text-white mb-2">Float Into Wellness</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Woodbridge, NJ's wellness sanctuary — offering flotation tank therapy,
              infrared sauna, salt room, and holistic healing for complete mind-body restoration.
            </p>
            <address className="not-italic text-sm text-gray-400 space-y-1">
              <p>Woodbridge, NJ</p>
              <a
                href="mailto:FloatIntoWellness@gmail.com"
                className="block mt-2 hover:text-sky-400 transition-colors"
                style={{ color: BRAND_SKY }}
                aria-label="Email Float Into Wellness"
              >
                FloatIntoWellness@gmail.com
              </a>
            </address>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND_SKY }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white transition-colors text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-white transition-colors text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>

            <h3
              className="text-sm font-semibold uppercase tracking-wider mt-6 mb-3"
              style={{ color: BRAND_SKY }}
            >
              Services
            </h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Flotation Tank Therapy</li>
              <li>Infrared Sauna</li>
              <li>Salt Room / Halotherapy</li>
              <li>Holistic Healing</li>
              <li>Wellness Programs</li>
            </ul>
          </div>

          {/* Column 3 — Hours */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND_SKY }}
            >
              Hours of Operation
            </h3>
            <dl className="text-sm text-gray-400 space-y-2">
              <div className="flex justify-between gap-4">
                <dt>Monday – Friday</dt>
                <dd className="text-white font-medium whitespace-nowrap">By Appointment</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Saturday – Sunday</dt>
                <dd className="text-white font-medium whitespace-nowrap">By Appointment</dd>
              </div>
            </dl>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Sessions are by appointment. Book online or{" "}
              <button
                onClick={() => scrollToSection("contact")}
                className="underline hover:text-gray-300 transition-colors focus:outline-none"
                style={{ color: BRAND_SKY }}
              >
                contact us
              </button>{" "}
              to schedule.
            </p>
          </div>

          {/* Column 4 — Sister Brands */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: BRAND_SKY }}
            >
              Our Sister Brands
            </h3>
            <nav aria-label="Sister brand links">
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.wantasmoothie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Visit Want A Smoothie website"
                  >
                    <span aria-hidden="true" style={{ color: BRAND_SKY }}>→</span>
                    Want A Smoothie
                  </a>
                  <p className="text-gray-600 text-xs mt-0.5 ml-5">Fresh smoothies &amp; healthy food</p>
                </li>
                <li>
                  <a
                    href="https://www.bouncebackfit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Visit Bounce Back Fitness website"
                  >
                    <span aria-hidden="true" style={{ color: BRAND_SKY }}>→</span>
                    Bounce Back Fitness
                  </a>
                  <p className="text-gray-600 text-xs mt-0.5 ml-5">Corrective &amp; functional training</p>
                </li>
                <li>
                  <a
                    href="https://www.cre8balance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    aria-label="Visit Cre8 Balance website"
                  >
                    <span aria-hidden="true" style={{ color: BRAND_SKY }}>→</span>
                    Cre8 Balance
                  </a>
                  <p className="text-gray-600 text-xs mt-0.5 ml-5">Cannabis wellness &amp; dispensary</p>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Float Into Wellness. All rights reserved.
          </p>
          <p>
            Wellness Spa &middot; Woodbridge, NJ &middot; Recovery for body and mind
          </p>
        </div>
      </div>
    </footer>
  );
}
