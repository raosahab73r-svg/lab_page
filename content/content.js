/**
 * ============================================================
 *  SITE CONTENT — Edit this file to update the website
 *  No need to touch app.jsx — all tunable content lives here.
 * ============================================================
 */

const SITE_CONTENT = {

  // ─────────────────────────────────────────────
  //  HERO SECTION
  // ─────────────────────────────────────────────
  hero: {
    subtitle: "Computational disease genomics group is interested in discovering diagnosis, prevention and therapy of human diseases using biobanks and patient cohorts."
  },

  // ─────────────────────────────────────────────
  //  OUR SCIENCE (About Section)
  // ─────────────────────────────────────────────
  about: {
    paragraphs: [
      "Our research group is dedicated to harnessing genomics to improve human health. We leverage large-scale genomic and phenotypic datasets from population biobanks and disease-specific patient cohorts to develop genomics-informed approaches for disease diagnosis, prevention, risk prediction, and therapeutic stratification. Our research spans a broad spectrum of complex diseases, including cardiovascular, metabolic, respiratory, and immune disorders.",
      "We aim to investigate the full spectrum of human genetic variation using bioinformatics and statistical genetics methodologies to uncover the molecular basis of disease susceptibility and clinical heterogeneity. By integrating population-scale genomic data with deep phenotypic information, we aim to identify clinically relevant genetic factors that can inform precision medicine. A major focus of our research is the development of genomics-driven precision health strategies for the Indian population."
    ]
  },

  // ─────────────────────────────────────────────
  //  RESEARCH AREAS
  // ─────────────────────────────────────────────
  research: {
    areas: [
      {
        title: "Polygenic Risk Scores",
        tagline: "GWAS, Risk prediction, Patient stratification",
        paragraphs: [
          "Common complex diseases arise through the combined influence of genetic and environmental factors. Unlike Mendelian disorders, their genetic architecture is highly polygenic, with disease risk determined by the cumulative effects of numerous common genetic variants, each contributing a small effect. Genome-wide association studies (GWAS) have identified hundreds of genomic loci associated with these complex diseases, providing valuable insights into their genetic basis.",
          "Recent advances have led to the development of polygenic risk scores (PRS), which are calculated using GWAS summary statistics. These scores can be applied to independent cohorts that were not included in the original GWAS, enabling the estimation of an individual\u2019s genetic predisposition to disease. PRS derived from disease-associated GWAS are increasingly becoming valuable for prediction of future disease risk. However, PRS developed using predominantly European ancestry datasets often demonstrate reduced predictive performance in other populations. The emergence of multi-ancestry GWAS has improved the transferability and predictive accuracy of PRS across diverse populations, although important challenges remain.",
          "Beyond disease risk prediction, PRS have broader applications in understanding disease biology. The polygenic architecture of complex diseases can be partitioned into genetic risk components associated with specific biological pathways or processes, resulting in partitioned PRS. Unlike genome-wide PRS, this can help in identifying biologically distinct disease subtypes and enable patient stratification, thereby guiding therapeutic decision-making.",
          "Our research group is broadly interested in applying PRS methodologies for the Indian population. By leveraging diverse genomic datasets and population-specific analyses, we aim to improve disease risk prediction, characterize disease heterogeneity, and advance the implementation of precision medicine in India."
        ]
      },
      {
        title: "Rare Variants in Disease",
        tagline: "High-impact coding variants, rare variants - polygenic interaction, target discovery",
        paragraphs: [
          "Although genome-wide association studies (GWAS) have been highly successful in identifying common variants with small effect sizes across the genome, translating these associations into therapeutic interventions for complex diseases remains challenging. This is largely due to the large number of associated loci, the predominance of non-coding variants, and the difficulty of pinpointing causal genes and biological mechanisms. Consequently, the discovery of high-impact rare variants within protein-coding regions continues to provide some of the most actionable insights into disease biology.",
          "Despite their low population frequencies, rare variants collectively outnumber common variants within an individual\u2019s genome. Understanding the functional consequences of these variants is therefore essential for deciphering the genetic basis of disease at the individual level. Recent large-scale biobank studies have provided compelling evidence that common and rare genetic variants often converge on the same causal genes, highlighting complementary mechanisms underlying disease susceptibility. Furthermore, although population genetic models traditionally classify diseases as either monogenic or polygenic, this distinction is increasingly recognized as an oversimplification at the individual level. For a given disease, an individual may carry predominantly polygenic risk, a pathogenic rare variant with a large effect, or a combination of both.",
          "A well-established example is provided by lipid metabolism, where rare protein-coding variants in PCSK9 and LDLR have large effects on circulating lipid levels and familial hypercholesterolemia, while common non-coding variants in the same genes contribute to polygenic risk. Similarly, analyses of the UK Biobank have demonstrated that although polygenic burden explains much of the variation across the population, rare variants account for a disproportionately greater share of heritability at the extremes of quantitative traits and frequently explain phenotypic discordance among siblings. In addition, emerging evidence suggests that interactions between rare variants and polygenic risk can influence disease age of onset, severity, clinical progression, and therapeutic response.",
          "Our research group is particularly interested in identifying rare genetic variants underlying complex diseases in the Indian population and investigating how these variants interact with polygenic risk factors to shape disease susceptibility and clinical outcomes. By integrating rare variant discovery with polygenic risk modelling, we aim to better understand the genetic architecture of complex diseases and contribute to the development of precision medicine strategies tailored to Indian populations."
        ]
      },
      {
        title: "Functional Genomics",
        tagline: "Multi-omics integration, molecular QTLs & disease mechanism discovery",
        paragraphs: [
          "Genetic variants exert their biological effects through changes in molecular phenotypes, including gene expression, protein abundance, and metabolite levels. Consequently, our research group is interested in integrating multiple functional omics modalities \u2014 including transcriptomics, proteomics, and metabolomics \u2014 with genomic data to better understand the molecular mechanisms linking genetic variation to disease.",
          "By combining genomic and multi-omics datasets, we aim to identify causal pathways, characterize disease biology, and uncover biomarkers and therapeutic targets for complex diseases. A particular focus of our research is the identification and characterization of molecular quantitative trait loci (QTLs), such as expression QTLs (eQTLs), protein QTLs (pQTLs), and metabolite QTLs (mQTLs), in disease-relevant tissues and populations.",
          "Through these efforts, we seek to generate population-specific functional genomic resources and deepen our understanding of the molecular architecture of complex diseases in the Indian population."
        ]
      }
    ],
    diseaseAreas: [
      "Abdominal Aortic Aneurysm",
      "COPD & Lung Function",
      "Coronary Artery Disease",
      "Systemic Lupus Erythematosus"
    ]
  },

  // ─────────────────────────────────────────────
  //  TEAM MEMBERS
  //  Photos go in: content/photos/team/
  // ─────────────────────────────────────────────
  team: [
    {
      name: "Dr. Tanmoy Roychowdhury",
      role: "Principal Investigator",
      education: "Ph.D.",
      initials: "TR",
      photo: "content/photos/team/tanmoy_roy.jpg",   // Added photo
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:tanmoy.roychowdhury@ashoka.edu.in",
      desc: "His work spans biology, physics, and data science, charting structural variants and neuropsychiatric dysregulation. Faculty at Ashoka University."
    },
    {
      name: "Joydeep",
      role: "Ph.D. Candidate",
      education: "Ph.D.",
      initials: "J",
      photo: "",   // e.g. "content/photos/team/joydeep.jpg"
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:joydeep.das_phd25@ashoka.edu.in",
      desc: "Investigating the genetic basis of complex traits using integrative multi-omics and advanced statistical models."
    },
    {
      name: "Govind Rajput",
      role: "Research Assistant",
      education: "M.Sc.",
      initials: "GR",
      photo: "content/photos/team/govind.jpg",
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:[EMAIL_ADDRESS]",
      desc: "Computational Genomics & HPC"
    },

    {
      name: "Sourav Sangam Mohanty",
      role: "Research Assistant",
      education: "M.Sc.",
      initials: "SSM",
      photo: "content/photos/team/ssm.jpeg",   // e.g. "content/photos/team/joydeep.jpg"
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:[EMAIL_ADDRESS]",
      desc: "Assisting in lab operations, data processing pipelines, and maintaining genomics computational infrastructure."
    },


    {
      name: "Khusi Rana",
      role: "Research Assistant",
      education: "M.Sc.",
      initials: "KR",
      photo: "",   // e.g. "content/photos/team/joydeep.jpg"
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "mailto:[EMAIL_ADDRESS]",
      desc: "Assisting in lab operations, data processing pipelines, and maintaining genomics computational infrastructure."
    },


  ],

  // ─────────────────────────────────────────────
  //  GLIMPSE / GALLERY
  //  Photos go in: content/photos/glimpse/
  //  You can provide a single 'image' or an array of 'images' for a slideshow.
  // ─────────────────────────────────────────────
  glimpse: [
    {
      image: "content/photos/glimpse/IMG_20251113_165306715_HDR_AE (1) (1).jpg",
      title: "",
      description: "",
      date: "Nov 13, 2025"
    },
    {
      image: "content/photos/glimpse/IMG_20260305_181637359_HDR_AE~2.jpg",
      title: "",
      description: "",
      date: "Dec 05, 2025"
    },
    {
      image: "content/photos/glimpse/IMG_20260415_131433072_HDR_AE (1).jpg",
      title: "",
      description: "",
      date: "Oct 28, 2025"
    }
  ],

  // ─────────────────────────────────────────────
  //  PUBLICATIONS
  // ─────────────────────────────────────────────
  publications: {
    broadArea: "Computational Genomics, Human Genetics and Precision Health",
    note: "(*Co-first author, # Co-corresponding author)",
    scholarUrl: "https://scholar.google.com/citations?user=zogNrkQAAAAJ",
    categories: [
      {
        name: "Cardiovascular, Metabolic & Lung Disease Genomics",
        papers: [
          { num: 1, authors: "Th\u00e9riault S, Holdcraft J, Sharipova D, ... Roychowdhury T, ... Body S", title: "Genome and transcriptome-wide analyses identify multiple candidate genes and a significant polygenic contribution in bicuspid aortic valve", journal: "Circulation", year: 2025, pmid: "41645906" },
          { num: 2, authors: "Kelemen M, Danesh J, Di Angelantonio E, Inouye M, O'Sullivan J, Pennells L, Roychowdhury T, Sweeting MJ, Wood AM, Harrison S, Kim LG", title: "Evaluating the cost-effectiveness of polygenic risk score-stratified screening for abdominal aortic aneurysm", journal: "Nature Communications", year: 2024, pmid: "39277617" },
          { num: 3, authors: "Roychowdhury T*#, Klarin D*, Levin MG*, ... Willer CJ#, Damrauer SM#", title: "Genome-wide association meta-analysis identifies risk loci for abdominal aortic aneurysm and highlights PCSK9 as a therapeutic target", journal: "Nature Genetics", year: 2023, pmid: "37845353" },
          { num: 4, authors: "Klarin D*, Devineni P*, Sendamarai AK*, ... Roychowdhury T, ... Damrauer SM#", title: "Genome-wide Association Study of Thoracic aortic aneurysm and Dissection in the Million Veteran Program", journal: "Nature Genetics", year: 2022, pmid: "37308786" },
          { num: 5, authors: "Roychowdhury T*, Lu H*, Hornsby WE, ... Garcia-Barrio MT#, Willer CJ#", title: "Regulatory variants in TCF7L2 are associated with thoracic aortic aneurysm", journal: "American Journal of Human Genetics", year: 2021, pmid: "34265237" },
          { num: 6, authors: "Nielsen JB*, Rom O*, Surakka I*, Graham SE*, Zhou W*, Roychowdhury T, ... Willer CJ#, Hveem K#", title: "Loss-of-function genomic variants highlight potential therapeutic targets for cardiovascular disease", journal: "Nature Communications", year: 2020, pmid: "33339817" },
          { num: 7, authors: "Zhou W*, Brumpton B*, ... Roychowdhury T, ... Willer CJ#, Asvold BO#", title: "GWAS of thyroid stimulating hormone highlights pleiotropic effects and inverse genetic association with thyroid cancer", journal: "Nature Communications", year: 2020, pmid: "32769997" }
        ]
      },
      {
        name: "Brain and Developmental Disease Genomics",
        papers: [
          { num: 1, authors: "Adkar S, Lynch J, Choi RB, Roychowdhury T, ... Klarin D", title: "Dissecting the genetic architecture of intracranial aneurysms", journal: "Circulation: Genomic and Precision Medicine", year: 2025, pmid: "40255156" },
          { num: 2, authors: "Amiri A*, Coppola G*, Scuderi S*, Wu F*, Roychowdhury T*, ... Abyzov A#, Vaccarino FM#", title: "Transcriptome and epigenome landscape of human cortical development modeled in brain organoids", journal: "Science", year: 2018, pmid: "30545853" },
          { num: 3, authors: "Bae T, Tomasini L, Mariani J, Zhou B, Roychowdhury T, ... Abyzov A#, Vaccarino FM#", title: "Different mutational rates and mechanisms in human cells at pre-gastrulation and neurogenesis", journal: "Science", year: 2018, pmid: "29217587" },
          { num: 4, authors: "Hu B et al.", title: "Neuronal and glial 3D chromatin architecture informs the cellular etiology of brain disorders", journal: "Nature Communications", year: 2021, pmid: "34172755" },
          { num: 5, authors: "Gandal MJ et al.", title: "Transcriptome-wide isoform-level dysregulation in ASD, schizophrenia, and bipolar disorder", journal: "Science", year: 2018, pmid: "30545856" },
          { num: 6, authors: "Li M et al.", title: "Integrative functional genomic analysis of human brain development and neuropsychiatric risks", journal: "Science", year: 2018, pmid: "30545854" },
          { num: 7, authors: "Wang D et al.", title: "Comprehensive functional genomic resource and integrative model for the human brain", journal: "Science", year: 2018, pmid: "30545857" }
        ]
      },
      {
        name: "Structural Variations in Genomes",
        papers: [
          { num: 1, authors: "Zhou B, Purmann C, Guo H, ... Roychowdhury T, ... Urban AE", title: "Resolving the 22q11.2 deletions using CTLR-Seq reveals chromosomal rearrangement mechanisms and individual variance in breakpoints", journal: "PNAS", year: 2024, pmid: "39042694" },
          { num: 2, authors: "Roychowdhury T, Abyzov A", title: "Chromatin organization modulates the origin of heritable structural variations in human genome", journal: "Nucleic Acids Research", year: 2019, pmid: "30773596" },
          { num: 3, authors: "Roychowdhury T#, Mandal S, Bhattacharya A#", title: "Analysis of IS6110 insertion sites provides a glimpse into genome evolution of Mycobacterium tuberculosis", journal: "Scientific Reports", year: 2015, pmid: "26215170" }
        ]
      },
      {
        name: "Pathogen Genomics (Early works)",
        papers: [
          { num: 1, authors: "Mandal S, Roychowdhury T, Bhattacharya A", title: "Pattern of genomic variation in SARS-CoV-2 (COVID-19) suggests restricted nonrandom changes: Analysis using Shewhart control charts", journal: "Journal of Biosciences", year: 2021, pmid: "33709963" },
          { num: 2, authors: "Roychowdhury T, Singh VK, Bhattacharya A", title: "Classification of pathogenic microbes using a minimal set of single nucleotide polymorphisms derived from whole genome sequences", journal: "Genomics", year: 2018, pmid: "29432978" },
          { num: 3, authors: "Biswal DK*, Roychowdhury T*, Pandey P, Tandon V", title: "De novo genome and transcriptome analyses provide insights into the biology of the trematode human parasite Fasciolopsis buski", journal: "PLoS One", year: 2018, pmid: "30325945" },
          { num: 4, authors: "Mandal S, Roychowdhury T, Chirom K, Bhattacharya A, Singh RKB", title: "Complex multifractal nature in Mycobacterium tuberculosis genome", journal: "Scientific Reports", year: 2017, pmid: "28440326" },
          { num: 5, authors: "Kumar M, Prasad NG, Roychowdhury T, ... Rao U", title: "De novo Transcriptome sequencing and Analysis of the Cereal Cyst Nematode, Heterodera avenae", journal: "PLoS One", year: 2014, pmid: "24802510" },
          { num: 6, authors: "Roychowdhury T, Vishnoi A, Bhattacharya A", title: "Next-Generation Anchor Based Phylogeny (NexABP): Constructing phylogeny from Next-generation sequencing data", journal: "Scientific Reports", year: 2013, pmid: "24022334" },
          { num: 7, authors: "Das S*, Roychowdhury T*, ... Prasad HK#, Bhattacharya A#", title: "Genetic heterogeneity revealed by sequence analysis of Mycobacterium tuberculosis isolates from extra-pulmonary tuberculosis patients", journal: "BMC Genomics", year: 2013, pmid: "23773324" }
        ]
      }
    ],
    news: [
      { text: "Hope for first drug treatment for life-threatening aneurysms", url: "https://le.ac.uk/news/2023/october/aneurysms-drug-treatment" },
      { text: "Study identifies nearly 100 abdominal aortic aneurysm risk genes", url: "https://www.bioworld.com/articles/702563-study-identifies-nearly-100-abdominal-aortic-aneurysm-risk-genes" },
      { text: "Interview in American Journal of Human Genetics \u2014 Highlighted article of September 2021", url: "https://www.ashg.org/publications-news/ashg-news/inside-ajhg-a-chat-with-cristen-willer-and-tanmoy-roychowdhury/" },
      { text: "Unlocking genetic clues behind aortic aneurysm", url: "https://labblog.uofmhealth.org/lab-notes/unlocking-genetic-clues-behind-aortic-aneurysm" },
      { text: "Revealing the brain's molecular architecture by PsychENCODE consortium (member). Cover story of Science, 14th December, 2018.", url: "https://www.science.org/doi/10.1126/science.362.6420.1262" },
      { text: "Using brain organoids to uncover causes of neuropsychiatric disorders", url: "https://individualizedmedicineblog.mayoclinic.org/2019/01/14/using-brain-organoids-to-uncover-causes-of-neuropsychiatric-disorders/" }
    ]
  },

  // ─────────────────────────────────────────────
  //  FOOTER / CONTACT
  // ─────────────────────────────────────────────
  footer: {
    email: "tanmoy.roychowdhury@ashoka.edu.in",
    labName: "Computational Disease Genomics Group",
    address: ["Ashoka University", "Rajiv Gandhi Education City", "Sonipat, Haryana 131029", "India"]
  }
};
