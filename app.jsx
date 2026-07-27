const { useState, useEffect, useRef } = React;
const { motion, useScroll, useTransform, AnimatePresence } = window.Motion;

// --- DUMMY ICONS (SVG) ---
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);
const Molecule = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="5" cy="19" r="2" /><path d="M14.5 10.5 17.5 6.5" /><path d="M9.5 10.5 6.5 6.5" /><path d="M14.5 13.5 17.5 17.5" /><path d="M9.5 13.5 6.5 17.5" /></svg>
);
const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5" /><path d="M3.477 10.896a4 4 0 0 1 .585-.396" /><path d="M19.938 10.5a4 4 0 0 1 .585.396" /><path d="M6 18a4 4 0 0 1-1.967-.516" /><path d="M19.967 17.484A4 4 0 0 1 18 18" /></svg>
);
const Dna = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 8 18" /><path d="m16 3-8 18" /><path d="M10 7.5h4" /><path d="M9 12h6" /><path d="M10 16.5h4" /></svg>
);
const Search = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

// --- COMPONENTS ---

const SectionDivider = () => (
  <div className="diamond-divider w-full">
    <div className="diamond"></div>
  </div>
);

const NewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
);



const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'People', href: '#team' },
  { label: 'Glimpse', href: '#glimpse' },
  { label: 'Publications', href: '#publications' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bone/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] py-3 md:py-4 border-b border-olive-200/20' : 'bg-transparent py-4 md:py-6'}`}
      >
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center h-20">
          <a href="#" className="flex items-center group flex-shrink-0">
            {/* Logo */}
            <div className="relative flex items-center">
              <img src="Ashoka_University_logo_with_wordmark.png" alt="Ashoka University" className="h-10 md:h-12 lg:h-[3.25rem] object-contain" />
            </div>

            <div className="hidden md:block h-10 lg:h-[3.5rem] w-[1px] bg-gray-300 mx-4 lg:mx-6 group-hover:bg-gray-400 transition-colors duration-300"></div>

            {/* Lab Name */}
            <div className="hidden md:flex flex-col justify-center flex-shrink-0">
              <h1 className="font-sans text-[1.1rem] lg:text-[1.4rem] text-ink leading-[1.2] tracking-tight font-extrabold">
                Computational Disease<br />
                Genomics Group
              </h1>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-6 xl:space-x-8 font-sans text-[0.7rem] xl:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-gray-900">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="relative group py-2">
                <span className="group-hover:text-gold-600 transition-colors duration-300">{item.label}</span>
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="bg-[#0f1110] text-gray-100 px-6 xl:px-7 py-3 rounded-full shadow-md hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-300 ml-2 xl:ml-4 whitespace-nowrap">
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-olive-200/30 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-ink rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[55] lg:hidden"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-bone shadow-2xl z-[56] lg:hidden flex flex-col"
            >
              <div className="pt-28 px-8 flex-1 flex flex-col">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="text-ink font-sans text-sm font-bold uppercase tracking-[0.15em] py-3 px-4 rounded-lg hover:bg-olive-200/30 hover:text-gold-700 transition-all duration-300 border-b border-olive-200/20"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.a
                  href="mailto:tanmoy.roychowdhury@ashoka.edu.in"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-8 bg-ink text-bone text-center font-sans text-xs font-bold uppercase tracking-[0.15em] py-4 rounded-full shadow-lg hover:bg-olive-800 transition-all duration-300"
                >
                  Contact Us
                </motion.a>
              </div>

              {/* Branding at bottom of drawer */}
              <div className="px-8 pb-8">
                <div className="border-t border-olive-200/30 pt-6">
                  <p className="font-serif text-sm text-muted italic">Computational Disease<br/>Genomics Group</p>
                  <p className="text-[0.6rem] text-muted/60 mt-2 uppercase tracking-wider">Ashoka University</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity1 = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-bone">
      {/* Abstract Animated Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-sage-200/40 mix-blend-multiply blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gold-200/30 mix-blend-multiply blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-olive-200/30 mix-blend-multiply blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\\'40\\' height=\\'40\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%236B705C\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'/></svg>')] opacity-50"></div>

        {/* Small Decorative Dark Elements - Top Right */}
        <div className="absolute top-24 right-10 lg:right-20 z-0 hidden sm:flex gap-4 opacity-70">
          <div className="w-1 h-1 rounded-full bg-olive-800"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-ink"></div>
          <div className="w-1 h-1 rounded-full bg-gold-700"></div>
        </div>
        <div className="absolute top-32 right-12 lg:right-32 z-0 hidden sm:block opacity-40 text-olive-800">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M2 12h20" /></svg>
        </div>
        <div className="absolute top-16 right-40 z-0 hidden sm:block w-2 h-2 rotate-45 border border-ink opacity-40"></div>
        <div className="absolute top-48 right-12 lg:right-20 z-0 hidden sm:grid grid-cols-5 gap-2 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-[3px] h-[3px] rounded-full bg-ink"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-12 pt-8 md:pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Hero Text */}
          <motion.div
            style={{ y: y1, opacity: opacity1 }}
            className="lg:col-span-7 z-20 pt-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="text-[3.2rem] sm:text-6xl md:text-8xl lg:text-[6.5rem] font-serif text-ink leading-[1.05] tracking-tight mb-6 md:mb-8"
            >
              Decoding<br />
              <span className="text-olive-600 italic font-light relative mr-4">
                genomes
                {/* Decorative underline */}
                <svg className="absolute w-full h-8 -bottom-3 left-0 text-gold-400 opacity-60 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,22 100,5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
              </span>
              for <br /> health
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-muted text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed font-light mb-6 md:mb-8"
            >
              {SITE_CONTENT.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#about" className="inline-flex items-center gap-2 bg-ink text-bone font-medium rounded-full px-6 py-4 md:px-10 md:py-5 tracking-widest text-[0.65rem] md:text-[0.7rem] uppercase shadow-2xl hover:bg-olive-800 hover:shadow-none transition-all duration-300 transform hover:-translate-y-1">
                Explore The Lab
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visuals: DNA Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[400px] md:min-h-[500px] lg:min-h-[650px] h-full"
            style={{ transform: 'translateY(-80px)' }}
          >
            {/* New People DNA Illustration (Center offset to avoid overlap) */}
            <div
              className="absolute w-[130%] h-[130%] flex items-center justify-center pointer-events-none"
              style={{ zIndex: 5, transform: 'translateX(-12%) translateY(0%)' }}
            >
              <img
                src="imageye___-_imgi_2_population-health-SLCHC-scaled-2560x1280.jpg"
                alt="People in DNA structure"
                className="w-full h-auto object-contain mix-blend-multiply opacity-90 transition-all"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
                  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
                  filter: 'contrast(1.05) saturate(1.1)'
                }}
              />
            </div>
            {/* DNA helix */}
            <div
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
              style={{ zIndex: 15, transform: 'scale(2.4)', transformOrigin: 'center center', maxWidth: '1000px' }}
            >
              <img
                src="hero_genomics.png"
                alt="Genomics and molecular biology illustration"
                className="w-full h-auto object-contain mix-blend-multiply transition-all"
                style={{
                  opacity: 0.95,
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 68%)',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 68%)',
                  filter: 'contrast(1.15) saturate(1.1)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-olive-400 z-20"
      >
        <ChevronDown />
      </motion.div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 12s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-20 md:py-32 lg:py-40 px-4 md:px-6 lg:px-12 bg-cream relative overflow-hidden">
    {/* Subtle decorative background */}
    <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-gold-200/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-[25%] h-[25%] bg-sage-200/25 rounded-full blur-[100px] pointer-events-none"></div>

    <SectionDivider />

    <div className="max-w-5xl mx-auto mt-8 md:mt-12">
      {/* Section label */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm tracking-widest text-gold-600 font-bold uppercase mb-5 text-center"
      >
        Our Science
      </motion.h2>

      {/* Big heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink text-center leading-tight mb-6"
      >
        Genomics for <span className="text-olive-600 italic">Human Health</span>
      </motion.h3>

      {/* Gold accent divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-16 h-[2px] bg-gold-500 mx-auto mb-12 md:mb-16 origin-center"
      />

      {/* Paragraphs — each individually animated with proper spacing */}
      <div className="space-y-8 md:space-y-10">
        {SITE_CONTENT.about.paragraphs.map((para, idx) => {
          return (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="text-lg md:text-xl lg:text-[1.35rem] text-olive-800 leading-[1.85] font-light text-left sm:text-justify"
            >
              {para}
            </motion.p>
          );
        })}
      </div>
    </div>
  </section>
);

// --- Research Area Expandable Card ---
const ResearchArea = ({ area, idx, isExpanded, onToggle }) => {
  const gradientAccents = [
    'from-gold-500/20 via-gold-300/10 to-transparent',
    'from-sage-600/20 via-sage-400/10 to-transparent',
    'from-olive-600/20 via-olive-400/10 to-transparent'
  ];
  const accentDots = ['bg-gold-500', 'bg-sage-600', 'bg-olive-600'];
  const hoverGlows = [
    'group-hover:shadow-[0_20px_60px_-15px_rgba(212,168,83,0.25)]',
    'group-hover:shadow-[0_20px_60px_-15px_rgba(126,153,128,0.25)]',
    'group-hover:shadow-[0_20px_60px_-15px_rgba(107,112,92,0.25)]'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.12, duration: 0.6 }}
      className="h-full"
    >
      <button
        onClick={onToggle}
        className="w-full group h-full text-left"
      >
        <div className={`relative h-full rounded-3xl p-7 md:p-9 transition-all duration-500 overflow-hidden flex flex-col
          bg-white/60 backdrop-blur-sm border border-white/80
          hover:bg-white/90 hover:border-gold-300/40 hover:-translate-y-1
          ${hoverGlows[idx]}
          ${isExpanded ? 'bg-white/95 border-gold-400/50 shadow-[0_20px_60px_-15px_rgba(107,112,92,0.2)] -translate-y-1 ring-1 ring-gold-400/20' : 'shadow-[0_8px_30px_-12px_rgba(107,112,92,0.08)]'}
        `}>

          {/* Gradient accent blob */}
          <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${gradientAccents[idx]} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
          <div className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-tr ${gradientAccents[idx]} blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none`}></div>

          {/* Top row: Number */}
          <div className="mb-6 relative z-10">
            <span className="text-6xl font-serif text-olive-200/40 font-light select-none leading-none">0{idx + 1}</span>
          </div>

          {/* Title */}
          <h4 className="font-serif text-[1.4rem] md:text-2xl text-ink leading-snug group-hover:text-olive-800 transition-colors duration-300 mb-2 relative z-10">
            {area.title}
          </h4>

          {/* Tagline */}
          <p className="text-[0.8rem] text-muted/70 font-light leading-relaxed mb-6 relative z-10">{area.tagline}</p>

          {/* Bottom: accent dot + Read more */}
          <div className="mt-auto flex items-center gap-3 relative z-10">
            <div className={`w-2 h-2 rounded-full ${accentDots[idx]} transition-transform duration-300 group-hover:scale-150`}></div>
            <span className={`text-[0.7rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${isExpanded ? 'text-gold-600' : 'text-olive-400 group-hover:text-gold-600'}`}>
              {isExpanded ? 'Collapse' : 'Read more'}
            </span>
            <div className={`ml-auto text-olive-300 group-hover:text-gold-500 transition-all duration-300 ${isExpanded ? 'rotate-180 text-gold-500' : ''}`}>
              <ChevronDown />
            </div>
          </div>

        </div>
      </button>
    </motion.div>
  );
};

const Research = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const researchAreas = SITE_CONTENT.research.areas;
  const diseaseAreas = SITE_CONTENT.research.diseaseAreas;
  return (
    <section id="research" className="py-20 md:py-32 lg:py-40 bg-sage-50 text-ink px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[35%] h-[35%] bg-sage-200/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[25%] h-[25%] bg-gold-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-sm tracking-widest text-olive-800 font-serif uppercase mb-4">Focus Areas</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-olive-800">Our Research</h3>
          <div className="mt-8 flex justify-center opacity-50"><SectionDivider /></div>
        </div>

        {/* Research Areas — 3 horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {researchAreas.map((area, idx) => (
            <ResearchArea
              key={idx}
              area={area}
              idx={idx}
              isExpanded={expandedIdx === idx}
              onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Expanded content — notepad style, full width below the cards */}
        {expandedIdx !== null && (
          <motion.div
            key={expandedIdx}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-12 lg:mb-16"
          >
            <div className="relative bg-[#FFFEF9] border border-olive-200/40 rounded-2xl shadow-[0_15px_50px_-12px_rgba(107,112,92,0.15)] overflow-hidden">
              {/* Red margin line */}
              <div className="absolute left-10 md:left-14 top-0 bottom-0 w-[2px] bg-red-300/40 z-10 pointer-events-none"></div>
              
              {/* Notepad holes */}
              <div className="absolute left-3 md:left-5 top-8 flex flex-col gap-[2.1rem] z-10 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-bone border-2 border-olive-200/50 shadow-inner"></div>
                ))}
              </div>

              <div className="pl-14 md:pl-20 pr-6 md:pr-10 lg:pr-14 py-8 md:py-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(transparent, transparent 2.05rem, #C2C5AA33 2.05rem, #C2C5AA33 2.1rem)',
                  backgroundPositionY: '0.6rem'
                }}
              >
                <h4 className="font-handwriting text-3xl md:text-4xl text-blue-700 mb-6 font-bold">{researchAreas[expandedIdx].title}</h4>
                {researchAreas[expandedIdx].paragraphs.map((para, pIdx) => (
                  <motion.p
                    key={pIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pIdx * 0.08, duration: 0.4 }}
                    className="font-handwriting text-xl md:text-[1.35rem] text-blue-700 leading-[2.1rem] mb-4"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Disease Focus Areas — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-bone border border-olive-200/60 rounded-3xl p-8 shadow-[0_15px_40px_-15px_rgba(107,112,92,0.15)] relative overflow-hidden">
            

            {/* Subtle glow and abstract backdrop */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold-200/20 rounded-full blur-[40px] pointer-events-none z-0"></div>

            <div className="relative z-10 flex justify-between">
              
              <div className="flex-grow pb-4">
                <h4 className="text-[2rem] font-serif text-olive-800 mb-2 leading-tight">
                  Current Disease<br />
                  <span className="italic text-gold-600">Focus Areas</span>
                </h4>
                
                <p className="text-[0.7rem] font-sans uppercase tracking-widest text-muted/60 mb-8">
                  Spanning cardiovascular, respiratory, metabolic & autoimmune domains
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6">
                  {diseaseAreas.map((disease, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className="w-8 h-8 rounded-full bg-cream border border-gold-200/60 flex items-center justify-center shrink-0 group-hover:bg-gold-200/40 transition-colors duration-300">
                        <span className="w-2 h-2 rounded-full bg-orange-400 group-hover:scale-125 transition-transform duration-300"></span>
                      </div>
                      <span className="text-[1.05rem] text-olive-800 font-medium group-hover:text-ink transition-colors duration-300">{disease}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bold rounded orange line on the right */}
              <div className="w-2 bg-orange-400 rounded-full shrink-0 ml-6 md:ml-8 my-1 shadow-sm"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Premium Team Card Component ---
const TeamCard = ({ member, delay, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const hasPhoto = member.photo && member.photo.trim() !== '';

  // Curated gradient palettes for members without photos
  const gradientPalettes = [
    'linear-gradient(135deg, #2F3325 0%, #3a4a2e 30%, #4a5a3a 60%, #2F3325 100%)',
    'linear-gradient(135deg, #1a2a2e 0%, #2b3d42 30%, #3a5048 60%, #1a2a2e 100%)',
    'linear-gradient(135deg, #2d2a25 0%, #3e3830 30%, #4a4238 60%, #2d2a25 100%)',
    'linear-gradient(135deg, #252a33 0%, #333a48 30%, #3e4858 60%, #252a33 100%)',
    'linear-gradient(135deg, #2a2530 0%, #3a3040 30%, #483a50 60%, #2a2530 100%)'
  ];

  // Accent colors that pair with each gradient
  const accentColors = ['#8fae6b', '#6bb5a0', '#c4a05a', '#7b9ec7', '#b08bc4'];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yPct = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setRotateX(yPct * 12);
    setRotateY(-xPct * 12);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay || idx * 0.12, duration: 0.7, ease: 'easeOut' }}
      className="w-full h-full group"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="rounded-[1.75rem] h-[520px] relative overflow-hidden shadow-[0_8px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] transition-shadow duration-700 cursor-pointer"
      >
        {/* Card Background */}
        <div className="absolute inset-0 w-full h-full">
          {hasPhoto ? (
            <>
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
            </>
          ) : (
            <>
              {/* Rich gradient background */}
              <div className="absolute inset-0" style={{ background: gradientPalettes[idx % gradientPalettes.length] }}></div>
              
              {/* Subtle animated texture overlay */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
              
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700 blur-[60px]" style={{ background: accentColors[idx % accentColors.length] }}></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-[50px]" style={{ background: accentColors[idx % accentColors.length] }}></div>

              {/* Large elegant initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="w-32 h-32 rounded-full border border-white/[0.08] group-hover:border-white/[0.15] transition-all duration-700 group-hover:scale-110 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border border-white/[0.05] flex items-center justify-center">
                      <span className="text-5xl font-serif text-white/20 group-hover:text-white/30 transition-colors duration-500 select-none tracking-wide">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </>
          )}
        </div>

        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] z-20">
          <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ background: `linear-gradient(90deg, transparent, ${accentColors[idx % accentColors.length]}, transparent)` }}></div>
        </div>

        {/* Vertical Social Icons Bar floating near the photo */}
        <div className="absolute top-5 right-5 z-30 flex flex-col items-center gap-3.5 bg-black/40 hover:bg-black/70 backdrop-blur-md py-3.5 px-2.5 rounded-full border border-white/15 shadow-xl transition-all duration-300 group-hover:border-gold-400/40">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-white/70 hover:text-gold-400 hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noreferrer" title="GitHub" className="text-white/70 hover:text-gold-400 hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noreferrer" title="Twitter" className="text-white/70 hover:text-gold-400 hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          )}
          {member.email && (
            <a href={member.email} target="_blank" rel="noreferrer" title="Email" className="text-white/70 hover:text-gold-400 hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          )}
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-7 md:p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            
            {/* Role badge */}
            <div className="mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
              <span className="inline-block text-[0.6rem] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-white/15 text-white/70 backdrop-blur-sm bg-white/[0.05]">
                {member.role}
              </span>
            </div>

            {/* Name */}
            <h4 className="font-serif text-2xl md:text-[1.7rem] text-white leading-tight mb-1 drop-shadow-lg">
              {member.name}
            </h4>
            
            {/* Role (visible by default, hides on hover) */}
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-500/80 mb-3 group-hover:opacity-0 transition-opacity duration-300">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-white/60 font-light text-[0.8rem] leading-relaxed mb-1 line-clamp-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              {member.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const Team = () => {
  const teamMembers = SITE_CONTENT.team;
  return (
    <section id="team" className="py-16 md:py-32 px-4 md:px-6 lg:px-12 bg-cream relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 left-0 w-[30%] h-[30%] bg-sage-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[25%] h-[25%] bg-gold-200/15 rounded-full blur-[100px] pointer-events-none"></div>

      <SectionDivider />
      <div className="max-w-[85rem] mx-auto mt-8 md:mt-16 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-serif uppercase mb-4">The People</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink">Meet the Lab</h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-[2px] bg-gold-500 mx-auto mt-8 origin-center"
          />
          <p className="text-muted/60 font-light text-sm mt-6 max-w-lg mx-auto">Researchers, students, and collaborators driving genomics innovation at Ashoka University</p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 py-6 items-stretch justify-center">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="w-full">
              <TeamCard member={member} idx={idx} delay={idx * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- GlimpseCard Component (Vintage Photo Print / Polaroid Style) ---
const GlimpseCard = ({ item, idx }) => {
  const imageList = item.images && item.images.length > 0 ? item.images : (item.image ? [item.image] : []);
  const validImages = imageList.filter(img => img && img.trim() !== "");
  const hasImages = validImages.length > 0;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    if (hasImages && validImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % validImages.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [hasImages, validImages.length]);

  // Expanded alternating rotations so any number of photos look naturally scattered
  const rotations = [
    '-rotate-3 hover:rotate-0',
    'rotate-2 hover:rotate-0',
    '-rotate-1 hover:rotate-0',
    'rotate-3 hover:rotate-0',
    '-rotate-2 hover:rotate-0',
    'rotate-1 hover:rotate-0',
    '-rotate-3 hover:rotate-0',
    'rotate-2 hover:rotate-0'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      className={`relative group w-full bg-[#FFFEF9] p-4 pb-7 md:p-5 md:pb-9 rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-all duration-500 border border-stone-200/80 cursor-pointer transform ${rotations[idx % rotations.length]} hover:-translate-y-2 hover:z-30`}
    >
      {/* Photo Area with subtle inner border/shadow */}
      <div className="relative w-full aspect-[4/3] md:aspect-[1/1] rounded-lg overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
        {hasImages ? (
          <>
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIdx}
                src={validImages[currentIdx]}
                alt={`${item.title} ${currentIdx + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </AnimatePresence>
            {validImages.length > 1 && (
              <div className="absolute top-3 right-3 z-20 flex gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                {validImages.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-gold-400 w-2.5' : 'bg-white/60 w-1'}`}></div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#EAE6DF] via-[#DCD6CD] to-[#C8C1B4] flex flex-col items-center justify-center text-stone-600 relative overflow-hidden">
            {/* Vintage photo paper grain texture */}
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #555 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
            
            <div className="w-16 h-16 rounded-full bg-white/40 border border-white/60 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-500 z-10">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-700"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
            </div>
            <span className="font-sans text-[0.7rem] uppercase tracking-widest text-stone-600 font-medium z-10">Photo Placeholder</span>
          </div>
        )}
      </div>

      {/* Caption on the White Photo Paper Border (Polaroid Style) */}
      <div className="pt-5 px-2 text-center">
        <h4 className="font-handwriting text-2xl md:text-3xl text-stone-800 tracking-wide font-bold mb-1 group-hover:text-gold-700 transition-colors duration-300">{item.title}</h4>
        <p className="font-serif italic text-xs md:text-sm text-stone-500">{item.subtitle}</p>
      </div>
    </motion.div>
  );
};

// --- Glimpse Section Component ---
const Glimpse = () => {
  const items = SITE_CONTENT.glimpse;
  return (
    <section id="glimpse" className="py-16 md:py-32 bg-[#F7F5F0] text-ink px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-gold-200/20 rounded-full blur-[140px] pointer-events-none"></div>

      <SectionDivider />
      <div className="max-w-7xl mx-auto relative z-10 mt-8 md:mt-16">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-sm tracking-widest text-olive-600 font-serif uppercase mb-4">Gallery</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink">A Glimpse</h3>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-16 h-[2px] bg-gold-500 mx-auto mt-8 origin-center"
          />
          <p className="text-muted/70 font-serif italic text-base mt-6 max-w-md mx-auto">Moments, people, and spaces from our laboratory</p>
        </div>

        {/* Responsive grid wrapping cleanly for any number of photo cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${items.length <= 2 ? 'max-w-4xl' : 'lg:grid-cols-3 max-w-7xl'} mx-auto gap-8 md:gap-10 px-2 md:px-0 py-4 items-stretch justify-center`}>
          {items.map((item, idx) => (
            <GlimpseCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};



// --- PUBLICATIONS DATA ---
const publicationsData = SITE_CONTENT.publications;

const Publications = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (idx) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  // Category accent colors for visual distinction
  const categoryColors = [
    { accent: '#D4A853', bg: 'bg-gold-500' },   // Cardiovascular
    { accent: '#7E9980', bg: 'bg-sage-600' },    // Brain
    { accent: '#6B705C', bg: 'bg-olive-600' },   // Structural
    { accent: '#A67D2D', bg: 'bg-gold-700' }     // Pathogen
  ];

  return (
    <section id="publications" className="py-16 md:py-32 px-4 md:px-6 lg:px-12 bg-cream relative overflow-hidden">
      <SectionDivider />

      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-[35%] h-[35%] bg-sage-200/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[25%] h-[25%] bg-gold-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 mt-8 md:mt-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-6"
          >Publications</motion.h3>

          {/* Broad area of research */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-sm text-muted mt-4 font-light">
              {publicationsData.note}
            </p>
          </motion.div>
        </div>

        {/* Research Categories */}
        <div className="space-y-6">
          {publicationsData.categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: catIdx * 0.1 }}
            >
              {/* Category Header â€” clickable to expand */}
              <button
                onClick={() => toggleCategory(catIdx)}
                className="w-full group"
              >
                <div className={`bg-bone hover:bg-white border border-olive-200/60 hover:border-gold-400/50 rounded-xl p-5 md:p-7 transition-all duration-400 hover:shadow-[0_12px_40px_-10px_rgba(107,112,92,0.15)] relative overflow-hidden flex items-center gap-4 md:gap-6 ${expandedCategory === catIdx ? 'bg-white border-gold-400/50 shadow-[0_12px_40px_-10px_rgba(107,112,92,0.15)]' : ''}`}>
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${categoryColors[catIdx].bg} rounded-l-xl transition-all duration-500`}></div>

                  <div className="shrink-0 pl-4"></div>
                  <div className="flex-grow text-left">
                    <h4 className="font-serif text-xl md:text-2xl text-ink leading-snug group-hover:text-olive-800 transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-xs text-muted mt-1">{category.papers.length} publications</p>
                  </div>

                  {/* Expand/Collapse chevron */}
                  <div className={`text-olive-400 transition-transform duration-300 ${expandedCategory === catIdx ? 'rotate-180' : ''}`}>
                    <ChevronDown />
                  </div>
                </div>
              </button>

              {/* Expanded papers list */}
              {expandedCategory === catIdx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 space-y-3 pl-2 md:pl-6"
                >
                  {category.papers.map((pub, pubIdx) => (
                    <motion.a
                      key={pubIdx}
                      href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: pubIdx * 0.04, duration: 0.3 }}
                      className="group block"
                    >
                      <div className="bg-bone hover:bg-white border border-olive-200/40 hover:border-gold-400/40 rounded-lg p-4 md:p-6 transition-all duration-400 hover:shadow-[0_8px_30px_-8px_rgba(107,112,92,0.12)] relative overflow-hidden">
                        {/* Left accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-olive-200/40 group-hover:bg-gold-500 transition-colors duration-500 rounded-l-lg"></div>

                        <div className="pl-3">
                          {/* Number + Journal badge */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-gold-600 font-serif text-sm font-semibold">{pub.num}.</span>
                            <span className="inline-flex items-center gap-1.5 bg-olive-800 text-bone text-[0.55rem] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                              {pub.journal}
                            </span>
                            <span className="text-[0.6rem] text-muted">({pub.year})</span>
                            {pub.pmid && <span className="text-[0.55rem] text-olive-400">PMID: {pub.pmid}</span>}
                          </div>

                          {/* Title */}
                          <h5 className="font-serif text-[1rem] md:text-[1.1rem] text-ink leading-snug mb-2 group-hover:text-olive-800 transition-colors duration-300">
                            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                              {pub.title}
                            </span>
                          </h5>

                          {/* Authors */}
                          <p className="text-muted text-xs font-light leading-relaxed">
                            {pub.authors}
                          </p>
                        </div>

                        {/* External link icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-all duration-300">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-olive-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* News/Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h4 className="text-sm tracking-widest text-gold-600 font-serif uppercase mb-3">In the News</h4>
            <h5 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink">News & Highlights</h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicationsData.news.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group block"
              >
                <div className="bg-bone hover:bg-white border border-olive-200/50 hover:border-gold-400/40 rounded-xl p-5 transition-all duration-300 hover:shadow-lg relative overflow-hidden h-full">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold-400/30 group-hover:bg-gold-500 transition-colors duration-500 rounded-l-xl"></div>
                  <div className="pl-4 flex items-start gap-3">
                    <span className="text-gold-500 shrink-0 mt-0.5">
                      <NewsIcon />
                    </span>
                    <p className="text-sm text-olive-800 font-light leading-relaxed group-hover:text-ink transition-colors">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Google Scholar link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <a
            href={publicationsData.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-olive-800 hover:bg-gold-600 text-bone transition-all duration-300 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            View All on Google Scholar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-ink text-bone relative overflow-hidden">
    {/* Subtle gold glow at top */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-24 bg-gold-400/5 blur-[60px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

        {/* Contact Column */}
        <div className="md:col-span-5">
          <h3 className="text-[0.65rem] font-serif uppercase tracking-[0.3em] text-gold-500 mb-8">Contact Us</h3>

          {/* Email */}
          <a href={`mailto:${SITE_CONTENT.footer.email}`} className="group flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Email</span>
              <span className="text-[0.95rem] font-serif text-bone group-hover:text-gold-400 transition-colors duration-300 break-all">{SITE_CONTENT.footer.email}</span>
            </div>
          </a>

          {/* Lab */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Lab</span>
              <span className="text-[0.95rem] font-serif text-bone leading-relaxed">{SITE_CONTENT.footer.labName}</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Address</span>
              <span className="text-[0.95rem] font-serif text-bone leading-relaxed text-bone/80">
                {SITE_CONTENT.footer.address.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}<br />
                  </React.Fragment>
                ))}
              </span>
            </div>
          </div>
        </div>

        {/* Explore Column */}
        <div className="md:col-span-3">
          <h3 className="text-[0.65rem] font-serif uppercase tracking-[0.3em] text-gold-500 mb-8">Explore</h3>
          <nav className="flex flex-col space-y-4">
            {[
              { label: "Overview", href: "#" },
              { label: "Research", href: "#research" },
              { label: "Publications", href: "#publications" },
              { label: "People", href: "#team" },
              { label: "Glimpse", href: "#glimpse" },
            ].map((link, i) => (
              <a key={i} href={link.href} className="group flex items-center gap-3 text-bone/80 hover:text-gold-400 transition-all duration-300">
                <span className="w-4 h-px bg-white/20 group-hover:w-6 group-hover:bg-gold-400 transition-all duration-300"></span>
                <span className="text-sm font-light tracking-wide">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Logo & Branding Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end justify-between">
          <div className="text-center md:text-right">
            <img src="Ashoka_University_logo_with_wordmark.png" alt="Ashoka University Logo" className="h-16 md:h-20 object-contain mb-6 brightness-0 invert opacity-80" />
            <p className="font-serif text-lg text-bone/60 italic leading-relaxed mb-2">Computational Disease<br />Genomics Group</p>
            <div className="w-12 h-px bg-gold-500/40 ml-auto mr-auto md:mr-0 mt-4"></div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.7rem] text-bone/40 font-light tracking-wider uppercase">© 2026 Computational Disease Genomics Group — Ashoka University</p>
        <p className="text-[0.7rem] text-bone/30 font-light tracking-wider">Decoding genomes, one variant at a time.</p>
      </div>
    </div>
  </footer>
);


const App = () => {
  return (
    <div className="overflow-hidden bg-bone relative min-h-screen">
      {/* Global Background Fading Circles */}
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sage-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-gold-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-30 translate-x-1/4 translate-y-1/4 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-olive-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[130px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>


      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Hero />
        <About />
        <Research />
        <Team />
        <Publications />
        <Glimpse />
        <Footer />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

