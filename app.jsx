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

const Quotes = () => {
  return (
    <section className="py-24 bg-sage-50 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="text-gold-500 text-6xl font-serif absolute -top-8 -left-4 opacity-50">"</span>
          <p className="text-2xl md:text-3xl font-serif text-olive-800 leading-relaxed italic mb-6">
            The genome is a book that wrote itself, continually adding, deleting, and amending over four billion years.
          </p>
          <span className="text-sm font-semibold uppercase tracking-widest text-sage-800">— Matt Ridley</span>
        </motion.div>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <span className="text-gold-500 text-6xl font-serif absolute -top-8 -left-4 opacity-50">"</span>
          <p className="text-2xl md:text-3xl font-serif text-olive-800 leading-relaxed italic mb-6">
            Precision medicine is not just about genetics; it's about treating the right patient with the right treatment at the right time.
          </p>
          <span className="text-sm font-semibold uppercase tracking-widest text-sage-800">— Precision Health Initiative</span>
        </motion.div>
      </div>

      {/* Background soft blobs text */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sand rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
    </section>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bone/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex justify-between items-center gap-8">
        <a href="#" className="flex items-center gap-4 lg:gap-6 group flex-shrink-0">
          {/* Logo with sophisticated hover glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold-300 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img src="Ashoka_University_logo_with_wordmark.png" alt="Ashoka University" className="relative h-14 lg:h-[4.2rem] object-contain transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="hidden lg:block h-12 w-[2px] bg-olive-200 group-hover:bg-gold-400 transition-colors duration-500"></div>

          {/* Stacked Academic Typography */}
          <div className="hidden lg:flex flex-col justify-center min-w-max">
            <span className="font-sans font-bold text-[0.6rem] tracking-[0.25em] text-olive-600 uppercase mb-1">Ashoka University</span>
            <span className="font-serif text-lg lg:text-[1.3rem] tracking-wide text-ink leading-[1.1] group-hover:text-olive-800 transition-colors duration-500">
              Computational <br />
              <span className="text-gold-600 italic font-medium">Genomics Group</span>
            </span>
          </div>
        </a>
        <div className="hidden xl:flex items-center space-x-6 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-ink flex-shrink-0">
          <a href="#about" className="hover:text-gold-600 hover:-translate-y-1 transform transition-all duration-300">About</a>
          <a href="#research" className="hover:text-gold-600 hover:-translate-y-1 transform transition-all duration-300">Research</a>
          <a href="#team" className="hover:text-gold-600 hover:-translate-y-1 transform transition-all duration-300">People</a>
          <a href="#glimpse" className="hover:text-gold-600 hover:-translate-y-1 transform transition-all duration-300">Glimpse</a>
          <a href="#publications" className="hover:text-gold-600 hover:-translate-y-1 transform transition-all duration-300">Publications</a>
          <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="bg-ink text-bone px-7 py-3 rounded-full hover:bg-gold-500 hover:text-white shadow-soft hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gold-300">Join Us / Contact Us</a>
        </div>
      </div>
    </motion.nav>
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

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Text */}
          <motion.div
            style={{ y: y1, opacity: opacity1 }}
            className="lg:col-span-7 z-20 pt-16"
          >
            {/* Pill Removed as requested */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="text-6xl md:text-8xl lg:text-[6.5rem] font-serif text-ink leading-[1.05] tracking-tight mb-8"
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
              className="text-muted text-xl md:text-2xl max-w-xl leading-relaxed font-light mb-12"
            >
              The Computational Genomics Group pioneers AI and multi-omics to unearth structural variations driving complex human diseases.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#about" className="inline-flex items-center gap-2 bg-ink text-bone font-medium rounded-full px-10 py-5 tracking-widest text-[0.7rem] uppercase shadow-2xl hover:bg-olive-800 hover:shadow-none transition-all duration-300 transform hover:-translate-y-1">
                Explore The Lab
              </a>
              <a href="#join" className="inline-flex items-center gap-2 bg-transparent text-ink font-medium rounded-full px-10 py-5 tracking-widest text-[0.7rem] uppercase border border-olive-200 hover:border-gold-500 hover:bg-bone transition-all duration-300">
                Opportunities
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visuals: Enhanced Computational Bioinformatics Doodle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center w-full min-h-[400px] h-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[550px]"
            >
              <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-2 filter drop-shadow-2xl">
                {/* Fine Grid background for 'computational' matrix feel */}
                <g stroke="#C2C5AA" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4">
                  <line x1="100" y1="0" x2="100" y2="600" />
                  <line x1="200" y1="0" x2="200" y2="600" />
                  <line x1="300" y1="0" x2="300" y2="600" />
                  <line x1="400" y1="0" x2="400" y2="600" />
                  <line x1="500" y1="0" x2="500" y2="600" />
                  <line x1="0" y1="100" x2="600" y2="100" />
                  <line x1="0" y1="200" x2="600" y2="200" />
                  <line x1="0" y1="300" x2="600" y2="300" />
                  <line x1="0" y1="400" x2="600" y2="400" />
                  <line x1="0" y1="500" x2="600" y2="500" />
                </g>

                {/* Abstract organic background blobs */}
                <path d="M 150 250 C 70 120, 200 80, 320 180 C 450 300, 550 180, 480 380 C 420 550, 280 480, 180 420 Z" fill="#D4A853" fillOpacity="0.15" />
                <path d="M 280 150 C 450 90, 550 280, 420 450 C 290 620, 50 480, 120 300 Z" fill="#7E9980" fillOpacity="0.15" />

                {/* Deep data-flow arcs */}
                <path d="M 50 300 A 250 250 0 0 1 550 300" stroke="#E6D8B8" strokeWidth="3" strokeDasharray="15 10" />
                <path d="M 50 300 A 300 350 0 0 0 550 450" stroke="#C2C5AA" strokeWidth="2" strokeDasharray="5 15" />

                {/* Sweeping dynamic DNA helix structure (improved depth) */}
                <path d="M 60 500 C 180 380, 300 600, 520 420" stroke="#6B705C" strokeWidth="5" strokeLinecap="round" />
                <path d="M 60 500 C 180 600, 300 380, 520 420" stroke="#A67D2D" strokeWidth="5" strokeLinecap="round" />
                {/* Connecting rungs */}
                <line x1="105" y1="488" x2="105" y2="488" stroke="#111412" strokeWidth="15" strokeLinecap="round" />
                <line x1="185" y1="440" x2="195" y2="540" stroke="#111412" strokeWidth="4" strokeLinecap="round" />
                <line x1="305" y1="450" x2="295" y2="545" stroke="#111412" strokeWidth="4" strokeLinecap="round" />
                <line x1="410" y1="465" x2="410" y2="465" stroke="#111412" strokeWidth="15" strokeLinecap="round" />
                <line x1="480" y1="432" x2="495" y2="455" stroke="#111412" strokeWidth="3" strokeLinecap="round" />

                {/* High-detail concentric nodes (Protein visualization clusters) */}
                <g transform="translate(180, 180)">
                  <circle r="45" stroke="#6B705C" strokeWidth="4" strokeDasharray="6 8" />
                  <circle r="30" stroke="#A67D2D" strokeWidth="2.5" />
                  <circle r="15" stroke="#111412" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle r="6" fill="#111412" />
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="#A67D2D" strokeWidth="1" />
                  <line x1="0" y1="-30" x2="0" y2="30" stroke="#A67D2D" strokeWidth="1" />
                </g>

                <g transform="translate(420, 260)">
                  <circle r="60" stroke="#A67D2D" strokeWidth="3" strokeDasharray="10 8" />
                  <circle r="45" stroke="#6B705C" strokeWidth="2.5" />
                  <circle r="25" stroke="#111412" strokeWidth="6" strokeDasharray="2 10" />
                  <circle r="12" fill="#111412" />
                </g>

                <g transform="translate(320, 100)">
                  <circle r="20" stroke="#111412" strokeWidth="3" />
                  <circle r="8" fill="#6B705C" />
                </g>

                {/* Connecting neural/network dashed pathways showing interactions */}
                <path d="M 225 180 C 300 180, 350 220, 375 240" stroke="#4B4F4C" strokeWidth="2.5" strokeDasharray="6 6" />
                <path d="M 180 225 C 160 300, 120 400, 130 450" stroke="#4B4F4C" strokeWidth="2.5" strokeDasharray="8 8" />
                <path d="M 420 320 C 430 380, 450 400, 480 430" stroke="#4B4F4C" strokeWidth="2.5" strokeDasharray="6 6" />
                <path d="M 310 120 C 270 180, 230 160, 210 160" stroke="#4B4F4C" strokeWidth="2.5" strokeDasharray="5 5" />
                <path d="M 340 100 C 400 100, 420 180, 420 200" stroke="#4B4F4C" strokeWidth="2.5" strokeDasharray="4 4" />

                {/* Data analysis / wave squiggles (Bioinformatics motifs) */}
                <path d="M 60 140 L 90 90 L 120 160 L 150 100" stroke="#A67D2D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 360 80 L 390 40 L 420 110 L 450 60 L 480 100" stroke="#6B705C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 440 160 Q 480 120, 520 160 T 580 140" stroke="#A67D2D" strokeWidth="3" strokeLinecap="round" />

                {/* Sequence Text floating around */}
                <text x="80" y="240" fill="#6B705C" fontSize="18" fontFamily="monospace" fontWeight="bold" letterSpacing="4">A-C-G-T</text>
                <text x="490" y="320" fill="#A67D2D" fontSize="16" fontFamily="monospace" fontWeight="bold" letterSpacing="4">G-C-A-T</text>

                {/* Miniature visual charts (Bar graph motif) */}
                <rect x="250" y="320" width="8" height="30" rx="4" fill="#6B705C" />
                <rect x="270" y="290" width="8" height="60" rx="4" fill="#A67D2D" />
                <rect x="290" y="310" width="8" height="40" rx="4" fill="#111412" opacity="0.8" />
                <rect x="310" y="330" width="8" height="20" rx="4" fill="#6B705C" />

                {/* Tiny decorative scientific crosses/markers */}
                <path d="M 90 350 L 120 350 M 105 335 L 105 365" stroke="#111412" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 500 520 L 530 520 M 515 505 L 515 535" stroke="#111412" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 280 60 L 300 60 M 290 50 L 290 70" stroke="#6B705C" strokeWidth="2.5" strokeLinecap="round" />

                {/* Nodes and scattering details */}
                <circle cx="100" cy="270" r="4" fill="#A67D2D" />
                <circle cx="530" cy="280" r="6" fill="#6B705C" />
                <circle cx="340" cy="380" r="4" fill="#A67D2D" />
                <circle cx="200" cy="80" r="3" fill="#111412" />
                <circle cx="480" cy="50" r="5" fill="#6B705C" />
              </svg>
            </motion.div>
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
      `}</style>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 lg:px-12 bg-cream">
    <SectionDivider />
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm tracking-widest text-gold-600 font-bold uppercase mb-4"
      >
        Our Science
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.1 }}
        className="text-4xl md:text-5xl font-serif text-ink mb-10 leading-tight"
      >
        Precision in the code of life
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, delay: 0.2 }}
        className="text-xl text-olive-800 leading-relaxed font-light"
      >
        Based at Ashoka University, our computational genomics group seeks to uncover the genetic architecture of complex diseases. From genome-wide associations to structural variations, we combine multi-omics data, statistical genetics, and machine learning to map the traits of cardiovascular and neuropsychiatric conditions—cultivating a future built on precision medicine.
      </motion.p>
    </div>
  </section>
);

const Research = () => {
  const cards = [
    { title: "GWAS", icon: <Search />, desc: "Identifying risk loci and pleiotropic effects for complex traits such as abdominal and thoracic aortic aneurysms." },
    { title: "Polygenic Risk Scores", icon: <Molecule />, desc: "Evaluating cost-effectiveness and predictive power of PRS-stratified screening for cardiovascular diseases." },
    { title: "Precision Medicine", icon: <Dna />, desc: "Leveraging loss-of-function variants to highlight potential therapeutic targets in human populations." },
    { title: "AI in Genomics", icon: <Brain />, desc: "Building integrative functional genomic models for brain development and neuropsychiatric risks." }
  ];

  return (
    <section id="research" className="py-32 bg-sage-50 text-ink px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">Focus Areas</h2>
          <h3 className="text-5xl lg:text-6xl font-serif text-ink">Our Research</h3>
          <div className="mt-8 flex justify-center opacity-50"><SectionDivider /></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-bone border border-olive-200 rounded-2xl p-10 text-center hover:border-gold-400 transition-all duration-300 shadow-soft cursor-pointer group"
            >
              <div className="text-olive-400 flex justify-center mb-8 group-hover:text-gold-500 transition-colors transform group-hover:scale-110 duration-500">{card.icon}</div>
              <h4 className="font-serif text-2xl text-ink mb-4">{card.title}</h4>
              <p className="text-base font-light text-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Live 3D Team Card Component ---
const TeamCard = ({ member, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perspective-1000 w-full group cursor-pointer"
    >
      <motion.div
        animate={{ rotateY: isHovered ? 12 : 0, rotateX: isHovered ? -12 : 0, scale: isHovered ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformOrigin: "center center" }}
        className="bg-bone rounded-3xl p-8 border border-cream shadow-soft hover:shadow-2xl h-full transform-style-3d relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

        <motion.div
          animate={{ z: isHovered ? 40 : 0 }}
          className="w-32 h-32 mx-auto rounded-full border border-olive-200 overflow-hidden mb-8 relative z-10 shadow-lg"
        >
          <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110 pointer-events-none" />
        </motion.div>

        <motion.div
          animate={{ z: isHovered ? 30 : 0 }}
          className="relative z-10 text-center"
        >
          <h4 className="font-serif text-3xl text-ink group-hover:text-olive-800 transition-colors">{member.name}</h4>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 mt-3 mb-4">{member.role}</p>
          <div className="w-12 h-px bg-olive-200 mx-auto mb-4 group-hover:w-24 group-hover:bg-gold-400 transition-all duration-500"></div>
          <p className="text-sm text-muted font-light leading-relaxed">{member.desc}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Tanmoy Roychowdhury",
      role: "Principal Investigator",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      desc: "His work spans biology, physics, and data science, charting structural variants and neuropsychiatric dysregulation. Faculty at Ashoka University."
    },
    {
      name: "Govind",
      role: "Research Assistant",
      img: "https://images.unsplash.com/photo-1594824436952-47571212dcbb?auto=format&fit=crop&q=80&w=300&h=300",
      desc: "Assisting in lab operations, data processing pipelines, and maintaining genomics computational infrastructure."
    },
    {
      name: "Joydeep",
      role: "Ph.D. Candidate",
      img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=300&h=300",
      desc: "Investigating the genetic basis of complex traits using integrative multi-omics and advanced statistical models."
    }
  ];

  return (
    <section id="team" className="py-32 px-6 lg:px-12 bg-cream">
      <SectionDivider />
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">The People</h2>
          <h3 className="text-5xl font-serif text-ink italic">Meet the Lab</h3>
        </div>

        {/* Exactly 3 members as requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Glimpse / Photo Gallery Component ---
const Glimpse = () => {
  const photos = [
    { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800&h=600", title: "Lab Setup", desc: "Setting up our new computational infrastructure." },
    { img: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80&w=800&h=600", title: "Team Retreat", desc: "Discussing structural variants and future goals." },
    { img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800&h=600", title: "Server Room", desc: "Where the genomic sequencing data is processed." }
  ];

  return (
    <section id="glimpse" className="py-32 px-6 lg:px-12 bg-bone">
      <SectionDivider />
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">Gallery</h2>
          <h3 className="text-5xl font-serif text-ink italic">A Glimpse</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 border border-olive-200"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={photo.img} alt={photo.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              <div className="p-8">
                <h4 className="font-serif text-2xl text-ink mb-3 group-hover:text-olive-800 transition-colors">{photo.title}</h4>
                <div className="w-8 h-px bg-gold-400 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-muted text-sm font-light leading-relaxed">{photo.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- New Join Us Component ---
const JoinUs = () => {
  return (
    <section id="join" className="py-24 md:py-32 bg-[url('data:image/svg+xml;utf8,<svg width=\\'40\\' height=\\'40\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%236B705C\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/></svg>')] bg-olive-50 px-6 lg:px-12 relative overflow-hidden">
      <SectionDivider />
      <div className="max-w-7xl mx-auto relative z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-32"
          >
            <h2 className="text-xs tracking-widest text-gold-600 font-bold uppercase mb-4">Opportunities</h2>
            <h3 className="text-5xl lg:text-6xl font-serif text-ink mb-8 leading-tight">Join Our <br /><span className="italic text-olive-800">Team</span></h3>
            <div className="w-16 h-px bg-gold-400 mb-8"></div>
            <p className="text-lg text-olive-800 font-light leading-relaxed mb-6">
              We are continually looking for curious, driven researchers—from undergraduates to postdocs—to assist in charting the genetic architecture of complex diseases.
            </p>
            <p className="text-sm text-muted mb-10 font-light leading-relaxed">
              If you are passionate about computational genomics, multi-omics, and uncovering structural variations, we’d love to hear from you. Please include a recent CV and a short statement of your research interests.
            </p>
            <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="inline-flex items-center gap-3 bg-olive-800 hover:bg-gold-600 text-bone transition-all duration-300 px-8 py-5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl transform hover:-translate-y-1">
              General Inquiry
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </motion.div>

          {/* Cards Right */}
          <div className="lg:col-span-7 w-full pt-8 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 relative w-full">
              {/* Decorative light flare behind cards */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full pointer-events-none"></div>

              {[
                { title: "Postdoctoral Researcher", desc: "Focus on AI-driven GWAS and biobank-scale data.", email: "postdoc.apply@dummy.edu" },
                { title: "Ph.D. Candidate", desc: "For students interested in statistical genetics.", email: "phd.apply@dummy.edu" },
                { title: "Research Associate", desc: "Data processing & multi-omics pipeline development.", email: "ra.apply@dummy.edu" },
                { title: "Undergraduate Research", desc: "Summer projects mapping structural variance.", email: "ugrad.apply@dummy.edu" }
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white hover:border-gold-300 transition-all duration-300 shadow-soft hover:shadow-2xl group flex flex-col justify-between h-[320px] md:h-full cursor-pointer relative overflow-hidden"
                >
                  <div className="relative z-10 flex-grow">
                    <div className="w-14 h-14 rounded-full bg-sage-50 flex items-center justify-center mb-8 group-hover:bg-gold-50 group-hover:scale-110 transition-all duration-500 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-olive-600 group-hover:text-gold-600 transition-colors"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <h4 className="font-serif text-2xl md:text-3xl text-ink group-hover:text-olive-800 transition-colors mb-3 pr-2">{pos.title}</h4>
                    <p className="text-sm text-muted font-light leading-relaxed mb-8">{pos.desc}</p>
                  </div>

                  <a href={`mailto:${pos.email}`} className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-olive-600 group-hover:text-gold-600 transition-colors mt-auto w-fit">
                    Apply Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>

                  {/* Subtle hover gradient within card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gold-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Publications = () => {
  const pubs = [
    { year: "2026", title: "Genome and Transcriptome-Wide Analyses Identify Multiple Candidate Genes and a Significant Polygenic Contribution in Bicuspid Aortic Valve", authors: "S Thériault, JA Holdcraft, D Sharipova... T. Roychowdhury", journal: "Circulation" },
    { year: "2025", title: "Dissecting the genetic architecture of intracranial aneurysms", authors: "SS Adkar, J Lynch, RB Choi, T Roychowdhury, ...", journal: "Circulation: Genomic and Precision Medicine" },
    { year: "2024", title: "Evaluating the cost-effectiveness of polygenic risk score-stratified screening for abdominal aortic aneurysm", authors: "M Kelemen, J Danesh, E Di Angelantonio... T Roychowdhury...", journal: "Nature Communications" },
    { year: "2024", title: "Resolving the 22q11.2 deletion using CTLR-Seq reveals chromosomal rearrangement mechanisms and individual variance in breakpoints", authors: "B Zhou, C Purmann, H Guo... T Roychowdhury...", journal: "PNAS" },
    { year: "2023", title: "Genome-wide association meta-analysis identifies risk loci for abdominal aortic aneurysm and highlights PCSK9 as a therapeutic target", authors: "T Roychowdhury, D Klarin, MG Levin, ...", journal: "Nature Genetics" },
    { year: "2021", title: "Regulatory variants in TCF7L2 are associated with thoracic aortic aneurysm", authors: "T Roychowdhury, H Lu, WE Hornsby, ...", journal: "The American Journal of Human Genetics" },
    { year: "2020", title: "GWAS of thyroid stimulating hormone highlights pleiotropic effects and inverse association with thyroid cancer", authors: "W Zhou, B Brumpton... T Roychowdhury...", journal: "Nature Communications" },
    { year: "2019", title: "Chromatin organization modulates the origin of heritable structural variations in human genome", authors: "T Roychowdhury, A Abyzov", journal: "Nucleic acids research" },
    { year: "2018", title: "Transcriptome-wide isoform-level dysregulation in ASD, schizophrenia, and bipolar disorder", authors: "MJ Gandal, P Zhang... T Roychowdhury... H Won, ...", journal: "Science" },
    { year: "2018", title: "Integrative functional genomic analysis of human brain development and neuropsychiatric risks", authors: "M Li, G Santpere, Y Imamura Kawasawa, ...", journal: "Science" },
    { year: "2018", title: "Transcriptome and epigenome landscape of human cortical development modeled in organoids", authors: "A Amiri, G Coppola, S Scuderi, F Wu, T Roychowdhury, ...", journal: "Science" },
    { year: "2015", title: "Analysis of IS6110 insertion sites provide a glimpse into genome evolution of Mycobacterium tuberculosis", authors: "T Roychowdhury, S Mandal, A Bhattacharya", journal: "Scientific reports" },
  ];

  return (
    <section id="publications" className="py-32 px-6 lg:px-12 bg-bone">
      <SectionDivider />
      <div className="max-w-5xl mx-auto mt-16">
        <div className="text-center mb-24">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">Selected Works</h2>
          <h3 className="text-5xl font-serif text-ink">Publications</h3>
        </div>

        <div className="space-y-12 shrink-0">
          {pubs.map((pub, idx) => (
            <motion.a
              key={idx}
              href={`https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row gap-6 border-b border-olive-200 pb-10 group cursor-pointer"
            >
              <div className="font-serif text-3xl text-gold-500 font-light shrink-0 md:w-32 group-hover:text-olive-600 transition-colors">{pub.year}</div>
              <div>
                <h4 className="font-serif text-[1.35rem] text-ink mb-3 leading-snug group-hover:text-olive-800 transition-colors group-hover:underline decoration-gold-400 underline-offset-4">{pub.title}</h4>
                <p className="text-sage-800 text-sm font-semibold tracking-wide uppercase mb-2">{pub.journal}</p>
                <p className="text-muted text-sm font-light leading-relaxed">{pub.authors}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-sage-100/50 text-ink py-20 px-6 lg:px-12 text-center md:text-left border-t border-sage-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
      <div>
        <h3 className="font-serif text-3xl text-olive-800 mb-6 italic">Contact us</h3>
        <p className="font-serif text-olive-800 text-lg leading-relaxed max-w-xs mx-auto md:mx-0">
          <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="font-bold underline hover:text-gold-600 transition inline-block mb-3">tanmoy.roychowdhury@ashoka.edu.in</a><br />
          Computational Genomics Group<br />
          Ashoka University<br />
          Rajiv Gandhi Education City<br />
          Sonipat, Haryana 131029<br />
          India
        </p>
      </div>
      <div>
        <h3 className="font-serif text-3xl text-olive-800 mb-6 italic">Explore</h3>
        <div className="flex flex-col space-y-3 text-lg font-serif text-olive-800">
          <a href="#" className="hover:text-gold-600 transition text-ink hover:no-underline">Overview</a>
          <a href="#research" className="hover:text-gold-600 transition text-ink">Research</a>
          <a href="#publications" className="hover:text-gold-600 transition text-ink">Publications</a>
          <a href="#team" className="hover:text-gold-600 transition text-ink">People</a>
          <a href="#glimpse" className="hover:text-gold-600 transition text-ink">Glimpse</a>
          <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="hover:text-gold-600 transition text-ink">Join Us</a>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end justify-between">
        <img src="Ashoka_University_logo_with_wordmark.png" alt="Ashoka University Logo" className="h-16 md:h-20 object-contain mb-8 md:mb-0" />
        <p className="font-serif text-olive-600 text-sm mt-auto italic">© 2026 Computational Genomics Group</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="overflow-hidden bg-bone relative min-h-screen">
      {/* Global Background Fading Circles (Goos) for testing */}
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-sage-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-gold-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-30 translate-x-1/4 translate-y-1/4 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-olive-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[130px] opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none z-0"></div>


      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Hero />
        <Quotes />
        <About />
        <Research />
        <Team />
        <Glimpse />
        <JoinUs />
        <Publications />
        <Footer />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
