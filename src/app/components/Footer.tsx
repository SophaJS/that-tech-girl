export function Footer() {
  return (
    <footer className="bg-[#040404] border-t border-[#8b0000]/20 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-[#8b0000] flex items-center justify-center">
                <span className="text-white font-mono text-xs">✕</span>
              </div>
              <span className="text-white font-mono text-sm uppercase tracking-widest">
                RentAHitman<span className="text-[#8b0000]">.org</span>
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="text-gray-600 font-mono text-xs">cleanupcontracts@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#111] pt-6 text-center">
          <p className="text-gray-700 font-mono text-xs">
            © 2024–2026 RentAHitman.org. One operator. All contracts fulfilled.
          </p>
        </div>
      </div>
    </footer>
  );
}
