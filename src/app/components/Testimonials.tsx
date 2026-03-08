const testimonials = [
  {
    quote:
      "My brother-in-law hadn't left our shared Netflix account in THREE YEARS. Within 48 hours of placing the contract, he somehow found himself locked out, his profile deleted, and suddenly paying for his own Hulu. I asked no questions. I paid the invoice. That's it.",
    name: "K.F.",
    location: "Phoenix, AZ",
    contract: "The Spotify Purge (Netflix Variant)",
    stars: 5,
  },
  {
    quote:
      "I needed to leave a dinner party hosted by my wife's coworker. The food was bad, the wine was worse, and someone was explaining NFTs. The operator called posing as 'a close friend with a gas leak.' We were out in 11 minutes. I wept in the Uber. Tears of joy.",
    name: "D.R.",
    location: "Chicago, IL",
    contract: "The Dinner Party Extraction",
    stars: 5,
  },
  {
    quote:
      "Todd from accounting had been taking credit for my reports for 18 months. I hired THE ACCOUNTANT. Within two months, Todd had been assigned to a 'special project' nobody could define, his desk moved near the printer, and his parking spot reallocated. I promoted myself.",
    name: "Anonymous",
    location: "Dallas, TX",
    contract: "Career Assassination (Todd Package)",
    stars: 5,
  },
  {
    quote:
      "I was removed from a group chat in 2021 and I still think about it. I later found out it was someone else's ex using this website. I'm giving 5 stars because I genuinely respect the professionalism. I had no idea. Absolutely no idea.",
    name: "M.J. (the target)",
    location: "Seattle, WA",
    contract: "The Group Chat Hit",
    stars: 5,
  },
  {
    quote:
      "WHISPER did things to my ex's TikTok algorithm that I don't fully understand and am not sure are legal. All I know is that every ad she sees is now for adjustable orthopedic mattresses and investment seminars. She texted me asking if I was okay. I am. I am now.",
    name: "T.B.",
    location: "Austin, TX",
    contract: "Social Media Neutralization",
    stars: 5,
  },
  {
    quote:
      "I used the Full Disappearance package on myself. I needed a clean break from my own digital past. The operator removed me from 14 group chats, soft-blocked 38 people I'd been meaning to unfollow since 2019, and rewrote my LinkedIn bio. I am a new person.",
    name: "L.P. (self-targeted)",
    location: "Portland, OR",
    contract: "The Full Disappearance",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#080808] py-20 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-[#8b0000]/50" />
          <h2 className="text-[#8b0000] font-mono text-xs uppercase tracking-widest">INTERCEPTED CLIENT TRANSMISSIONS</h2>
          <div className="h-px flex-1 bg-[#8b0000]/50" />
        </div>
        <p className="text-center text-gray-700 font-mono text-xs uppercase tracking-widest mb-12">
          Identities protected. Outcomes verified. Satisfaction confirmed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] p-5 flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#8b0000]">★</span>
                ))}
              </div>
              <blockquote className="text-gray-500 font-mono text-xs leading-relaxed italic flex-1 mb-4">
                "{t.quote}"
              </blockquote>
              <div className="border-t border-[#1a1a1a] pt-3 flex items-end justify-between">
                <div>
                  <div className="text-gray-400 font-mono text-xs">{t.name}</div>
                  <div className="text-gray-700 font-mono text-xs">{t.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#8b0000] font-mono text-xs leading-relaxed max-w-[140px]">{t.contract}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#1a1a1a] p-4 text-center">
          <p className="text-gray-700 font-mono text-xs">
            All testimonials are fictional and written for comedic purposes. 
            Any resemblance to actual corporate sabotage is purely aspirational.
          </p>
        </div>
      </div>
    </section>
  );
}
