import { Link } from "react-router-dom";

const featured = [
  {
    code: "H-001",
    name: "Target Acquisition",
    method: "UX Research & Discovery",
    description:
      "Before a single line of code is written, we study the target. Market, audience, competition. We identify exactly who needs to land on your site — and what it takes to make them stay.",
    price: "From $800",
  },
  {
    code: "H-002",
    name: "Site Infiltration",
    method: "Frontend Development",
    description:
      "Precision-built, responsive, and fast. The target lands on the page. They don't know why they're clicking. They just are. Clean code. Sharp design. No trace of Bootstrap.",
    price: "From $2,400",
  },
  {
    code: "H-003",
    name: "Full Stack Execution",
    method: "Full Stack Development",
    description:
      "End-to-end. Every layer — interface, server, database, deployment. A complete operation. No loose ends. No exposed surfaces. You ship. It works. It keeps working.",
    price: "From $5,000",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-[#080808] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px flex-1 bg-[#8b0000]/30" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">SELECTED CONTRACTS</h2>
          <div className="h-px flex-1 bg-[#8b0000]/30" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          A sample of active operations. Full dossier available on request.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-[#111]">
          {featured.map((svc) => (
            <div key={svc.code} className="bg-[#080808] p-7 hover:bg-[#0d0d0d] transition-colors group">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#8b0000] font-mono text-xs tracking-widest border border-[#8b0000]/30 px-2 py-0.5">
                  {svc.code}
                </span>
                <span className="text-gray-700 font-mono text-xs">{svc.price}</span>
              </div>

              <h3 className="text-white font-mono text-sm uppercase tracking-wider mb-1 group-hover:text-[#cc0000] transition-colors">
                {svc.name}
              </h3>
              <div className="text-[#8b0000]/70 font-mono text-xs mb-4">{svc.method}</div>

              <p className="text-gray-600 font-mono text-xs leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 border border-[#8b0000]/30 hover:border-[#8b0000] text-gray-600 hover:text-gray-300 font-mono text-xs py-3 px-8 uppercase tracking-widest transition-all"
          >
            VIEW ALL CONTRACTS ▶
          </Link>
        </div>
      </div>
    </section>
  );
}
