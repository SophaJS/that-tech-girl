import { useState } from "react";
import { Send, AlertTriangle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    clientName: "",
    targetUrl: "",
    contract: "",
    urgency: "",
    brief: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#8b0000] text-gray-400 font-mono text-xs px-4 py-3 outline-none transition-colors placeholder:text-gray-800";

  if (submitted) {
    return (
      <section id="contact" className="bg-[#080808] py-20 border-t border-[#111]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="border border-[#8b0000] bg-[#8b0000]/5 p-12">
            <div className="w-12 h-12 bg-[#8b0000] flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-mono text-xl">✕</span>
            </div>
            <div className="text-[#cc0000] font-mono text-xs uppercase tracking-widest mb-4">
              CONTRACT ACCEPTED — OPERATOR ASSIGNED
            </div>
            <h3 className="text-white font-mono text-xl uppercase tracking-wider mb-4">
              The Build Is In Motion
            </h3>
            <p className="text-gray-500 font-mono text-xs leading-relaxed mb-6">
              A proposal is being prepared based on your brief. Estimated response:{" "}
              <span className="text-[#cc0000]">within 24 hours</span>.
            </p>
            <p className="text-gray-700 font-mono text-xs">
              Check your inbox. The details will be there. 
              Don't share them with your current web developer.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#080808] py-20 border-t border-[#111]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">SECURE CONTRACT SUBMISSION</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          Encrypted. Confidential. Discretion guaranteed.
        </p>

        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8">
          <div className="flex items-start gap-3 bg-[#8b0000]/8 border border-[#8b0000]/20 p-4 mb-8">
            <AlertTriangle size={13} className="text-[#8b0000] shrink-0 mt-0.5" />
            <p className="text-gray-600 font-mono text-xs leading-relaxed">
              <span className="text-[#cc0000]">NOTICE:</span> All services are conducted strictly within digital environments. Any "eliminations" refer exclusively to removing bad code, poor UX, and slow performance from websites.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-[#8b0000] font-mono text-xs uppercase tracking-wider block mb-1">
                  Client / Organization
                </label>
                <p className="text-gray-700 font-mono text-xs mb-2">Who is requesting the contract?</p>
                <input
                  type="text"
                  name="clientName"
                  value={form.clientName}
                  onChange={handleChange}
                  placeholder="The client"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="text-[#8b0000] font-mono text-xs uppercase tracking-wider block mb-1">
                  Target Location
                </label>
                <p className="text-gray-700 font-mono text-xs mb-2">Primary website or digital property involved</p>
                <input
                  type="text"
                  name="targetUrl"
                  value={form.targetUrl}
                  onChange={handleChange}
                  placeholder="yoursite.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-[#8b0000] font-mono text-xs uppercase tracking-wider block mb-2">
                  Requested Operation
                </label>
                <select name="contract" value={form.contract} onChange={handleChange} className={inputClass} required>
                  <option value="" disabled>Select contract type...</option>
                  <option>Target Acquisition</option>
                  <option>Site Infiltration</option>
                  <option>Silent Cleanup</option>
                  <option>Weapon Upgrade</option>
                  <option>Identity Fabrication</option>
                  <option>Infiltration & Integration</option>
                  <option>Custom Operation</option>
                </select>
              </div>
              <div>
                <label className="text-[#8b0000] font-mono text-xs uppercase tracking-wider block mb-2">
                  Priority Level
                </label>
                <select name="urgency" value={form.urgency} onChange={handleChange} className={inputClass} required>
                  <option value="" disabled>Select priority...</option>
                  <option>Standard</option>
                  <option>Urgent</option>
                  <option>Immediate</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[#8b0000] font-mono text-xs uppercase tracking-wider block mb-2">
                Mission Brief & Intelligence
              </label>
              <textarea
                name="brief"
                value={form.brief}
                onChange={handleChange}
                rows={5}
                placeholder="Provide details about the situation.&#10;What problems are you experiencing?&#10;Who is the intended audience?&#10;What outcome would you consider a successful operation?&#10;&#10;The more intel provided, the cleaner the execution."
                className={inputClass + " resize-none"}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8b0000] hover:bg-[#a00000] text-white font-mono text-sm py-4 uppercase tracking-widest transition-colors flex items-center justify-center gap-3 border border-[#cc0000]/50"
            >
              <Send size={13} />
              SUBMIT CONTRACT — INITIATE OPERATION
            </button>

            <p className="text-center text-gray-700 font-mono text-xs">
              Response typically within 24 hours.
              <br />No obligation required. No disruption to your current development team.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
