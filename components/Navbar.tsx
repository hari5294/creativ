import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Work', href: '#services' },       // Goes to Work Category
  { label: 'Services', href: '#pricing' },    // Goes to Production Budget
  { label: 'About', href: '#about' },         // NEW: Goes to About Section
  { label: 'Contact', href: '#footer' },      // Goes to Bottom/Footer
  { label: 'Pricing', href: '#pricing' },     // Goes to Production Budget
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust scroll handler to prevent page reloads/crashes
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Stop default anchor behavior
    setMobileOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkBg/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#" className="block" onClick={(e) => handleNavClick(e, 'root')}>
          <img 
            src="https://lh3.googleusercontent.com/d/1wmV6OdoBMk9i7ytHMziLApcpWCdN0pV-" 
            alt="Crea8tiv" 
            className="h-8 md:h-10 object-contain" 
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-creativeBlue text-sm uppercase tracking-widest transition-colors duration-300 font-mono cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2 border border-creativeBlue text-creativeBlue hover:bg-creativeBlue hover:text-white transition-all duration-300 rounded-sm uppercase text-xs tracking-widest font-bold cursor-pointer shadow-[0_0_10px_rgba(50,138,202,0.2)] hover:shadow-[0_0_15px_rgba(50,138,202,0.5)]"
          >
            Let's Cut
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-darkBg border-b border-white/10 p-6 md:hidden flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg text-gray-300 hover:text-creativeBlue font-mono cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;