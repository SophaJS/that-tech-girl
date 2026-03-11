import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-[#080808] border-b border-[#8b0000]/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-[#8b0000] flex items-center justify-center">
            <span className="text-white font-mono text-xs">✕</span>
          </div>
          <div>
            <div className="text-white tracking-widest text-sm font-mono uppercase">
              RentAHitman<span className="text-[#8b0000]">.org</span>
            </div>
            <div className="text-gray-600 text-xs font-mono tracking-wider">
              Clean work. No loose ends.
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive ? "text-[#cc0000]" : "text-gray-500 hover:text-[#cc0000]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <a
          href="mailto:cleanupcontracts@gmail.com"
          className="hidden md:flex items-center gap-2 bg-[#8b0000] hover:bg-[#a00000] transition-colors px-3 py-1.5"
        >
          <Mail size={11} className="text-white" />
          <span className="text-white text-xs font-mono tracking-wider">DISPATCH</span>
        </a>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#8b0000]/40 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive ? "text-[#cc0000]" : "text-gray-500 hover:text-[#cc0000]"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:cleanupcontracts@gmail.com"
            className="flex items-center gap-2 bg-[#8b0000] px-3 py-1.5 w-fit"
          >
            <Mail size={11} className="text-white" />
            <span className="text-white text-xs font-mono tracking-wider">DISPATCH</span>
          </a>
        </div>
      )}
    </nav>
  );
}
