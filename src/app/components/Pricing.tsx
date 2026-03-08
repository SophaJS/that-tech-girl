import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "ASSOCIATE",
    clearance: "Level 1",
    price: "$49/mo",
    tagline: "For the casually wronged",
    features: [
      { text: "1 contract per month", included: true },
      { text: "Standard operator assignment", included: true },
      { text: "Digital operations only", included: true },
      { text: "Email debrief post-contract", included: true },
      { text: "Priority operator selection", included: false },
      { text: "Live operation tracking", included: false },
      { text: "Custom contract design", included: false },
    ],
    cta: "ENLIST",
    highlight: false,
  },
  {
    name: "OPERATIVE",
    clearance: "Level 3",
    price: "$149/mo",
    tagline: "For those with a list",
    features: [
      { text: "4 contracts per month", included: true },
      { text: "Priority operator assignment", included: true },
      { text: "Digital + IRL operations", included: true },
      { text: "24-hr emergency deployment", included: true },
      { text: "Encrypted client portal", included: true },
      { text: "Monthly threat assessment", included: true },
      { text: "Custom contract design", included: false },
    ],
    cta: "GO OPERATIVE",
    highlight: true,
  },
  {
    name: "SHADOW",
    clearance: "OMEGA",
    price: "$499/mo",
    tagline: "For those who operate at scale",
    features: [
      { text: "Unlimited contracts", included: true },
      { text: "Dedicated operator on retainer", included: true },
      { text: "Full spectrum operations", included: true },
      { text: "1-hour emergency deployment", included: true },
      { text: "Live GPS operator tracking", included: true },
      { text: "Annual threat landscape review", included: true },
      { text: "Custom contract design", included: true },
    ],
    cta: "GO DARK",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a0a0a] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">MEMBERSHIP TIERS — SELECT YOUR CLEARANCE</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          All plans include full client deniability and a complimentary burner email
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative border flex flex-col p-6 ${
              tier.highlight ? "border-[#8b0000] bg-[#8b0000]/5" : "border-[#1a1a1a] bg-[#080808]"
            }`}>
              {tier.highlight && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-[#8b0000]" />
              )}
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8b0000] px-4 py-1">
                  <span className="text-white font-mono text-xs uppercase tracking-widest whitespace-nowrap">MOST CONTRACTS</span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-[#8b0000] font-mono text-xs uppercase tracking-widest mb-1">
                  CLEARANCE: {tier.clearance}
                </div>
                <div className="text-white font-mono uppercase tracking-wider text-xl mb-1">{tier.name}</div>
                <div className="text-gray-600 font-mono text-xs italic mb-4">{tier.tagline}</div>
                <div className="text-white font-mono text-3xl">{tier.price}</div>
              </div>

              <div className="space-y-2.5 flex-1 mb-8">
                {tier.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    {f.included
                      ? <Check size={12} className="text-[#8b0000] shrink-0" />
                      : <X size={12} className="text-gray-700 shrink-0" />
                    }
                    <span className={`font-mono text-xs ${f.included ? "text-gray-400" : "text-gray-700"}`}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 font-mono text-xs uppercase tracking-widest border transition-all ${
                tier.highlight
                  ? "bg-[#8b0000] border-[#8b0000] hover:bg-[#a00000] text-white"
                  : "border-[#8b0000]/40 hover:border-[#8b0000] hover:bg-[#8b0000]/10 text-gray-500 hover:text-white"
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 font-mono text-xs mt-8 leading-relaxed">
          All memberships auto-renew. Cancellation must be requested via certified mail to a PO box in Liechtenstein. 
          This is intentional.
        </p>
      </div>
    </section>
  );
}
