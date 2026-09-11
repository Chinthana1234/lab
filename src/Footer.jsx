import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Facebook,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white border-t border-white/10 overflow-hidden">

      {/* FULL-WIDTH BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.05),transparent_60%)]"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              CeyTech <span className="text-[#FF8C00]">Labs</span>
            </h3>
            <p className="font-body text-[#AAB8C2] text-sm leading-relaxed">
              Building modern websites, intelligent systems, and digital
              solutions for startups and growing businesses.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-white">
              Services
            </h4>
            <ul className="space-y-3 text-[#AAB8C2] text-sm">
              <li>Website Development</li>
              <li>System Automation</li>
              <li>IoT Solutions</li>
              <li>CCTV Integration</li>
              <li>Computer Networking</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-4 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-[#AAB8C2] text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@ceytechlabs.com
              </li>
              <li>Sri Lanka</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="text-[#AAB8C2] hover:text-[#FF8C00] transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/10 text-center text-sm text-[#AAB8C2]">
          © {new Date().getFullYear()} CeyTech Labs. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
