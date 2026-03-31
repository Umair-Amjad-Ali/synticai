"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ChevronDown, Mail } from "lucide-react";

const jobs = [
  {
    id: "flutter-dev",
    title: "Flutter Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, high-performance cross-platform applications.",
    responsibilities: [
      "Design and build sophisticated and highly scalable apps using Flutter.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Write clean, maintainable, and efficient code.",
      "Discover, evaluate, and implement new technologies to maximize development efficiency."
    ],
    requirements: [
      "2+ years of experience with Flutter and Dart.",
      "Experience with state management solutions (Provider, Riverpod, BLoC).",
      "Strong understanding of the mobile development life cycle.",
      "Experience working with RESTful APIs or GraphQL."
    ],
    benefits: [
      "Competitive salary and equity packages.",
      "Flexible working hours and remote options.",
      "Health, dental, and vision insurance.",
      "Annual learning and development stipend."
    ]
  },
  {
    id: "web-dev",
    title: "Web Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create responsive and dynamic web interfaces with modern frameworks.",
    responsibilities: [
      "Develop new user-facing features using React and Next.js.",
      "Build reusable components and front-end libraries for future use.",
      "Translate designs and wireframes into high-quality code.",
      "Optimize components for maximum performance across a vast array of web-capable devices and browsers."
    ],
    requirements: [
      "3+ years of experience in frontend development.",
      "Strong proficiency in JavaScript, TypeScript, and React.",
      "Experience with modern CSS (TailwindCSS, CSS-in-JS).",
      "Familiarity with RESTful APIs and modern frontend build pipelines."
    ],
    benefits: [
      "Competitive salary and equity packages.",
      "Flexible working hours and remote options.",
      "Health, dental, and vision insurance.",
      "Annual learning and development stipend."
    ]
  },
  {
    id: "ai-dev",
    title: "AI Developer",
    department: "AI & Data",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Develop cutting-edge machine learning models and intelligent systems.",
    responsibilities: [
      "Design and implement scalable machine learning models.",
      "Work closely with data engineers to build robust data pipelines.",
      "Deploy models into production and monitor their performance.",
      "Stay up-to-date with the latest advancements in AI and ML techniques."
    ],
    requirements: [
      "MS or Ph.D. in Computer Science, AI, or related field.",
      "Experience with deep learning frameworks like TensorFlow or PyTorch.",
      "Strong programming skills in Python & C++.",
      "Experience deploying ML models into scalable production environments."
    ],
    benefits: [
      "Top-tier compensation and equity.",
      "Cutting-edge hardware and cloud compute credits.",
      "Comprehensive global health coverage.",
      "Continuous learning and conference stipends."
    ]
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and construct scalable APIs and robust server architectures.",
    responsibilities: [
      "Design, build, and maintain high-performance, scalable backend services.",
      "Collaborate with frontend developers to integrate user-facing elements.",
      "Implement strong security and data protection measures.",
      "Troubleshoot, debug, and upgrade existing systems."
    ],
    requirements: [
      "4+ years of backend development experience.",
      "Proficiency in Node.js, Python, or Go.",
      "Deep understanding of database systems (SQL and NoSQL).",
      "Experience with cloud services (AWS, GCP, Azure) and containerization."
    ],
    benefits: [
      "Competitive salary and equity packages.",
      "Flexible working hours and remote options.",
      "Health, dental, and vision insurance.",
      "Generous home office setup stipend."
    ]
  },
];

export default function JobPostings() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCopyEmail = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText("hello@synticai.com");
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20 relative z-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 mt-9">Open Positions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're looking for talented individuals to join our growing team. Find the perfect role for your skills.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {jobs.map((job, index) => {
          const isExpanded = expandedId === job.id;

          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "border-brand/30 bg-dark-card shadow-[0_0_30px_rgba(28,117,188,0.1)]"
                  : "border-white/5 bg-dark-card hover:bg-dark-card-2 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleExpand(job.id)}
                className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-3xl"
              >
                {/* Left info */}
                <div className="flex-1">
                  <div className="text-brand text-xs font-bold uppercase tracking-widest mb-2">
                    {job.department}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 transition-colors hover:text-brand-light">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-2xl">
                    {job.description}
                  </p>
                </div>

                {/* Badges & Expand Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex items-center gap-3 mr-4">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {job.type}
                    </span>
                  </div>
                  
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isExpanded ? "bg-brand border-brand" : "bg-white/5 border-white/10"}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : "text-gray-400"}`} />
                  </div>
                </div>
              </button>

              {/* Expanded Details */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5">
                      
                      {/* Internal lists grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
                        
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-brand" />
                            Responsibilities
                          </h4>
                          <ul className="flex flex-col gap-3">
                            {job.responsibilities.map((req, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-light/60 mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-10">
                          {/* Requirements */}
                          <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                              <span className="w-1.5 h-4 bg-brand rounded-sm block" />
                              Role Requirements
                            </h4>
                            <ul className="flex flex-col gap-3">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                            
                          {/* Benefits */}
                          <div>
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                              <span className="w-1.5 h-4 bg-brand-light rounded-sm block" />
                              Benefits
                            </h4>
                            <ul className="flex flex-col gap-3">
                              {job.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>

                      {/* Apply Action */}
                      <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/2 p-6 rounded-2xl">
                        <div className="flex-1">
                          <p className="text-white font-bold mb-1">Ready to apply?</p>
                          <p className="text-sm text-gray-400">
                            Send your CV at Mail. Please ensure your email subject is formatted exactly as: <strong className="text-white">Application for {job.title}</strong>
                          </p>
                        </div>
                        <button
                          onClick={(e) => handleCopyEmail(e, job.id)}
                          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {copiedId === job.id ? (
                            <>
                              <svg className="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-brand-light">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Mail className="w-4 h-4" />
                              Copy Email
                            </>
                          )}
                        </button>
                      </div>
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
