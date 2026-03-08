import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section className="relative bg-[#080808] overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImage} alt="background" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-[#080808]/40 to-[#080808]" />
      </div>

      {/* scanline */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)"
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        {/* Ticker */}
        <div className="bg-[#8b0000] px-4 py-1.5 mb-10 inline-flex items-center gap-3">
          <AlertTriangle size={12} className="text-white shrink-0" />
          <p className="text-white text-xs font-mono tracking-widest uppercase">
            Guaranteed to be a Hit — Just like this website
          </p>
        </div>

        <div className="max-w-4xl">
          <div className="text-[#8b0000] font-mono text-xs uppercase tracking-widest mb-4">
            ▌ CLASSIFIED SERVICES NETWORK
          </div>

          <h1 className="text-white font-mono uppercase tracking-tight mb-6 leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Need Someone<br />
            <span className="text-[#cc0000]">Taken Care Of?</span>
          </h1>

          <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mb-4 leading-relaxed">
            RentAHitman.com is operated by a freelance digital specialist offering discreet problem-elimination services. From stubborn bugs to cluttered interfaces and underperforming websites, contracts are handled efficiently and without loose ends.
          </p>

          <p className="text-gray-700 font-mono text-xs max-w-xl mb-10 leading-relaxed border-l-2 border-[#8b0000] pl-4">
            Dynamic, striking, 100% hit guaranteed.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/contact"
              className="bg-[#8b0000] hover:bg-[#a00000] text-white font-mono text-sm px-8 py-3.5 uppercase tracking-widest transition-colors border border-[#cc0000]/50">
              REQUEST A HIT
            </Link>
            <Link to="/services"
              className="border border-gray-700 hover:border-[#8b0000] text-gray-400 hover:text-white font-mono text-sm px-8 py-3.5 uppercase tracking-widest transition-colors">
              VIEW SERVICES
            </Link>
          </div>

          <div className="flex flex-wrap gap-10">
            {[
              { label: "Contracts Completed", value: "17" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Avg. Deployment", value: "48 hrs" },
              { label: "Active Operator", value: "1" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-mono">{stat.value}</div>
                <div className="text-gray-600 font-mono text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}