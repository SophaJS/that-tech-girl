import { Link } from "react-router-dom";

const services = [
  {
    code: "H-001",
    name: "Target Acquisition",
    description:
      "We study the target before a single line of code is written. Market, audience, competition — every detail is accounted for so visitors arrive and stay, exactly where we want them.",
    threat: "CRITICALLY EFFECTIVE",
    threatColor: "text-[#cc0000]",
    method: "UX Research & Discovery",
    price: "From $250",
  },
  {
    code: "H-002",
    name: "Site Infiltration",
    description:
      "We embed ourselves deep in your digital presence. A clean, precision-built frontend: responsive, fast, and invisible to the naked eye in its sophistication. The target lands on the page. They don't know why they're staying. They don't know why they're clicking. They just are.",
    threat: "CRITICALLY EFFECTIVE",
    threatColor: "text-[#cc0000]",
    method: "Frontend Development",
    price: "From $400",
  },
  {
    code: "H-003",
    name: "Silent Cleanup",
    description:
      "Messy layouts, cluttered pages, confusing flows — we neutralize them all. The interface becomes intuitive, clear, and precise. No traces of confusion remain.",
    threat: "HIGHLY SPECIALIZED",
    threatColor: "text-yellow-500",
    method: "UI / Layout Refinement",
    price: "From $300",
  },
  {
    code: "H-004",
    name: "Weapon Upgrade",
    description:
      "Slow pages are vulnerable. We tighten code, optimize load times, and make your site lightning fast across devices. Every click is precise and deliberate.",
    threat: "STRATEGICALLY OPTIMIZED",
    threatColor: "text-orange-400",
    method: "Performance Optimization",
    price: "From $350",
  },
  {
    code: "H-005",
    name: "Identity Fabrication",
    description:
      "Some targets need a new identity. Logos, typography, color systems, and reusable UI components are carefully crafted so your digital presence looks like it always belonged in the field.",
    threat: "COMPLETE OVERHAUL",
    threatColor: "text-[#cc0000]",
    method: "Branding & UI Systems",
    price: "From $450",
  },
  {
    code: "H-006",
    name: "Infiltration & Integration",
    description:
      "We connect your tools, CMS, and analytics without disrupting the mission. Everything works seamlessly, quietly, and efficiently.",
    threat: "SILENT OPERATIONS",
    threatColor: "text-green-500",
    method: "CMS / Tool Integration",
    price: "From $300",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#080808] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">AVAILABLE CONTRACTS</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          All operations delivered on time. No exceptions. No excuses. No survivors.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111]">
          {services.map((svc) => (
            <div key={svc.code} className="bg-[#080808] p-6 hover:bg-[#0d0d0d] transition-colors group flex flex-col h-full min-h-[340px]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#8b0000] font-mono text-xs tracking-widest border border-[#8b0000]/40 px-2 py-0.5">
                  {svc.code}
                </span>
                <span className={`font-mono text-xs ${svc.threatColor}`}>● {svc.threat}</span>
              </div>

              <h3 className="text-white font-mono text-sm uppercase tracking-wider mb-3 group-hover:text-[#cc0000] transition-colors">
                {svc.name}
              </h3>

              <p className="text-gray-600 font-mono text-xs leading-relaxed mb-5 flex-grow">{svc.description}</p>

              <div className="border-t border-[#111] pt-4 flex items-center justify-between">
                <div>
                  <div className="text-gray-700 font-mono text-xs uppercase">Method</div>
                  <div className="text-gray-500 font-mono text-xs">{svc.method}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-700 font-mono text-xs uppercase">Contract Fee</div>
                  <div className="text-[#cc0000] font-mono text-sm">{svc.price}</div>
                </div>
              </div>

              <Link to="/contact" className="mt-4 w-full border border-[#8b0000]/30 hover:border-[#8b0000] hover:bg-[#8b0000]/10 text-gray-600 hover:text-gray-300 font-mono text-xs py-2 uppercase tracking-widest transition-all flex items-center justify-center">
                PLACE CONTRACT
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#1a1a1a] p-4 text-center">
          <p className="text-gray-700 font-mono text-xs">
            Custom contracts available. Scope discussed in a secure initial consultation. 
            <span className="text-[#cc0000]"> We do not do Wix.</span>
          </p>
        </div>
      </div>
    </section>
  );
}