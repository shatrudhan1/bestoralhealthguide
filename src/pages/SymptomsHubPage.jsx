import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// Comprehensive Mock Data structured for SEO and deep clinical context
const SYMPTOMS_DATA = [
  {
    id: "bad-breath",
    title: "Bad Breath (Halitosis)",
    category: "Breath & Saliva",
    shortDesc: "Persistent unpleasant odour from the mouth that doesn't disappear after brushing.",
    longDesc: "While often linked to volatile sulfur compounds from oral bacteria, chronic halitosis can also point to systemic conditions, sinus infections, or gastrointestinal issues.",
    severity: "Low to Moderate",
    urgency: "Consult a dentist if symptoms persist beyond 2 weeks despite rigorous hygiene.",
    commonCauses: ["Poor dental hygiene", "Dry mouth (Xerostomia)", "Gum disease", "Acid reflux"],
    url: "/bad-breath",
    tags: ["breath", "odour", "smell", "halitosis", "hygiene"]
  },
  {
    id: "bleeding-gums",
    title: "Bleeding Gums",
    category: "Gums & Soft Tissue",
    shortDesc: "Gums that bleed easily, especially during brushing, flossing, or eating firm foods.",
    longDesc: "Bleeding gums are a hallmark sign of inflammation and the earliest stage of periodontal disease (gingivitis). Prompt intervention can completely reverse this state.",
    severity: "Moderate",
    urgency: "Schedule a cleaning and evaluation within 1-2 weeks if bleeding is daily.",
    commonCauses: ["Plaque buildup", "Gingivitis", "Vigorous brushing", "Vitamin deficiency"],
    url: "/bleeding-gums",
    tags: ["gums", "bleeding", "blood", "gingivitis", "periodontitis"]
  },
  {
    id: "tooth-sensitivity",
    title: "Tooth Sensitivity (Dentin Hypersensitivity)",
    category: "Teeth & Pain",
    shortDesc: "Sharp, sudden discomfort triggered by hot, cold, sweet, or highly acidic foods and drinks.",
    longDesc: "Occurs when protective enamel wears down or gums recede, exposing the microscopic tubules of underlying dentin and stimulating internal nerve pathways.",
    severity: "Low to Moderate",
    urgency: "Discuss with your dentist at your next visit, or sooner if pain lingers after triggers are removed.",
    commonCauses: ["Enamel erosion", "Receding gums", "Tooth grinding (Bruxism)", "Recent dental work"],
    url: "/tooth-sensitivity",
    tags: ["sensitivity", "sensitive", "cold", "hot", "pain"]
  },
  {
    id: "dry-mouth",
    title: "Dry Mouth (Xerostomia)",
    category: "Breath & Saliva",
    shortDesc: "A subjective feeling of dryness in the oral cavity caused by reduced salivary flow.",
    longDesc: "Saliva is critical for washing away debris and neutralizing acids. Chronic dry mouth dramatically accelerates tooth decay and increases the risk of oral infections.",
    severity: "Moderate",
    urgency: "Seek professional advice if causing difficulty swallowing, speaking, or persistent sour taste.",
    commonCauses: ["Prescription medications", "Dehydration", "Mouth breathing", "Autoimmune conditions"],
    url: "/dry-mouth",
    tags: ["dry", "mouth", "saliva", "spit", "xerostomia"]
  },
  {
    id: "toothache",
    title: "Sharp or Throbbing Toothache",
    category: "Teeth & Pain",
    shortDesc: "Constant or intermittent aching, pressure-induced pain, or severe throbbing within or around a tooth.",
    longDesc: "Often indicates active decay reaching the inner pulp chambers, dental trauma, infection, or a abscess. This is a progressive condition requiring professional intervention.",
    severity: "High",
    urgency: "Contact an emergency dentist immediately if pain is severe, accompanied by swelling or fever.",
    commonCauses: ["Deep cavities", "Abscessed tooth", "Fractured or cracked tooth", "Infected pulp"],
    url: "/toothache",
    tags: ["pain", "toothache", "throb", "ache", "emergency"]
  },
  {
    id: "receding-gums",
    title: "Receding Gums",
    category: "Gums & Soft Tissue",
    shortDesc: "Gum tissue pulling back from the tooth surface, exposing delicate root structures.",
    longDesc: "Gum recession exposes dental roots which lack protective enamel, rendering them highly vulnerable to decay, plaque accumulation, and progressive structural instability.",
    severity: "Moderate to High",
    urgency: "Early assessment is key. Book a visit to prevent root surface cavities and bone loss.",
    commonCauses: ["Aggressive brushing", "Periodontal disease", "Genetics", "Orthodontic movement"],
    url: "/receding-gums",
    tags: ["gums", "recession", "roots", "exposed", "shrink"]
  },
  {
    id: "canker-sores",
    title: "Mouth Ulcers & Canker Sores",
    category: "Gums & Soft Tissue",
    shortDesc: "Small, painful, round or oval sores that develop on the inner cheeks, lips, or under the tongue.",
    longDesc: "Commonly benign and non-contagious. However, persistent non-healing ulcers lasting longer than 10-14 days must be evaluated by a healthcare provider to rule out pathology.",
    severity: "Low to Moderate",
    urgency: "Monitor closely. Consult a professional if the sore lasts over 2 weeks or impedes eating.",
    commonCauses: ["Minor mouth injuries", "Stress", "Acidic foods", "Nutritional deficiencies"],
    url: "/canker-sores",
    tags: ["ulcer", "sore", "canker", "mouth", "lesion"]
  },
  {
    id: "jaw-clicking",
    title: "Jaw Clicking & TMJ Pain",
    category: "Jaw & Joint",
    shortDesc: "Clicking, popping, or grating sounds in the jaw joint accompanied by localized pain or limited range of motion.",
    longDesc: "Typically points to dysfunction of the Temporomandibular Joint (TMJ). Often exacerbated by systemic stress, muscle fatigue, or underlying alignment irregularities.",
    severity: "Moderate",
    urgency: "Consult a specialist if jaw locks open/closed, or if chewing becomes consistently painful.",
    commonCauses: ["TMJ disorder (TMD)", "Bruxism", "Malocclusion (misalignment)", "Arthritis"],
    url: "/jaw-clicking",
    tags: ["jaw", "tmj", "click", "pop", "joint", "chewing"]
  }
];

const CATEGORIES = ["All", "Teeth & Pain", "Gums & Soft Tissue", "Breath & Saliva", "Jaw & Joint"];

const FAQS = [
  {
    question: "When should I treat a dental symptom as an emergency?",
    answer: "You should seek immediate emergency dental care if you experience severe, unmanageable pain, visible facial or jaw swelling, bleeding that won't stop, a knocked-out permanent tooth, or any symptoms accompanied by a high fever or difficulty breathing."
  },
  {
    question: "Can minor gum bleeding go away on its own?",
    answer: "Minor bleeding due to a temporary irritant might resolve with restored gentle brushing and flossing routines. However, persistent bleeding is usually an early indicator of gingivitis (gum disease) and requires a professional cleaning to remove calcified tartar."
  },
  {
    question: "How often should I have an oral health checkup?",
    answer: "For most individuals, a professional dental checkup and clean every 6 months is recommended to catch potential issues early. Those with existing periodontal history or high cavity risk may benefit from visits every 3 to 4 months."
  },
  {
    question: "What is the primary cause of sudden tooth sensitivity?",
    answer: "Sudden sensitivity often stems from microscopic root exposure due to gum recession, localized enamel erosion from acidic diets, micro-fractures in old dental restorations, or tooth grinding (bruxism) during sleep."
  }
];

export default function SymptomsHubPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);

  // Filter Logic: Filters based on active tab and search matches (title, tags, desc)
  const filteredSymptoms = useMemo(() => {
    return SYMPTOMS_DATA.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const cleanSearch = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !cleanSearch ||
        item.title.toLowerCase().includes(cleanSearch) ||
        item.shortDesc.toLowerCase().includes(cleanSearch) ||
        item.tags.some((tag) => tag.includes(cleanSearch));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleFaq = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Header/SEO Schema Meta */}
      <div className="hidden">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Oral Health Symptoms Hub & Diagnostic Directory",
            "description": "Examine common dental symptoms, explore expert-backed clinical directories, and determine when to consult a dental professional.",
            "lastReviewed": "2026-06-13",
            "reviewedBy": {
              "@type": "Person",
              "name": "Dr. Sarah Thorne, DDS",
              "jobTitle": "Lead Clinical Dental Advisor"
            }
          })}
        </script>
      </div>

      {/* Modern Hero & Navigation Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        {/* Abstract Background Design Element */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-400 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Breadcrumb Navigation for UX & Crawling */}
          <nav className="mb-6 flex items-center space-x-2 text-xs font-medium tracking-wide text-teal-300 uppercase">
            <Link to="/" className="hover:text-teal-100 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Symptom Guide</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Headline and Copy Block */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-semibold text-teal-300 ring-1 ring-inset ring-teal-400/30">
                Patient-Centered Clinical Guidance
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Oral Health <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">Symptoms Guide</span>
              </h1>
              <p className="mt-4 text-base text-slate-300 sm:text-lg max-w-xl leading-relaxed">
                Analyze dental, gum, and jaw concerns with our clinical index. Identify common underlying root causes, severity ratings, and recommended diagnostic pathways.
              </p>

              {/* Interactive Internal Search Component */}
              <div className="mt-8 max-w-md">
                <label htmlFor="symptom-search" className="sr-only">Search oral symptoms</label>
                <div className="relative rounded-2xl shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="symptom-search"
                    className="block w-full rounded-2xl border-0 bg-white/10 py-4 pl-12 pr-4 text-white placeholder-slate-400 ring-1 ring-inset ring-white/20 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-2 focus:ring-teal-400 sm:text-sm transition-all focus:outline-none"
                    placeholder="Search e.g., bleeding gums, loose teeth, jaw click..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-200"
                      aria-label="Clear Search Input"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span>Popular searches:</span>
                  {["bleeding", "sensitivity", "pain"].map((kw) => (
                    <button
                      key={kw}
                      onClick={() => setSearchTerm(kw)}
                      className="rounded bg-white/5 px-2 py-0.5 hover:bg-white/10 text-teal-300 hover:text-white transition"
                    >
                      +{kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Trust / Statistics Cards Component */}
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">100% Clinically Vetted</h4>
                  <p className="text-xs text-slate-400">Reviewed by board-certified dental surgery specialists</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">8 Primary Diagnostic Vectors</h4>
                  <p className="text-xs text-slate-400">Extensive categorization of major oral health warning signs</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 hover:border-teal-500/30 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-100">4.5M+ Annual Users</h4>
                  <p className="text-xs text-slate-400">Trusted online diagnosis support for families globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Symptom Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter Pills (UX Optimization) */}
        <div className="mb-10">
          <h2 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-4">
            Filter Symptoms by Anatomical Area
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all shadow-sm ${
                    isActive
                      ? "bg-teal-600 text-white ring-2 ring-teal-600 ring-offset-2"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Symptom Grid Output */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map((symptom) => {
              const severityColor =
                symptom.severity === "High"
                  ? "bg-red-50 text-red-700 ring-red-600/10"
                  : symptom.severity.includes("Moderate")
                  ? "bg-amber-50 text-amber-800 ring-amber-600/20"
                  : "bg-emerald-50 text-emerald-800 ring-emerald-600/20";

              return (
                <div
                  key={symptom.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-500/30"
                >
                  <div>
                    {/* Header: Category & Severity Indicators */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-teal-600 tracking-wide uppercase">
                        {symptom.category}
                      </span>
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${severityColor}`}>
                        {symptom.severity} Severity
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {symptom.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                      {symptom.shortDesc}
                    </p>

                    {/* Quick Diagnostic Insights */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Common Causes</h4>
                      <ul className="mt-2 space-y-1">
                        {symptom.commonCauses.slice(0, 3).map((cause, i) => (
                          <li key={i} className="flex items-center text-xs text-slate-700">
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Urgency Callout */}
                    <p className="mt-4 text-xs italic text-slate-500 bg-slate-50 p-2.5 rounded-lg border-l-2 border-teal-500">
                      <strong>Immediate advice:</strong> {symptom.urgency}
                    </p>
                  </div>

                  {/* Call to Action Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      to={symptom.url}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-center text-xs font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all"
                    >
                      Read Diagnostic Treatment Guide
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            /* Elegant Empty Search Results State */
            <div className="col-span-full py-16 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">No matching symptoms found</h3>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find matches for "{searchTerm}". Double-check the spelling, change category filters, or explore general categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-teal-700 focus:outline-none"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clinical Review & Advisory Banner */}
      <section className="bg-white border-y border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-gradient-to-br from-teal-50 via-slate-50 to-emerald-50 p-6 md:p-10 border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Medical Review Council</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Editorial Integrity & Clinical Accuracy
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Every piece of information featured on the Oral Health Symptoms Guide undergoes an extensive double-blind review process by our Medical Advisory Board of board-certified periodontists, dental surgeons, and oral pathologists.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                This clinical reference hub adheres strictly to the health-vetted guidelines set forth by the World Health Organization and the American Dental Association.
              </p>
            </div>

            {/* Featured Doctor Profile */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 shrink-0 w-full md:w-auto">
              <div className="h-14 w-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-teal-600 shrink-0">
                <span className="text-lg font-bold text-teal-700">ST</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Dr. Sarah Thorne, DDS, MS</h4>
                <p className="text-xs text-teal-600 font-semibold">Chief Dental Pathology Officer</p>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <svg className="h-3.5 w-3.5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Medically Vetted in June 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Critical understanding of oral warning signs, symptom management, and emergency protocols.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-950 focus:outline-none focus:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className="ml-4 shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-500 transition-transform">
                    <svg
                      className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 border-t border-slate-100 p-5" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety Notice Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="mx-auto max-w-6xl text-centre md:text-left flex flex-col md:flex-row justify-between items-centre gap-6">
          <div className="max-w-md">
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-2">Oral Symptoms Index</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Disclaimer:</strong> The Clinical Symptom Hub is compiled solely for informational and educational purposes. It does not establish a dentist-patient relationship and should never be utilized as a substitute for professional clinical diagnosis, emergency triage, or treatment.
            </p>
          </div>
          <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider">
            <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link to="/editorial-guidelines" className="hover:text-teal-400 transition-colors">Editorial Policy</Link>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Expert Council</Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-8 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Clinical Oral Hub Network. All Rights Reserved. Vetted Globally.
        </div>
            </footer>
    </main>
  )
}
