import { CheckCircle } from "lucide-react";

export function About() {
  const credentials = [
    "Fluent in React, TypeScript, Node.js, and Postgres — I get things done.",
    "Skilled in UI/UX and performance optimization — messy sites don't stand a chance.",
    "Zero downtime deployments — seriously.",
    "Background-checked by… nobody in particular.",
    "Fully insured against accidental Comic Sans usage.",
    "Solo operator — clean, discreet, and efficient.",
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">CLASSIFIED DOSSIER</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[#8b0000] font-mono text-xs uppercase tracking-widest mb-3">ABOUT ME</div>
            <h3 className="text-white font-mono uppercase tracking-wide text-2xl mb-6">Gabriella Lou</h3>
            <div className="space-y-4 text-gray-500 font-mono text-xs leading-relaxed">
              <p>
                I'm Gabriella Lou — freelance operator specializing in precision problem elimination.
              </p>
              <p>
                I work solo. No messy teams, no interns touching your "assets," and no endless meetings debating insignificant details. Just clean work, sharp execution, and results that actually hit their target.
              </p>
              <p>
                Contracts vary. Sometimes it's a stubborn "mission" that won't behave, other times it's a "target" with a messy interface or outdated systems that need cleaning up. Whatever the challenge, I handle it quietly, efficiently, and on schedule — leaving nothing behind but smooth operations and satisfied clients.
              </p>
              <p>
                I take pride in detail. Buttons that don't respond, pages that lag, confusing layouts, or projects that are just… messy — I find them, neutralize them, and make sure everything runs like clockwork. High-pressure, delicate operations? Bring them on. Disorganized or buggy systems? Already my specialty.
              </p>
              <p className="text-gray-700 border-l-2 border-[#8b0000] pl-4">
                "Gets the job done cleanly and efficiently every time. No loose ends, no excuses."
                <br /><span className="text-gray-600">— Client Feedback / Lead Operator Rating</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-6">
              <div className="text-[#8b0000] font-mono text-xs uppercase tracking-widest mb-5">
                OPERATOR QUALIFICATIONS
              </div>
              <div className="space-y-3">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-start gap-3">
                    <CheckCircle size={13} className="text-[#8b0000] mt-0.5 shrink-0" />
                    <span className="text-gray-500 font-mono text-xs leading-relaxed">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#8b0000]/10 border border-[#8b0000]/30 p-4">
              <div className="text-[#cc0000] font-mono text-xs uppercase tracking-widest mb-2">CLARIFICATION</div>
              <p className="text-gray-600 font-mono text-xs leading-relaxed">
                This is a portfolio website for a web developer. The "hitman" framing is a creative conceit. 
                All "contracts" are web projects. All "targets" are users. All "eliminations" are bad UX patterns. 
                No actual harm has ever resulted from our work. Except to your competitors' bounce rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}