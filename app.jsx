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

// --- Category Images for Publications ---
const HeartLungIcon = () => (
  <img src="icon_cardio.png" alt="Heart Icon" className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 hover:scale-110 drop-shadow-md" />
);
const BrainIcon = () => (
  <img src="icon_brain.jpg" alt="Brain Icon" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full shadow-sm border border-olive-300/30 transition-transform duration-500 hover:scale-110" />
);
const DnaIcon = () => (
  <img src="hero_genomics.png" alt="DNA Icon" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full shadow-sm border border-olive-300/30 transition-transform duration-500 hover:scale-110" style={{ filter: 'brightness(1.1) contrast(1.1)' }} />
);
const MicrobeIcon = () => (
  <img src="icon_microbe.jpg" alt="Microbe Icon" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full shadow-sm border border-olive-300/30 transition-transform duration-500 hover:scale-110" />
);
const NewsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
);

// Category icon map
const categoryIcons = [HeartLungIcon, BrainIcon, DnaIcon, MicrobeIcon];

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bone/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] py-3 md:py-4 border-b border-olive-200/20' : 'bg-transparent py-4 md:py-6'}`}
    >
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center h-20">
        <a href="#" className="flex items-center group flex-shrink-0">
          {/* Logo */}
          <div className="relative flex items-center">
            <img src="Ashoka_University_logo_with_wordmark.png" alt="Ashoka University" className="h-10 md:h-12 lg:h-[3.25rem] object-contain" />
          </div>

          <div className="hidden md:block h-10 lg:h-[3.5rem] w-[1px] bg-gray-300 mx-4 lg:mx-6 group-hover:bg-gray-400 transition-colors duration-300"></div>

          {/* Stacked Academic Typography */}
          <div className="hidden md:flex flex-col justify-center flex-shrink-0">
            <span className="font-sans font-bold text-[0.55rem] tracking-[0.3em] text-gold-600/90 uppercase mb-0.5">Ashoka University</span>
            <h1 className="font-sans text-[1.05rem] lg:text-[1.35rem] text-ink leading-[1.15] tracking-tight font-semibold">
              Computational Disease<br />
              <span className="font-light text-olive-800 tracking-[0.05em] drop-shadow-sm">Genomics Group</span>
            </h1>
          </div>
        </a>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex flex-1 justify-end items-center space-x-6 xl:space-x-8 font-sans text-[0.7rem] xl:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-gray-900">
          {['About', 'Research', 'People', 'Glimpse', 'Publications'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative group py-2">
              <span className="group-hover:text-gold-600 transition-colors duration-300">{item}</span>
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="bg-[#0f1110] text-gray-100 px-6 xl:px-7 py-3 rounded-full shadow-md hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all duration-300 ml-2 xl:ml-4 whitespace-nowrap">
            Join Us / Contact Us
          </a>
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
              className="text-muted text-lg md:text-xl lg:text-2xl max-w-xl leading-relaxed font-light mb-8 md:mb-12"
            >
              The Computational Disease Genomics Group pioneers AI and multi-omics to unearth structural variations driving complex human diseases.
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
              <a href="#join" className="inline-flex items-center gap-2 bg-transparent text-ink font-medium rounded-full px-6 py-4 md:px-10 md:py-5 tracking-widest text-[0.65rem] md:text-[0.7rem] uppercase border border-olive-200 hover:border-gold-500 hover:bg-bone transition-all duration-300">
                Opportunities
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visuals: Genomics Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[400px] md:min-h-[500px] lg:min-h-[650px] h-full"
            style={{ transform: 'translateY(-120px)' }}
          >
            <div 
              className="relative z-10 w-full h-full flex items-center justify-center"
              style={{ transform: 'scale(1.7)', transformOrigin: 'center center', maxWidth: '1000px' }}
            >
              <img 
                src="hero_genomics.png" 
                alt="Genomics and molecular biology illustration" 
                className="w-full h-auto object-contain mix-blend-multiply opacity-95 transition-all"
                style={{ 
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 68%)',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 68%)'
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
  <section id="about" className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-cream">
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
        className="text-lg md:text-xl text-olive-800 leading-relaxed font-light"
      >
        Based at Ashoka University, our computational disease genomics group seeks to uncover the genetic architecture of complex diseases. From genome-wide associations to structural variations, we combine multi-omics data, statistical genetics, and machine learning to map the traits of cardiovascular and neuropsychiatric conditions—cultivating a future built on precision medicine.
      </motion.p>
    </div>
  </section>
);

// --- Live Dynamic 3D Tracking Research Card ---
const ResearchCard = ({ card, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    setRotateX(yPct * 20);
    setRotateY(-xPct * 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.6 }}
      className="w-full h-full group cursor-pointer"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateX: isHovered ? rotateX * 1.2 : 0, 
          rotateY: isHovered ? rotateY * 1.2 : 0, 
          scale: isHovered ? 1.12 : 1,
          z: isHovered ? 80 : 0
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="bg-olive-800 text-bone rounded-3xl p-10 h-full relative overflow-visible border border-olive-700 shadow-2xl hover:shadow-[0_50px_100px_-20px_rgba(180,140,40,0.6)] transition-all duration-500 hover:z-50"
      >
        {/* Deep glowing backdrop projected far behind */}
        <div 
          className="absolute inset-0 bg-gold-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none" 
          style={{ filter: 'blur(30px)', transform: 'translateZ(-40px)' }}
        ></div>

        {/* Massive numeric background deeply recessed in 3D */}
        <motion.div
          animate={{ z: isHovered ? -60 : 0, opacity: isHovered ? 1 : 0.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute right-4 top-2 text-9xl font-serif text-olive-900 pointer-events-none select-none drop-shadow-2xl"
        >
          0{idx + 1}
        </motion.div>

        {/* Card Content popping forward insanely far */}
        <motion.div
          animate={{ z: isHovered ? 100 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="relative z-10 flex flex-col h-full"
        >
          <div className="w-12 h-1 bg-gold-500 mb-8 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
          
          <h4 className="font-serif text-3xl text-gold-400 mb-6 group-hover:text-gold-300 transition-colors drop-shadow-md leading-tight">{card.title}</h4>
          
          <p className="text-olive-100/90 font-light leading-relaxed drop-shadow-sm flex-grow relative z-20">
            {card.desc}
          </p>
          
          <div className="mt-10 pt-6 border-t border-olive-700 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">Discover</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400 transform group-hover:translate-x-2 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Research = () => {
  const cards = [
    { title: "GWAS", desc: "Identifying risk loci and pleiotropic effects for complex traits such as abdominal and thoracic aortic aneurysms." },
    { title: "Polygenic Risk Scores", desc: "Evaluating cost-effectiveness and predictive power of PRS-stratified screening for cardiovascular diseases." },
    { title: "Precision Medicine", desc: "Leveraging loss-of-function variants to highlight potential therapeutic targets in human populations." },
    { title: "AI in Genomics", desc: "Building integrative functional genomic models for brain development and neuropsychiatric risks." }
  ];

  return (
    <section id="research" className="py-16 md:py-32 bg-sage-50 text-ink px-4 md:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">Focus Areas</h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink">Our Research</h3>
          <div className="mt-8 flex justify-center opacity-50"><SectionDivider /></div>
        </div>

        {/* Massive padding prevents crazy 3D scaling & shadows from getting clipped by the scroll container */}
        <div className="flex overflow-x-auto gap-6 md:gap-10 py-[40px] md:py-[100px] snap-x snap-mandatory scroll-smooth hide-scrollbar px-8 -mx-8 md:px-16 md:-mx-16 lg:px-24 lg:-mx-24 items-stretch">
          {cards.map((card, idx) => (
            <div key={idx} className="flex-none w-[85vw] md:w-[350px] lg:w-[320px] snap-center">
              <ResearchCard card={card} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Live Dynamic 3D Tracking Team Card Component (Unified with Research Card style) ---
const TeamCard = ({ member, delay, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    setRotateX(yPct * 20);
    setRotateY(-xPct * 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay || idx * 0.15, duration: 0.6 }}
      className="w-full h-full group cursor-pointer"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateX: isHovered ? rotateX * 1.2 : 0, 
          rotateY: isHovered ? rotateY * 1.2 : 0, 
          scale: isHovered ? 1.05 : 1,
          z: isHovered ? 40 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="bg-olive-800 rounded-3xl h-[480px] relative overflow-hidden border border-olive-700 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(180,140,40,0.5)] transition-all duration-500 hover:z-50"
      >
        {/* Full card background photo */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={member.photo || `data:image/svg+xml;utf8,<svg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'><rect width='100%25' height='100%25' fill='%234a523a'/><text x='50%25' y='40%25' font-size='80' fill='%23D4A853' text-anchor='middle' font-family='serif' alignment-baseline='middle'>${member.initials}</text></svg>`} 
            alt={member.name}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-50 transition-opacity duration-500"
          />
          {/* Overlay gradient so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-olive-900 via-olive-900/80 to-transparent"></div>
        </div>

        {/* Card Content popping forward */}
        <motion.div
          animate={{ z: isHovered ? 60 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="relative z-10 flex flex-col justify-end h-full p-8"
        >
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h4 className="font-serif text-3xl text-gold-400 group-hover:text-gold-300 transition-colors drop-shadow-md leading-tight mb-1">{member.name}</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-bone/80 mb-4">{member.role}</p>
            
            <p className="text-olive-100/90 font-light text-sm leading-relaxed drop-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6 line-clamp-4">
              {member.desc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 border-t border-olive-600/50 pt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gold-500 hover:text-bone hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="text-gold-500 hover:text-bone hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer" className="text-gold-500 hover:text-bone hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              )}
              {member.email && (
                <a href={member.email} target="_blank" rel="noreferrer" className="text-gold-500 hover:text-bone hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              )}
            </div>
          </div>
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
      initials: "TR",
      photo: "",
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:tanmoy.roychowdhury@ashoka.edu.in",
      desc: "His work spans biology, physics, and data science, charting structural variants and neuropsychiatric dysregulation. Faculty at Ashoka University."
    },
    {
      name: "Govind",
      role: "Research Assistant",
      initials: "G",
      photo: "govind.png",
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:govind@dummy.edu",
      desc: "Assisting in lab operations, data processing pipelines, and maintaining genomics computational infrastructure."
    },
    {
      name: "Joydeep",
      role: "Ph.D. Candidate",
      initials: "J",
      photo: "",
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:joydeep@dummy.edu",
      desc: "Investigating the genetic basis of complex traits using integrative multi-omics and advanced statistical models."
    }
  ];

  return (
    <section id="team" className="py-16 md:py-32 px-4 md:px-6 lg:px-12 bg-cream">
      <SectionDivider />
      <div className="max-w-6xl mx-auto mt-8 md:mt-16">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">The People</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-ink italic">Meet the Lab</h3>
        </div>

        {/* Horizontally scrolling row for unlimited team members */}
        {/* Massive padding prevents crazy 3D scaling & shadows from getting clipped by the scroll container */}
        <div className="flex overflow-x-auto gap-6 md:gap-12 py-[40px] md:py-[100px] snap-x snap-mandatory scroll-smooth hide-scrollbar px-8 -mx-8 md:px-16 md:-mx-16 lg:px-24 lg:-mx-24 items-stretch">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex-none w-[85vw] md:w-[350px] lg:w-[320px] snap-center">
              <TeamCard member={member} idx={idx} delay={idx * 0.2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- GlimpseCard Component (Photo Gallery Style) ---
const GlimpseCard = ({ item, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.8 }}
      className="relative group w-full aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-500 border border-olive-200/50"
    >
      <div className="absolute inset-0 bg-olive-800/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
      
      {/* Upload Placeholder / Image */}
      {item.image ? (
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
      ) : (
        <div className="w-full h-full bg-olive-100 flex flex-col items-center justify-center text-olive-600/40 relative">
          {/* Subtle grid pattern background for placeholder */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 transform group-hover:scale-110 transition-transform duration-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span className="font-serif italic text-sm tracking-wide">Image Placeholder</span>
          <span className="font-sans text-[0.6rem] uppercase tracking-widest mt-2">{item.title}.png</span>
        </div>
      )}

      {/* Elegant Caption Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-20 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="font-serif text-2xl md:text-3xl text-bone mb-1 drop-shadow-md">{item.title}</h4>
        <p className="font-sans text-[0.65rem] md:text-xs uppercase tracking-widest text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500">{item.subtitle}</p>
      </div>
    </motion.div>
  );
};

// --- Glimpse Section Component ---
const Glimpse = () => {
  const items = [
    { title: "Lab Members", subtitle: "The current roster", image: "" },
    { title: "Group Outing", subtitle: "Lab retreat 2024", image: "" },
    { title: "Lab Space", subtitle: "Computational infrastructure", image: "" }
  ];

  return (
    <section id="glimpse" className="py-16 md:py-32 bg-bone text-ink px-4 md:px-6 lg:px-12 relative overflow-hidden">
      <SectionDivider />
      <div className="max-w-7xl mx-auto relative z-10 mt-8 md:mt-16">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-sm tracking-widest text-olive-600 font-bold uppercase mb-4">Gallery</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">A Glimpse</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {items.map((item, idx) => (
            <GlimpseCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- New Join Us Component (Single Combined Card) ---
const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    setRotateX(yPct * 15);
    setRotateY(-xPct * 15);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const positions = [
    { title: "Postdoctoral Researcher", desc: "Focus on AI-driven GWAS and biobank-scale data." },
    { title: "Ph.D. Candidate", desc: "For students interested in statistical genetics." },
    { title: "Research Associate", desc: "Data processing & multi-omics pipeline development." },
    { title: "Undergraduate Research", desc: "Summer projects mapping structural variance." },
    { title: "Dissertation Projects", desc: "Short-term hands-on training and dissertation work." }
  ];

  return (
    <section id="join" className="py-16 md:py-32 bg-[url('data:image/svg+xml;utf8,<svg width=\\'40\\' height=\\'40\\' xmlns=\\'http://www.w3.org/2000/svg\\'><path d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%236B705C\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/></svg>')] bg-olive-50 px-4 md:px-6 lg:px-12 relative overflow-hidden">
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
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-6 md:mb-8 leading-tight">Join Our <br /><span className="italic text-olive-800">Team</span></h3>
            <div className="w-16 h-px bg-gold-400 mb-8"></div>
            <p className="text-lg md:text-xl text-olive-800 font-light leading-relaxed mb-6">
              We are passionate about computational genomics and discovering the architecture of complex diseases.
            </p>
            <p className="text-sm text-muted mb-10 font-light leading-relaxed">
              If you share our curiosity and drive, we would love to hear from you. 
            </p>
            <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="inline-flex items-center gap-3 bg-olive-800 hover:bg-gold-600 text-bone transition-all duration-300 px-8 py-5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl transform hover:-translate-y-1">
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </motion.div>

          {/* Single Combined Card Right */}
          <div className="lg:col-span-7 w-full pt-8 lg:pt-0">
            <div className="relative w-full py-16 -my-16">
              {/* Decorative light flare behind card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-200/20 blur-[100px] rounded-full pointer-events-none"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="w-full group cursor-pointer"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  animate={{ 
                    rotateX: isHovered ? rotateX * 0.8 : 0, 
                    rotateY: isHovered ? rotateY * 0.8 : 0, 
                    scale: isHovered ? 1.03 : 1,
                    z: isHovered ? 40 : 0
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="bg-olive-800 text-bone rounded-3xl p-8 md:p-12 relative overflow-visible border border-olive-700 shadow-2xl hover:shadow-[0_50px_100px_-20px_rgba(180,140,40,0.6)] transition-all duration-500"
                >
                  {/* Deep glowing backdrop */}
                  <div 
                    className="absolute inset-0 bg-gold-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none" 
                    style={{ filter: 'blur(30px)', transform: 'translateZ(-40px)' }}
                  ></div>

                  {/* Card Content */}
                  <motion.div
                    animate={{ z: isHovered ? 60 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="relative z-10"
                  >
                    <div className="w-12 h-1 bg-gold-500 mb-8 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                    
                    <h4 className="font-serif text-3xl md:text-4xl text-gold-400 mb-3 group-hover:text-gold-300 transition-colors drop-shadow-md leading-tight">Open Positions</h4>
                    <p className="text-olive-100/70 font-light text-sm mb-10">
                      We welcome applications at all levels. Explore our current openings below.
                    </p>

                    <div className="flex flex-col gap-3 lg:gap-4 mb-10">
                      {positions.map((pos, idx) => (
                        <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" key={idx} className="group/card flex items-center justify-between p-4 md:p-5 rounded-xl border border-olive-700/40 hover:border-gold-500/60 hover:bg-olive-800/80 transition-all duration-300">
                          <h5 className="font-serif text-lg md:text-xl text-gold-300 group-hover/card:text-gold-200 transition-colors m-0 leading-none">{pos.title}</h5>
                          <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-olive-700/30 group-hover/card:bg-gold-500/20 text-olive-400 group-hover/card:text-gold-300 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/card:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </div>
                        </a>
                      ))}
                    </div>

                    <p className="text-xs text-olive-400/80 font-light uppercase tracking-widest text-center mt-6">
                      Click any position to apply directly
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- PUBLICATIONS DATA ---
const publicationsData = {
  broadArea: "Computational Genomics, Human Genetics and Precision Health",
  note: "(*Co-first author, # Co-corresponding author)",
  categories: [
    {
      name: "Cardiovascular, Metabolic & Lung Disease Genomics",
      papers: [
        {
          num: 1,
          authors: "Thériault S, Holdcraft J, Sharipova D, Faucherre A, Debiec R, Peloso G, Al-Kassou B, Aranki S, Swan EA, Ballotta A, Bellino M, Björck H, Boureau AS, Braund P, Corriveau F, Dagenais F, Folkersen L, Forte A, Francke M, Frigiola A, Gorbatov S, Guo D, Habchi K, Heydarpour M, Isselbacher E, Jopling C, Laporte F, Scouarnec SL, Li Z, Lichtner P, Maj C, Manikpurage H, Nguyen T, Norris R, Ong CS, Pibarot P, Roychowdhury T, Sarubbi B, Simonet F, Sundt T, Surakka I, Tessler I, Willer CJ, Wittmann S, Yang B, Berezovets I, Dopple Sr, Dreßen M, Knoll K, Puehler T, Schunkert H, Avierinos JF, Bissell MM, Bolger A, Bossé Y, Bossone E, Brion M, Citro R, Vincentiis CD, Deeb GM, Corte AD, Dina C, Durst R, Ensminger S, Eriksson P, Evangelista P, Franco-Cereceda A, Gilon D, Giusti B, Hetherington S, Huggins G, Krane M, Tourneau TL, Limongelli G, Mathieu P, Messika-Zeitoun D, Michelena H, Milewicz D, Muehlschlegel J, Murdock D, Nickenig G, Nistri S, Nöthen M, Pluchinotta F, Prakash S, Samani N, Schott JJ, Webb T, Zaffran S, Seyfried SA, Eagle K, Schumacher J, Trenkwalder T, Body S",
          title: "Genome and transcriptome-wide analyses identify multiple candidate genes and a significant polygenic contribution in bicuspid aortic valve",
          journal: "Circulation",
          year: 2025,
          pmid: "41645906"
        },
        {
          num: 2,
          authors: "Kelemen M, Danesh J, Di Angelantonio E, Inouye M, O'Sullivan J, Pennells L, Roychowdhury T, Sweeting MJ, Wood AM, Harrison S, Kim LG",
          title: "Evaluating the cost-effectiveness of polygenic risk score-stratified screening for abdominal aortic aneurysm",
          journal: "Nature Communications",
          year: 2024,
          pmid: "39277617"
        },
        {
          num: 3,
          authors: "Roychowdhury T*#, Klarin D*, Levin MG*, Spin JM, Rhee YH, Deng A, Headley CA, Surakka I, Tsao NL, Gellatly C, Zuber V, Shen F, Hornsby WE, Laursen IH, Verma SS, Locke AE, Einarsson G, Thorleifsson G, Graham SE, Dikilitas O, Pattee JW, Judy RL, Verges FP, Nielsen JB, Wolford BN, Brumpton BM, Dilmé J, Peypoch O, Juscafresa LC, Edwards TL, Li D, Banasik K, Brunak S, Jacobsen RL, Garcia-Barrio MT, Zhang J, Rasmussen LM, Lee R, Handa A, Wanhainen A, Mani K, Lindholt JS, Obel LM, Strauss E, Oszkinis G, Nelson CP, Saxby K, Herwaarden JV, Van der Laan SW, Setten JV, Camacho M, Davis FM, Wasikowski R, Tsoi LC, Gudjonsson JE, Eliason JL, Coleman DM, Henke PK, Ganesh SK, Chen YE, Guan W, Pankow JS, Pankratz N, Pedersen OB, Erikstrup C, Tang W, Hveem K, Gudbjartsson D, Gretarsdottir S, Thorsteinsdottir U, Holm H, Stefansson K, Ferreira MA, Baras A, Kullo IJ, Ritchie MD, Christensen AH, Iversen KK, Eldrup N, Sillesen H, Ostrowski SR, Bundgaard H, Ullum H, Burgess S, Gill D, Gallagher K, Sabater-Lleal M, DiscovEHR, Regeneron Genetics Center, UK Aneurysm Growth Study, DBDS Genomic Consortium, VA Million Veteran Program, Jones GT, Bown MJ, Tsao PS, Willer CJ#, Damrauer SM#",
          title: "Genome-wide association meta-analysis identifies risk loci for abdominal aortic aneurysm and highlights PCSK9 as a therapeutic target",
          journal: "Nature Genetics",
          year: 2023,
          pmid: "37845353"
        },
        {
          num: 4,
          authors: "Klarin D*, Devineni P*, Sendamarai AK*, Angueira AR, Graham SE, Shen YH, Levin MG, Pirruccello JP, Surakka I, Karnam PR, Roychowdhury T, Li Y, Wang M, Aragam KG, Paruchuri K, Zuber V, Shakt GE, Tsao NL, Judy RL, Vy HMT, Verma SS, Rader DJ, Do R, Bavaria JE, Nadkarni GN, Ritchie MD; VA Million Veteran Program; Burgess S, Guo DC, Ellinor PT, LeMaire SA, Milewicz DM, Willer CJ, Natarajan P, Tsao PS, Pyarajan S#, Damrauer SM#",
          title: "Genome-wide Association Study of Thoracic aortic aneurysm and Dissection in the Million Veteran Program",
          journal: "Nature Genetics",
          year: 2022,
          pmid: "37308786"
        },
        {
          num: 5,
          authors: "Roychowdhury T*, Lu H*, Hornsby WE, Crone B, Wang GT, Guo D, Sendamarai A, Devineni P, Lin M, Zhou W, Graham SE, Wolford BN, Surakka I, Wang Z, Chang L, Zhang J, Mathis M, Brummett CM, Melendez TL, Shea MJ, Kim KM, Deeb MG, Patel HJ, Eliason J, Eagle KA, Yang B, Ganesh SK, Brumpton B, Åsvold BO, Skogholt AH, Hveem K, VA Million Veteran Program, Pyarajan S, Klarin D, Tsao PS, Damrauer SM, Leal SM, Milewicz DM, Chen EY, Garcia-Barrio MT#, Willer CJ#",
          title: "Regulatory variants in TCF7L2 are associated with thoracic aortic aneurysm",
          journal: "American Journal of Human Genetics",
          year: 2021,
          pmid: "34265237"
        },
        {
          num: 6,
          authors: "Nielsen JB*, Rom O*, Surakka I*, Graham SE*, Zhou W*, Roychowdhury T, Fritsche LG, Gagliano Taliun SA, Sidore C, Liu Y, Gabrielsen ME, Skogholt AH, Wolford B, Overton W, Zhao Y, Chen J, Zhang H, Hornsby WE, Acheampong A, Grooms A, Schaefer A, Zajac GJM, Villacorta L, Zhang J, Brumpton B, Løset M, Rai V, Lundegaard PR, Olesen MS, Taylor KD, Palmer ND, Chen YD, Choi SH, Lubitz SA, Ellinor PT, Barnes KC, Daya M, Rafaels N, Weiss ST, Lasky-Su J, Tracy RP, Vasan RS, Cupples LA, Mathias RA, Yanek LR, Becker LC, Peyser PA, Bielak LF, Smith JA, Aslibekyan S, Hidalgo BA, Arnett DK, Irvin MR, Wilson JG, Musani SK, Correa A, Rich SS, Guo X, Rotter JI, Konkle BA, Johnsen JM, Ashley-Koch AE, Telen MJ, Sheehan VA, Blangero J, Curran JE, Peralta JM, Montgomery C, Sheu WH, Chung RH, Schwander K, Nouraie SM, Gordeuk VR, Zhang Y, Kooperberg C, Reiner AP, Jackson RD, Bleecker ER, Meyers DA, Li X, Das S, Yu K, LeFaive J, Smith A, Blackwell T, Taliun D, Zollner S, Forer L, Schoenherr S, Fuchsberger C, Pandit A, Zawistowski M, Kheterpal S, Brummett CM, Natarajan P, Schlessinger D, Lee S, Kang HM, Cucca F, Holmen OL, Åsvold BO, Boehnke M, Kathiresan S, Abecasis GR, Chen YE, Willer CJ#, Hveem K#",
          title: "Loss-of-function genomic variants highlight potential therapeutic targets for cardiovascular disease",
          journal: "Nature Communications",
          year: 2020,
          pmid: "33339817"
        },
        {
          num: 7,
          authors: "Zhou W*, Brumpton B*, Kabil O*, Gudmundsson J*, Thorleifsson G*, Weinstock J, Zawistowski M, Nielsen JB, Chaker L, Medici M, Teumer A, Naitza S, Sanna S, Schultheiss UT, Cappola A, Karjalainen J, Kurki M, Oneka M, Taylor P, Fritsche LG, Graham SE, Wolford BN, Overton W, Rasheed H, Haug EB, Gabrielsen ME, Skogholt AH, Surakka I, Davey Smith G, Pandit A, Roychowdhury T, Hornsby WE, Jonasson JG, Senter L, Liyanarachchi S, Ringel MD, Xu L, Kiemeney LA, He H, Netea-Maier RT, Mayordomo JI, Plantinga TS, Hrafnkelsson J, Hjartarson H, Sturgis EM, Palotie A, Daly M, Citterio CE, Arvan P, Brummett CM, Boehnke M, de la Chapelle A, Stefansson K, Hveem K, Willer CJ#, Asvold BO#",
          title: "GWAS of thyroid stimulating hormone highlights pleiotropic effects and inverse genetic association with thyroid cancer",
          journal: "Nature Communications",
          year: 2020,
          pmid: "32769997"
        }
      ]
    },
    {
      name: "Brain and Developmental Disease Genomics",
      papers: [
        {
          num: 1,
          authors: "Adkar S, Lynch J, Choi RB, Roychowdhury T, Judy RL, Paruchuri K, Go DC, Bamezai S, Cabot J, Sorondo S, Levin MG, Milewicz DM, Willer CJ, Natarajan P, Pyarajan S, Chang KM, Damrauer S, Tsao P, Skirboll S, Leeper NJ, Klarin D",
          title: "Dissecting the genetic architecture of intracranial aneurysms",
          journal: "Circulation: Genomic and Precision Medicine",
          year: 2025,
          pmid: "40255156"
        },
        {
          num: 2,
          authors: "Amiri A*, Coppola G*, Scuderi S*, Wu F*, Roychowdhury T*, Liu F, Pochareddy S, Shin Y, Safi A, Song L, Zhu Y, Sousa AM, PsychENCODE consortium, Gerstein M, Crawford GE, Sestan N, Abyzov A#, Vaccarino FM#",
          title: "Transcriptome and epigenome landscape of human cortical development modeled in brain organoids",
          journal: "Science",
          year: 2018,
          pmid: "30545853"
        },
        {
          num: 3,
          authors: "Bae T, Tomasini L, Mariani J, Zhou B, Roychowdhury T, Franjic D, Pletikos M, Pattni R, Chen BJ, Venturini E, Riley-Gillis B, Sestan N, Urban AE, Abyzov A#, Vaccarino FM#",
          title: "Different mutational rates and mechanisms in human cells at pre-gastrulation and neurogenesis",
          journal: "Science",
          year: 2018,
          pmid: "29217587"
        },
        {
          num: 4,
          authors: "Hu B et al.",
          title: "Neuronal and glial 3D chromatin architecture informs the cellular etiology of brain disorders",
          journal: "Nature Communications",
          year: 2021,
          pmid: "34172755"
        },
        {
          num: 5,
          authors: "Gandal MJ et al.",
          title: "Transcriptome-wide isoform-level dysregulation in ASD, schizophrenia, and bipolar disorder",
          journal: "Science",
          year: 2018,
          pmid: "30545856"
        },
        {
          num: 6,
          authors: "Li M et al.",
          title: "Integrative functional genomic analysis of human brain development and neuropsychiatric risks",
          journal: "Science",
          year: 2018,
          pmid: "30545854"
        },
        {
          num: 7,
          authors: "Wang D et al.",
          title: "Comprehensive functional genomic resource and integrative model for the human brain",
          journal: "Science",
          year: 2018,
          pmid: "30545857"
        }
      ]
    },
    {
      name: "Structural Variations in Genomes",
      papers: [
        {
          num: 1,
          authors: "Zhou B, Purmann C, Guo H, Shin GW, Huang Y, Pattni R, Meng Q, Greer SU, Roychowdhury T, Wood RN, Ho M, Dohna H, Abyzov A, Hallmayer J, Wong WH, Ji H, Urban AE",
          title: "Resolving the 22q11.2 deletions using CTLR-Seq reveals chromosomal rearrangement mechanisms and individual variance in breakpoints",
          journal: "PNAS",
          year: 2024,
          pmid: "39042694"
        },
        {
          num: 2,
          authors: "Roychowdhury T, Abyzov A",
          title: "Chromatin organization modulates the origin of heritable structural variations in human genome",
          journal: "Nucleic Acids Research",
          year: 2019,
          pmid: "30773596"
        },
        {
          num: 3,
          authors: "Roychowdhury T#, Mandal S, Bhattacharya A#",
          title: "Analysis of IS6110 insertion sites provides a glimpse into genome evolution of Mycobacterium tuberculosis",
          journal: "Scientific Reports",
          year: 2015,
          pmid: "26215170"
        }
      ]
    },
    {
      name: "Pathogen Genomics (Early works)",
      papers: [
        {
          num: 1,
          authors: "Mandal S, Roychowdhury T, Bhattacharya A",
          title: "Pattern of genomic variation in SARS-CoV-2 (COVID-19) suggests restricted nonrandom changes: Analysis using Shewhart control charts",
          journal: "Journal of Biosciences",
          year: 2021,
          pmid: "33709963"
        },
        {
          num: 2,
          authors: "Roychowdhury T, Singh VK, Bhattacharya A",
          title: "Classification of pathogenic microbes using a minimal set of single nucleotide polymorphisms derived from whole genome sequences",
          journal: "Genomics",
          year: 2018,
          pmid: "29432978"
        },
        {
          num: 3,
          authors: "Biswal DK*, Roychowdhury T*, Pandey P, Tandon V",
          title: "De novo genome and transcriptome analyses provide insights into the biology of the trematode human parasite Fasciolopsis buski",
          journal: "PLoS One",
          year: 2018,
          pmid: "30325945"
        },
        {
          num: 4,
          authors: "Mandal S, Roychowdhury T, Chirom K, Bhattacharya A, Singh RKB",
          title: "Complex multifractal nature in Mycobacterium tuberculosis genome",
          journal: "Scientific Reports",
          year: 2017,
          pmid: "28440326"
        },
        {
          num: 5,
          authors: "Kumar M, Prasad NG, Roychowdhury T, Thakur PK, Banakar P, Shukla RN, Jones MG, Rao U",
          title: "De novo Transcriptome sequencing and Analysis of the Cereal Cyst Nematode, Heterodera avenae",
          journal: "PLoS One",
          year: 2014,
          pmid: "24802510"
        },
        {
          num: 6,
          authors: "Roychowdhury T, Vishnoi A, Bhattacharya A",
          title: "Next-Generation Anchor Based Phylogeny (NexABP): Constructing phylogeny from Next-generation sequencing data",
          journal: "Scientific Reports",
          year: 2013,
          pmid: "24022334"
        },
        {
          num: 7,
          authors: "Das S*, Roychowdhury T*, Kumar P, Kumar A, Kalra P, Singh J, Singh S, Prasad HK#, Bhattacharya A#",
          title: "Genetic heterogeneity revealed by sequence analysis of Mycobacterium tuberculosis isolates from extra-pulmonary tuberculosis patients",
          journal: "BMC Genomics",
          year: 2013,
          pmid: "23773324"
        }
      ]
    }
  ],
  news: [
    { text: "Hope for first drug treatment for life-threatening aneurysms", url: "https://le.ac.uk/news/2023/october/aneurysms-drug-treatment" },
    { text: "Study identifies nearly 100 abdominal aortic aneurysm risk genes", url: "https://www.bioworld.com/articles/702563-study-identifies-nearly-100-abdominal-aortic-aneurysm-risk-genes" },
    { text: "Interview in American Journal of Human Genetics — Highlighted article of September 2021", url: "https://www.ashg.org/publications-news/ashg-news/inside-ajhg-a-chat-with-cristen-willer-and-tanmoy-roychowdhury/" },
    { text: "Unlocking genetic clues behind aortic aneurysm", url: "https://labblog.uofmhealth.org/lab-notes/unlocking-genetic-clues-behind-aortic-aneurysm" },
    { text: "Revealing the brain's molecular architecture by PsychENCODE consortium (member). Cover story of Science, 14th December, 2018.", url: "https://www.science.org/doi/10.1126/science.362.6420.1262" },
    { text: "Using brain organoids to uncover causes of neuropsychiatric disorders", url: "https://individualizedmedicineblog.mayoclinic.org/2019/01/14/using-brain-organoids-to-uncover-causes-of-neuropsychiatric-disorders/" }
  ]
};

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-widest text-gold-600 font-bold uppercase mb-4"
          >Selected Works</motion.h2>
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
            <p className="text-lg md:text-xl font-serif text-olive-800 italic leading-relaxed mb-3">
              Broad area of research:
            </p>
            <p className="text-xl md:text-2xl font-serif text-ink font-medium leading-relaxed">
              {publicationsData.broadArea}
            </p>
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
              {/* Category Header — clickable to expand */}
              <button
                onClick={() => toggleCategory(catIdx)}
                className="w-full group"
              >
                <div className={`bg-bone hover:bg-white border border-olive-200/60 hover:border-gold-400/50 rounded-xl p-5 md:p-7 transition-all duration-400 hover:shadow-[0_12px_40px_-10px_rgba(107,112,92,0.15)] relative overflow-hidden flex items-center gap-4 md:gap-6 ${expandedCategory === catIdx ? 'bg-white border-gold-400/50 shadow-[0_12px_40px_-10px_rgba(107,112,92,0.15)]' : ''}`}>
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[4px] ${categoryColors[catIdx].bg} rounded-l-xl transition-all duration-500`}></div>

                  {/* Category icon */}
                  <div className="shrink-0 pl-4 text-olive-400 group-hover:text-gold-600 transition-colors duration-300">
                    {React.createElement(categoryIcons[catIdx] || DnaIcon)}
                  </div>

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
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
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
                            <path d="M7 17L17 7"/>
                            <path d="M7 7h10v10"/>
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
            <h4 className="text-sm tracking-widest text-gold-600 font-bold uppercase mb-3">In the News</h4>
            <h5 className="text-2xl md:text-3xl font-serif text-ink">News & Highlights</h5>
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
            href="https://scholar.google.com/citations?user=REPLACE_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-olive-800 hover:bg-gold-600 text-bone transition-all duration-300 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest shadow-xl transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            View All on Google Scholar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
          <h3 className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.3em] text-gold-500 mb-8">Contact Us</h3>
          
          {/* Email */}
          <a href="mailto:tanmoy.roychowdhury@ashoka.edu.in" className="group flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-500/20 group-hover:border-gold-500/30 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Email</span>
              <span className="text-[0.95rem] font-serif text-bone group-hover:text-gold-400 transition-colors duration-300 break-all">tanmoy.roychowdhury@ashoka.edu.in</span>
            </div>
          </a>

          {/* Lab */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Lab</span>
              <span className="text-[0.95rem] font-serif text-bone leading-relaxed">Computational Disease Genomics Group</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <span className="text-sm font-light text-bone/70 block mb-1">Address</span>
              <span className="text-[0.95rem] font-serif text-bone leading-relaxed">
                Ashoka University<br />
                Rajiv Gandhi Education City<br />
                Sonipat, Haryana 131029<br />
                India
              </span>
            </div>
          </div>
        </div>

        {/* Explore Column */}
        <div className="md:col-span-3">
          <h3 className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.3em] text-gold-500 mb-8">Explore</h3>
          <nav className="flex flex-col space-y-4">
            {[
              { label: "Overview", href: "#" },
              { label: "Research", href: "#research" },
              { label: "Publications", href: "#publications" },
              { label: "People", href: "#team" },
              { label: "Glimpse", href: "#glimpse" },
              { label: "Join Us", href: "#join" },
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
