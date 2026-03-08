interface OperatorsProps {
  img1: string;
  img2: string;
  img3: string;
}

const operators = [
  {
    codename: "THE ACCOUNTANT",
    specialty: "Corporate Sabotage, Tax Complexity",
    contracts: 2841,
    rating: 4.9,
    bio: "Former Big Four auditor who discovered a natural talent for professional disruption. Operates exclusively within the bounds of HR policy. No target has ever been able to prove it was him. Not once.",
    status: "AVAILABLE",
    available: true,
  },
  {
    codename: "WHISPER",
    specialty: "Social Media, Passive Aggression, Group Chats",
    contracts: 5102,
    rating: 5.0,
    bio: "The most dangerous operator on the network. Whisper once caused a 14-person group chat to go silent using only three ambiguous read receipts and a perfectly timed 'seen.' Considered too effective by some clients.",
    status: "AVAILABLE",
    available: true,
  },
  {
    codename: "THE CONSULTANT",
    specialty: "Meeting Scheduling, Deadline Manipulation",
    contracts: 891,
    rating: 4.7,
    bio: "Specializes in burying targets under a mountain of calendar invites, cross-functional alignment sessions, and 'quick syncs.' Targets typically resign voluntarily within 6 weeks. He simply calls it 'corporate restructuring.'",
    status: "ON CONTRACT",
    available: false,
  },
];

export function Huggers({ img1, img2, img3 }: OperatorsProps) {
  const images = [img1, img2, img3];

  return (
    <section id="operators" className="bg-[#0a0a0a] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">ACTIVE OPERATORS — CURRENTLY DEPLOYABLE</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          Faces redacted. Identities classified. LinkedIn profiles scrubbed.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {operators.map((op, i) => (
            <div key={op.codename} className="border border-[#1a1a1a] overflow-hidden bg-[#080808]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={images[i]}
                  alt={op.codename}
                  className="w-full h-full object-cover grayscale opacity-50 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />

                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-[#8b0000]/5" />

                <div className="absolute top-3 right-3">
                  <div className={`font-mono text-xs px-2 py-0.5 border ${
                    op.available
                      ? "border-green-700 text-green-500 bg-green-900/20"
                      : "border-gray-700 text-gray-500 bg-gray-900/20"
                  }`}>
                    ● {op.status}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3">
                  <div className="bg-[#8b0000] px-2 py-0.5 inline-block">
                    <span className="text-white font-mono text-xs tracking-widest">{op.codename}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-gray-700 font-mono text-xs uppercase mb-1">Specialty</div>
                <div className="text-gray-400 font-mono text-xs mb-4">{op.specialty}</div>

                <p className="text-gray-600 font-mono text-xs leading-relaxed mb-5">{op.bio}</p>

                <div className="border-t border-[#1a1a1a] pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-gray-700 font-mono text-xs">CONTRACTS</div>
                    <div className="text-white font-mono text-sm">{op.contracts.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-700 font-mono text-xs text-right">RATING</div>
                    <div className="text-yellow-600 font-mono text-sm">★ {op.rating}</div>
                  </div>
                  <button
                    disabled={!op.available}
                    className={`font-mono text-xs px-4 py-1.5 uppercase border transition-colors ${
                      op.available
                        ? "border-[#8b0000] hover:bg-[#8b0000] text-gray-400 hover:text-white"
                        : "border-gray-800 text-gray-700 cursor-not-allowed"
                    }`}
                  >
                    {op.available ? "CONTRACT" : "DEPLOYED"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700 font-mono text-xs">
            <span className="text-[#8b0000]">289 additional operators</span> on standby. 
            Specific requests accepted. We cannot guarantee your operator will be subtle. That's not always the goal.
          </p>
        </div>
      </div>
    </section>
  );
}
