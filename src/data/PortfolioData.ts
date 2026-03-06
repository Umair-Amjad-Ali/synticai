export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  year: string;
  duration: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const portfolioProjects: PortfolioItem[] = [
  {
    id: "1",
    title: "AI-Powered HIMS",
    description: "The owner of BUCH Hospital needed a solution to manage administrative and patient details efficiently. We built a system ensuring medical records are secure.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/1",
    category: "Healthcare",
    year: "2024",
    duration: "6 Months",
    technologies: ["React", "Node.js", "PostgreSQL", "TensorFlow", "AWS", "Docker"],
    features: [
      "Patient registration, digital profile creation, and full medical history management.",
      "Appointment scheduling system with automated email and SMS reminders.",
      "AI-powered symptom triage engine that prioritizes patient urgency in real time.",
      "ICU and ward bed availability prediction using trained TensorFlow ML models.",
      "Role-based access control (RBAC) for doctors, nurses, and administrators.",
      "HIPAA-compliant data encryption and secure audit logs for all record access.",
      "Real-time analytics dashboard with staff productivity and patient flow KPIs.",
    ],
    challenge: "BUCH Hospital was struggling with a massive influx of patient data, archaic paper-based record-keeping, and inefficient scheduling. The administrative overhead was causing significant delays in patient care and increasing the risk of data loss. They needed a secure, intelligent, and infinitely scalable system that could handle everything from appointments to complex medical records securely.",
    solution: "We engineered a ground-up AI-Powered Hospital Information Management System (HIMS). We migrated their legacy structured data into a high-availability PostgreSQL cluster on AWS and built a blindingly fast React frontend for staff. Furthermore, we integrated a custom TensorFlow model that automatically triages patient symptom data and predicts bed occupancy rates, fundamentally streamlining their operations.",
    results: [
      "Reduced patient wait times by an astonishing 45%.",
      "Cut administrative data-entry hours by over 120 hours per week.",
      "Achieved 99.99% uptime with complete HIPAA-compliant data encryption.",
      "Predicted ICU bed availability with 92% accuracy during peak flu season."
    ]
  },
  {
    id: "2",
    title: "Generative Image Studio",
    description: "Our client experienced ongoing challenges in the pursuit of custom thumbnails and images for their daily social media posts. We built a generative AI tool to automate their entire creative pipeline.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    link: "/portfolio/2",
    category: "Generative AI",
    year: "2023",
    duration: "4 Months",
    technologies: ["Next.js", "Stable Diffusion", "Python", "FastAPI", "Vercel", "TailwindCSS"],
    features: [
      "Text-to-image generation powered by a fine-tuned Stable Diffusion model.",
      "Brand kit integration allowing users to lock colors, fonts, and logo watermarks.",
      "Batch generation mode producing up to 20 unique image variants simultaneously.",
      "Prompt history and image versioning with one-click regeneration.",
      "Export to multiple formats and sizes optimized for each social media platform.",
      "Team workspace with shared asset library and approval workflow.",
    ],
    challenge: "A leading marketing agency was bleeding money and time waiting for graphic designers to manually create hundreds of unique ad thumbnails and social media banners every week. The sheer volume of content required a creative velocity that human designers simply couldn't sustain without burnout.",
    solution: "We deployed a custom-tuned Generative Image Studio powered by a fine-tuned Stable Diffusion model. Wrapped in a stunning, highly intuitive Next.js web application, marketing executives could now enter simple text prompts specifying their brand guidelines, target audience, and ad style. The underlying Python FastAPI backend instantly generated batches of highly relevant, on-brand imagery in seconds.",
    results: [
      "Decreased average image creation time from 4 hours to 12 seconds.",
      "Saved the agency an estimated $140,000 annually in stock photo licenses and freelance fees.",
      "Increased ad click-through rates (CTR) by 28% through A/B testing uniquely generated variants.",
      "Scaled content output by 10x without hiring additional design staff."
    ]
  },
  {
    id: "3",
    title: "Social Trend Predictor",
    description: "An ML-powered social media management platform that simplifies content creation, scheduling, and uses predictive analytics to identify viral trends before they peak.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "/portfolio/3",
    category: "Marketing Tech",
    year: "2024",
    duration: "5 Months",
    technologies: ["Vue.js", "Django", "PyTorch", "Redis", "Celery", "GCP"],
    features: [
      "Real-time ingestion and NLP analysis of millions of social media posts per day.",
      "Keyword sentiment tracking and velocity scoring across Twitter, Reddit, and LinkedIn.",
      "Industry-specific trend alert system with configurable notification thresholds.",
      "Competitor brand monitoring and share-of-voice tracking.",
      "Content calendar integration suggesting optimal posting times for each platform.",
      "Interactive analytics dashboard with trend visualizations and historical comparisons.",
    ],
    challenge: "A global PR firm needed a competitive edge to help their clients stay ahead of the hyper-fast news cycle. Relying on gut feeling and delayed analytics reports meant they were constantly reacting to trends instead of capitalizing on them as they emerged.",
    solution: "We built the Social Trend Predictor, a real-time data ingestion engine capable of processing millions of global social media posts daily. Using natural language processing (NLP) models built with PyTorch, the system gauges sentiment and velocity of keywords. The intuitive dashboard alerts PR managers to emerging topics specific to their clients' industries days before they hit mainstream media.",
    results: [
      "Processed over 50 million social data points daily with sub-second latency.",
      "Identified 14 major industry trends an average of 3 days prior to peak virality.",
      "Boosted client engagement metrics by 41% through hyper-relevant, perfectly timed posting.",
      "Reduced manual trend-research time by 85%."
    ]
  },
  {
    id: "4",
    title: "Patient Diagnostic Bot",
    description: "This Patient Diagnostic System utilizes AI and ML algorithms in a conversational chatbot to streamline disease diagnosis, alleviating the heavy burden on doctors.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/4",
    category: "AI Diagnostics",
    year: "2023",
    duration: "8 Months",
    technologies: ["React Native", "Node.js", "OpenAI API", "Hugging Face", "Kubernetes"],
    features: [
      "Conversational AI chatbot that conducts dynamic, adaptive symptom intake interviews.",
      "Structured pre-diagnosis report generation summarizing patient complaints for doctors.",
      "HIPAA-compliant data handling with end-to-end patient conversation encryption.",
      "Emergency symptom detection module that immediately escalates critical cases to human staff.",
      "Multi-language support covering the client's top 8 patient demographics.",
      "Seamless integration with existing Electronic Health Record (EHR) systems via HL7 FHIR.",
      "Mobile app for iOS and Android with offline symptom data capture capability.",
    ],
    challenge: "A prominent telemedicine provider was drowning in initial consultation requests. Doctors were spending up to 60% of their valuable time merely gathering basic symptom history and asking routine triage questions, leading to massive backlogs and physician burnout.",
    solution: "We designed a highly empathetic, HIPAA-compliant conversational AI bot using fine-tuned Large Language Models. Patients interact with the bot through a sleek mobile app (React Native) prior to their appointment. The bot asks dynamic follow-up questions based on the patient's inputs and compiles a comprehensive, structured pre-diagnosis report for the doctor to review instantly.",
    results: [
      "Saved an average of 12 minutes per doctor consultation.",
      "Handled 10,000+ concurrent patient triage sessions without system degradation.",
      "Achieved a 94% patient satisfaction rating for the app's ease of use.",
      "Successfully flagged 100% of critical emergency symptoms for immediate human intervention."
    ]
  },
  {
    id: "5",
    title: "Smart Logistics Hub",
    description: "A complete overhaul of a legacy supply chain system. By implementing deep learning algorithms, we reduced shipping delays by 34% through intelligent route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/5",
    category: "Logistics",
    year: "2024",
    duration: "9 Months",
    technologies: ["Angular", "Spring Boot", "Kafka", "TensorFlow", "Azure", "Google Maps API"],
    features: [
      "Real-time GPS fleet tracking with live shipment status across all global routes.",
      "AI-powered dynamic route re-optimization responding to weather, traffic, and incidents.",
      "Event-driven architecture (Kafka) ensuring zero message loss across distributed nodes.",
      "Interactive global map visualization of all active and historical shipments.",
      "Automated delay prediction and customer notification system.",
      "Multi-carrier cost comparison engine for optimal carrier selection per route.",
      "Custom SLA monitoring dashboard for enterprise clients with penalty risk alerts.",
    ],
    challenge: "A multi-national logistics enterprise was losing millions annually due to inefficient routing, unpredictable weather delays, and a fragmented tracking system that provided zero real-time visibility into their global fleet.",
    solution: "We architected the Smart Logistics Hub, a massive distributed system built on event-driven architecture (Kafka). The core AI engine ingests real-time GPS data, live weather feeds, and historical traffic patterns to dynamically re-route shipments on the fly. The dashboard provides a stunning, high-performance global map visualization of all active shipments.",
    results: [
      "Slashed overall shipping delays by a massive 34%.",
      "Reduced fleet fuel consumption by 12% annually through optimized routing.",
      "Eliminated 99% of 'blind spots' in the international transit pipeline.",
      "Generated an ROI of over 300% within the first year of deployment."
    ]
  },
  {
    id: "6",
    title: "Fraud Shield AI",
    description: "Developed an anomaly detection engine for a rapidly growing FinTech startup. The AI continuously monitors millions of daily transactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/6",
    category: "FinTech",
    year: "2023",
    duration: "7 Months",
    technologies: ["React", "Go", "Elasticsearch", "Scikit-Learn", "AWS SageMaker"],
    features: [
      "Real-time transaction scoring engine evaluating 200+ behavioral micro-signals per event.",
      "ML anomaly detection model trained on billions of historical legitimate and fraudulent transactions.",
      "Automated account freeze and step-up authentication triggers for high-risk transactions.",
      "Case management dashboard for fraud analysts to review, action, and feedback flagged events.",
      "Network graph visualization to detect organized fraud rings spanning multiple accounts.",
      "Configurable risk policy engine allowing business rules to override or supplement AI scores.",
    ],
    challenge: "As a new peer-to-peer payment app scaled to millions of users, fraudulent transactions began to spike. Traditional rule-based fraud systems were returning too many false positives, blocking legitimate users and severely damaging trust in the platform.",
    solution: "We discarded the rigid rule-based system and implemented a state-of-the-art machine learning anomaly detection pipeline. Built with high-performance Go microservices and trained on AWS SageMaker, the Fraud Shield AI evaluates 200+ micro-behaviors per transaction (location variance, typing speed, historical patterns) in literally milliseconds to accurately score fraud probability.",
    results: [
      "Decreased successful fraudulent transactions by 89%.",
      "Reduced false-positive account freezes by 76%, saving thousands of support tickets.",
      "Processed transactions with an added latency of less than 15 milliseconds.",
      "Saved the company an estimated $4.2M in chargebacks in the first quarter."
    ]
  },
  {
    id: "7",
    title: "Hyper-Personalizer",
    description: "An eCommerce recommendation system that analyzes real-time user behavior to serve highly personalized product suggestions, boosting conversion rates by 22%.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/7",
    category: "Retail",
    year: "2024",
    duration: "5 Months",
    technologies: ["Next.js", "GraphQL", "Python", "Neo4j", "AWS Analytics"],
    features: [
      "Graph-database driven recommendation engine mapping user-product-session relationships.",
      "Real-time user intent detection adapting suggestions within seconds of landing on any page.",
      "Personalized homepage carousels, product detail cross-sells, and cart upsells.",
      "A/B testing framework for continuously measuring and improving recommendation quality.",
      "Cold-start model for new users leveraging demographic and referral data.",
      "Back-office merchandising dashboard to manually pin or exclude products from recommendations.",
    ],
    challenge: "A massive online fashion retailer found that despite high traffic, their average order value (AOV) and conversion rates were stagnant. Users were overwhelmed by the catalog size and the static, generic 'You might also like' sections were failing to engage buyers.",
    solution: "We implemented the Hyper-Personalizer, a sophisticated graph-database driven recommendation engine utilizing Neo4j. By mapping complex relationships between users, products, and real-time browsing sessions, the AI renders incredibly accurate, dynamic product carousels across the Next.js frontend, adapting to the user's intent within seconds of them landing on the site.",
    results: [
      "Boosted overall site conversion rates by a staggering 22%.",
      "Increased Average Order Value (AOV) by 18% through intelligent cross-selling.",
      "Drove a 35% increase in click-through rates on personalized homepage carousels.",
      "Reduced catalog search abandonment by actively surfacing relevant items."
    ]
  },
  {
    id: "8",
    title: "CropYield Predictor",
    description: "Utilizing drone imagery and computer vision, this tool analyzes crop health across thousands of acres to predict harvest yields.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/8",
    category: "AgriTech",
    year: "2022",
    duration: "10 Months",
    technologies: ["React", "Flask", "OpenCV", "TensorFlow", "AWS S3", "Mapbox"],
    features: [
      "Automated drone imagery ingestion pipeline processing multispectral aerial photography.",
      "Computer vision models detecting blight, water stress, and nutrient deficiency per field zone.",
      "Interactive Mapbox field health heatmaps showing crop condition down to square-meter level.",
      "Harvest yield prediction with 30-day advance forecasting and confidence intervals.",
      "Prescription map generation for precision irrigation and targeted pesticide application zones.",
      "Historical season comparison reports for agronomists and farm decision-makers.",
    ],
    challenge: "Industrial farming conglomerates were relying on manual soil testing and outdated weather almanacs to predict yields, leading to massive inefficiencies in supply chain planning and multi-million dollar variances between predicted and actual harvests.",
    solution: "We developed a high-altitude computer vision system. Drones fly over thousands of acres capturing multispectral imagery which is automatically uploaded to AWS. Our custom TensorFlow models segment the images to detect early signs of blight, water stress, and nutrient deficiency. The frontend provides agronomists with a beautiful, interactive Mapbox interface showing exact health heatmaps of their fields.",
    results: [
      "Achieved 96% accuracy in yield prediction a full month before harvest.",
      "Reduced unnecessary pesticide application by 25% via targeted spraying zones.",
      "Saved an estimated 40,000 gallons of water through precision irrigation insights.",
      "Cut manual field scouting time by 80%."
    ]
  },
  {
    id: "9",
    title: "Urban Traffic Control",
    description: "A sprawling smart city integration that links thousands of traffic cameras to a centralized AI dynamically adjusting traffic light timings.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1244&auto=format&fit=crop",
    link: "/portfolio/9",
    category: "Smart City",
    year: "2023",
    duration: "12 Months",
    technologies: ["Vue.js", "C++", "YOLOv8", "Nvidia DeepStream", "WebSockets"],
    features: [
      "Edge-based YOLOv8 vehicle, cyclist, and pedestrian detection at each intersection.",
      "Real-time adaptive signal control algorithm minimizing cumulative intersection wait times.",
      "Emergency vehicle preemption — automatically clears green corridors for ambulances and fire trucks.",
      "Centralized WebSocket-powered city command dashboard with live intersection status.",
      "Incident detection automatically adjusting adjacent signal timing to ease congestion.",
      "Historical traffic flow analytics for city planners to inform infrastructure investment.",
    ],
    challenge: "A major metropolitan city was experiencing gridlock that cost the local economy billions in lost productivity. The existing traffic light system operated on rigid, predetermined timers that couldn't adapt to accidents, special events, or severe weather.",
    solution: "We rolled out a sprawling edge-computing AI network. Utilizing YOLOv8 object detection running on edge devices at the intersections, the system counts vehicles, bicycles, and pedestrians in real-time. This data feeds into a central C++ optimization engine that dynamically alters light phases to maintain continuous flow. The city planners monitor everything via a live, WebSocket-powered command center dashboard.",
    results: [
      "Reduced average commuter travel time by 18% during peak rush hour.",
      "Decreased stop-and-go emissions by an estimated 14 tons per day.",
      "Improved emergency vehicle response times by preemptively clearing traffic corridors.",
      "Successfully integrated over 2,400 intersections into a single cohesive network."
    ]
  },
  {
    id: "10",
    title: "Adaptive Learning Platform",
    description: "We built an educational platform that uses continuous assessment data to custom-tailor lesson plans for individual students.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    link: "/portfolio/10",
    category: "EdTech",
    year: "2024",
    duration: "6 Months",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "OpenAI API"],
    features: [
      "Gamified micro-quiz assessment engine that continuously measures concept mastery.",
      "AI-driven curriculum router dynamically adjusting lesson difficulty and format per student.",
      "Multimodal content delivery switching between text, visual, and audio explanations based on learning style.",
      "Student progress dashboard with streak tracking, achievement badges, and parent/teacher visibility.",
      "Teacher analytics portal providing granular performance data and early intervention alerts.",
      "OpenAI-powered study assistant answering student questions contextually within their current lesson.",
    ],
    challenge: "A national tutoring franchise noticed that broad-strokes memorization approaches were failing students with unique learning disabilities or advanced aptitudes. Teachers couldn't manually customize lesson plans for 30 students simultaneously.",
    solution: "We developed an Adaptive Learning Platform that constantly assesses a student's grasp of concepts through gamified micro-quizzes. Based on their performance, the AI engine dynamically re-routes their curriculum in real-time—substituting visual explanations for text ones if they struggle with reading, or accelerating the pace if they master a topic quickly. The React frontend presents a fun, continuously rewarding interface for the students.",
    results: [
      "Improved standardized test scores by an average of 1.5 grades per student.",
      "Increased student daily engagement time by 45%.",
      "Provided teachers with highly granular analytics, saving 10 hours a week in grading.",
      "Scaled personal tutoring methodologies to over 100,000 active students."
    ]
  },
  {
    id: "11",
    title: "Threat Hunting AI",
    description: "Advanced neural networks constantly hunt for zero-day vulnerabilities across a company's internal servers, detecting breaches hours before existing systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/11",
    category: "Cybersecurity",
    year: "2024",
    duration: "8 Months",
    technologies: ["SvelteKit", "Rust", "Apache Flink", "TensorFlow", "AWS Security"],
    features: [
      "Neural network anomaly detection identifying slow data exfiltration and lateral server movement.",
      "Petabyte-scale network traffic log ingestion via Apache Flink stream processing.",
      "Automated Level-1 incident containment isolating compromised nodes without human intervention.",
      "Live network topology graph visualization showing active threat vectors and affected nodes.",
      "Threat intelligence integration pulling from global CVE and IOC databases in real time.",
      "Compliance reporting module generating SIEM-compatible logs for SOC audit requirements.",
    ],
    challenge: "A top-tier financial institution was facing increasingly sophisticated, automated cyber attacks. Their legacy security information and event management (SIEM) tools generated too much noise, causing alert fatigue among security analysts and delaying critical response times to actual threats.",
    solution: "We deployed a blistering fast anomaly detection engine written in Rust to ingest and monitor petabytes of network traffic logs via Apache Flink. The proprietary neural network isolates highly subtle adversarial movements (like slow data exfiltration or lateral server movement) that signature-based tools miss entirely. A highly responsive SvelteKit dashboard visualizes the network graph and attack vectors in real-time.",
    results: [
      "Reduced mean time to detect (MTTD) breaches from 12 hours to less than 4 minutes.",
      "Dropped false-positive alert volume by a staggering 92%.",
      "Automated Level 1 incident response containment, preventing lateral movement instantly.",
      "Secured over $50B in assets under management across a global 10,000-node network."
    ]
  },
  {
    id: "12",
    title: "Talent Matcher",
    description: "An AI-driven HR tool that matches candidate resumes with open job requisitions based on deep semantic analysis of skills, ignoring formatting bias.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/12",
    category: "HR Tech",
    year: "2023",
    duration: "4 Months",
    technologies: ["React", "Python", "SpaCy", "Elasticsearch", "PostgreSQL"],
    features: [
      "NLP-powered semantic resume parsing extracting skills, experience complexity, and project scope.",
      "Bias-blind candidate scoring ranking applicants purely on competency, not formatting.",
      "Job description analyzer matching required skills to inferred candidate skills automatically.",
      "Boolean and natural language search across a fully indexed resume database.",
      "Recruiter collaboration workspace with candidate notes, shortlists, and interview scheduling.",
      "Diversity analytics dashboard tracking gender, ethnicity, and age distribution of hiring pipeline.",
    ],
    challenge: "A Fortune 500 company was receiving upwards of 5,000 resumes a day. Human recruiters were drowning in paper, frequently overlooking highly qualified candidates simply due to awkward resume formatting or missing exact keyword matches required by their old ATS system.",
    solution: "We engineered 'Talent Matcher', an intelligent parsing engine that uses deep NLP (SpaCy) to understand the semantic meaning of a candidate's experience rather than just hunting for keywords. It strips away formatting, evaluates the actual complexity of projects listed, and scores candidates against required skills. The sleek React UI provides recruiters with a ranked, bias-free list of top talent.",
    results: [
      "Decreased time-to-hire from an average of 45 days to just 18 days.",
      "Increased diversity hiring by 20% by removing unconscious bias from the screening phase.",
      "Processed 5M+ historical resumes in 72 hours down to a searchable index.",
      "Recruiter satisfaction score improved to 9.2/10."
    ]
  },
  {
    id: "13",
    title: "Property Valuation Model",
    description: "Uses a massive dataset of historical property values, neighborhood demographics, and economic indicators to provide 98% accurate home price estimates.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/13",
    category: "Real Estate",
    year: "2024",
    duration: "5 Months",
    technologies: ["Next.js", "Python", "XGBoost", "Google Cloud", "TailwindCSS"],
    features: [
      "XGBoost valuation model ingesting 150+ property signals including crime rate, school ratings, and roof condition.",
      "Instant property estimate API returning a valuation band and confidence score in under 200ms.",
      "Interactive property comparison tool showing side-by-side valuations of comparable homes.",
      "Neighborhood trend charts visualizing historical price trajectories over 5 and 10-year periods.",
      "Investor deal analyzer calculating projected ROI, cap rates, and break-even timelines.",
      "Automated valuation report generation in PDF format for institutional buyers.",
    ],
    challenge: "A rising PropTech startup needed a killer feature to aggressively compete with massive real estate portals. They needed an automated valuation model (AVM) that was significantly more accurate than existing public models to build trust with high-net-worth investors.",
    solution: "We developed a hyper-accurate machine learning model using XGBoost that ingests over 150 unique data points per property—including hyper-local crime rates, proximity to high-rated schools, and even satellite imagery analysis of roof condition. The Next.js frontend presents this vast data payload into incredibly simple, highly aesthetic interactive charts and valuation bands.",
    results: [
      "Achieved a median error rate of just 1.8%, outperforming the industry leader.",
      "Drove 2.5 million unique organic visitors to the platform in the first 6 months.",
      "Powered over $400M in confident real estate transactions for institutional buyers.",
      "Reduced manual appraisal dependency for instant-offer acquisitions by 60%."
    ]
  },
  {
    id: "14",
    title: "Predictive Maintenance",
    description: "IoT sensors on factory floors feed real-time acoustic and vibrational data to an AI model that predicts machine failure 2 weeks in advance.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "/portfolio/14",
    category: "Manufacturing",
    year: "2022",
    duration: "7 Months",
    technologies: ["React", "FastAPI", "InfluxDB", "PyTorch", "Docker", "AWS IoT"],
    features: [
      "High-frequency IoT sensor integration capturing acoustic and vibrational signatures from CNC machines.",
      "PyTorch LSTM model trained to detect acoustic anomaly precursors up to 2 weeks before failure.",
      "Real-time time-series data storage and querying via InfluxDB for sub-millisecond alerting.",
      "Individual machine health scoring dashboard with predicted remaining lifespan estimates.",
      "Automated maintenance work order creation integrated with the client's existing ERP system.",
      "Spare parts inventory optimization engine suggesting purchase orders based on predicted failure timelines.",
    ],
    challenge: "A massive automotive parts manufacturer was suffering catastrophic financial losses from unexpected machine downtime on the assembly line. Reactive maintenance meant production halted, while scheduled maintenance was wasting perfectly good parts.",
    solution: "We deployed an end-to-end Predictive Maintenance platform. High-frequency acoustic and vibrational IoT sensors were attached to critical CNC machines. The real-time time-series data streams into InfluxDB, where PyTorch models identify imperceptible acoustic anomalies that precede a breakdown. The unified dashboard alerts floor managers with exactly which component is failing and exactly how much lifespan it has left.",
    results: [
      "Reduced unplanned machine downtime by an incredible 75%.",
      "Saved the facility $2.1M annually in lost production revenue and emergency repairs.",
      "Optimized the spare parts inventory by 30% through predictive ordering.",
      "Extended average machine operational lifespan by 15%."
    ]
  },
  {
    id: "15",
    title: "Carbon Footprint Tracker",
    description: "An ESG compliance platform utilizing computer vision on satellite feeds to independently verify deforestation and carbon credit claims.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    link: "/portfolio/15",
    category: "Climate Tech",
    year: "2024",
    duration: "6 Months",
    technologies: ["Vue.js", "Django", "PostGIS", "Google Earth Engine", "Computer Vision"],
    features: [
      "Automated satellite imagery analysis detecting deforestation events down to 1-square-meter resolution.",
      "Temporal forest change detection comparing satellite snapshots across configurable date ranges.",
      "Carbon sequestration rate calculator providing dynamic credit volume estimates per protected region.",
      "Fraudulent carbon offset flagging with evidence packets for regulatory submission.",
      "Public transparency dashboard allowing investors and regulators to view verified ESG claims.",
      "Custom boundary monitoring for protected zones with automated alert on boundary breach events.",
    ],
    challenge: "A global non-profit needed a way to audit the massive 'greenwashing' problem in the carbon credit market. Companies were claiming to protect forests, but there was no scalable way to actually verify if those trees were still standing without sending human auditors into remote jungles.",
    solution: "We built an independent, automated verification platform. By hooking directly into Google Earth Engine's satellite datasets, our computer vision models perform temporal analysis on protected forest regions to detect unauthorized logging or wildfires down to the square meter. The platform automatically calculates true carbon sequestration rates and flags fraudulent carbon offset claims on a public dashboard.",
    results: [
      "Successfully audited over 12 million acres of protected rainforest globally.",
      "Identified and flagged $40M worth of fraudulent carbon credits in the first year.",
      "Provided transparent, undeniable proof-of-impact for legitimate ESG investors.",
      "Automated an auditing process that previously took months down to 24 hours."
    ]
  }
];
