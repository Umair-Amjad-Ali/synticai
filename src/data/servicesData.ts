export interface BenefitItem {
  title: string;
  description: string;
}

export interface ServiceTab {
  name: string;
  heading: string;
  description: string;
  benefitsTitle?: string;
  benefits?: BenefitItem[];
}

export const servicesTabs: ServiceTab[] = [
  {
    name: "AI Development",
    heading: "AI Development",
    description:
      "At SynticAI, innovation meets intelligence. Our team of experts utilizes cutting-edge technologies to craft custom AI solutions that seamlessly integrate with your unique requirements, revolutionizing how you operate.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Cutting-Edge Expertise",
        description:
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
      },
      {
        title: "Seamless Integration",
        description:
          "We are dedicated to seamlessly integrating our AI solutions with your existing infrastructure, ensuring a smooth transition.",
      },
      {
        title: "Comprehensive AI Development Services",
        description:
          "From machine learning to natural language processing, our AI Development Services elevate your organization's capabilities.",
      },
      {
        title: "Empowering Organizational Capabilities",
        description:
          "Our mission is to empower organizations like yours to not only adapt but thrive in the dynamic landscape of AI technology.",
      },
    ],
  },
  {
    name: "AI Chatbot Development",
    heading: "AI Chatbot Development",
    description:
      "Our AI Chatbot Development Services are designed to transform customer interactions for businesses. We specialize in crafting Intelligent chatbots that engage in human-like dialogue.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Smart Dialogue",
        description:
          "We specialize in crafting chatbots capable of engaging in intelligent conversations. Our chatbots are designed to understand user queries and provide relevant responses.",
      },
      {
        title: "Task Automation",
        description:
          "Our chatbots excel in automating tasks, streamlining processes, and reducing manual intervention. It significantly improves efficiency.",
      },
      {
        title: "24/7 Customer Support",
        description:
          "With our AI chatbot solutions, businesses can offer round-the-clock customer support. Our chatbots are available 24/7, providing instant assistance to customers.",
      },
      {
        title: "Elevated Online Presence",
        description:
          "Experience the future of customer interaction and elevate your brand's online presence with our AI Chatbot Services today.",
      },
    ],
  },
  {
    name: "ChatGPT Integration",
    heading: "ChatGPT Integration",
    description:
      "Elevate user experiences by leveraging our ChatGPT Integration Services into your business processes. It enables you to leverage the advanced capabilities of NLP and ML to provide more intuitive and personalized interactions for your customers.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Revolutionize Business Operations",
        description:
          "Revolutionize your business operations and reach newer levels of success with our ChatGPT Integration Services.",
      },
      {
        title: "Functionality Enhancement",
        description:
          "Enhance the functionality of your existing software platforms by leveraging the power of NLP and ML.",
      },
      {
        title: "Personalized Customer Support",
        description:
          "With our ChatGPT Integration Services, you can offer personalized customer support to increase user satisfaction.",
      },
      {
        title: "Task Automation & Competitive Advantage",
        description:
          "Automate repetitive tasks with ChatGPT Integration and thrive in a highly competitive business landscape.",
      },
    ],
  },
  {
    name: "Machine & Deep Learning",
    heading: "Machine & Deep Learning",
    description:
      "Machine Learning (ML) has transformed numerous industries, with the ML market forecasted to soar to $204.30 billion by 2024. Leveraging our proficiency in AI development solutions, we harness the power of machine and deep learning to create innovative systems.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Client-Centric Approach",
        description:
          "Our seasoned ML engineers collaborate closely with clients to understand their challenges, goals, and requirements.",
      },
      {
        title: "Adaptive Systems Development",
        description:
          "We develop systems that not only solve today's challenges but also adapt and evolve to meet the evolving needs of our clients.",
      },
      {
        title: "Machine Learning Development Excellence",
        description:
          "We leverage advanced algorithms and techniques to build robust models that drive actionable insights.",
      },
      {
        title: "Next-Gen Solutions",
        description:
          "With our expertise in Machine Learning Development Services, we develop future-proof solutions that are affordable, flexible, and scalable.",
      },
    ],
  },
  {
    name: "Computer Vision",
    heading: "Computer Vision",
    description:
      "At SynticAI, we help businesses maximize their profits by leveraging our advanced Computer Vision Services. Our Computer Vision systems identify objects and detect patterns by analyzing digital photos and videos.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "More Efficient and Accurate",
        description:
          "Our Computer Vision systems leverage advanced image processing, pattern recognition, and ML techniques to offer unparalleled accuracy.",
      },
      {
        title: "Operational Streamlining",
        description:
          "Businesses can streamline their operations significantly by implementing our Computer Vision solutions.",
      },
      {
        title: "Insight Generation",
        description:
          "Our Computer Vision systems extract meaningful information to empower businesses to gain valuable insights from visual data.",
      },
      {
        title: "More Opportunities",
        description:
          "Businesses can unlock new opportunities across various industries with our tailored Computer Vision solutions.",
      },
    ],
  },
  {
    name: "Big Data Analytics",
    heading: "Big Data Analytics",
    description:
      "Benefit your data-driven business from actionable insights and improved decision-making with our Big Data Analytics Services. Our experienced team of data specialists offers an extensive range of data analytics services crafted to drive the growth of your business.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Data Handling",
        description:
          "Our approach involves processing, storing, and analyzing massive amounts of data from diverse sources using specialized tools and techniques.",
      },
      {
        title: "Customizable Dashboards",
        description:
          "We offer customizable dashboards and reports that enable your business to visualize data that makes sense for your business objectives.",
      },
      {
        title: "Tailored Services",
        description:
          "Whether your business operates in finance or any other sector, our Big Data Analytics services can be customized to suit your unique needs.",
      },
      {
        title: "Business Advancement",
        description:
          "Our services enable your business to leverage data effectively, enabling you to make smarter decisions.",
      },
    ],
  },
  {
    name: "Predictive Modeling",
    heading: "Predictive Modeling",
    description:
      "At SynticAI, we offer innovative Predictive Modeling Services for your business. Our Predictive Modeling services help you to make better decisions, anticipate market trends, identify potential risks and opportunities, and remain agile.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Informed Decision-Making",
        description:
          "Our Predictive Modeling services enable businesses to make better decisions by leveraging data-driven insights.",
      },
      {
        title: "Risk and Opportunity Identification",
        description:
          "Businesses can identify potential opportunities and risks through our Predictive Modeling Services.",
      },
      {
        title: "Agility and Adaptability",
        description:
          "Our services equip businesses with the agility to respond to changing market conditions and optimize operations effectively.",
      },
      {
        title: "Drive Business Success",
        description:
          "Whether you are looking to improve forecasting accuracy or enhance operational efficiency, our solutions deliver tangible results and drive business success.",
      },
    ],
  },
  {
    name: "Custom Software Development",
    heading: "Custom Software Development",
    description:
      "With over 10 years of experience, SynticAI is a reliable custom software development company that transforms your unique ideas into reality. Our Custom Software Development Services will give you a competitive edge in your industry.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Client-Oriented Approach",
        description:
          "Our software developers prioritize client satisfaction and deliver solutions that meet your business objectives.",
      },
      {
        title: "Agile Practices",
        description:
          "We utilize agile practices and leverage modern technologies to drive efficiency and innovation in our development processes.",
      },
      {
        title: "Transparent Partnership",
        description:
          "We prioritize transparency and trust in our partnerships. Our services guarantee open communication, clear project milestones, and regular updates.",
      },
      {
        title: "Innovative Development",
        description:
          "We take pride in delivering innovative solutions that drive measurable results and push the boundaries of what's possible.",
      },
    ],
  },
  {
    name: "Digital Marketing",
    heading: "Digital Marketing",
    description:
      "Ignite your brand's digital potential with our comprehensive Digital Marketing Services. We specialize in data-driven strategies and creative campaigns that enhance your online presence.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Data-Driven Strategies",
        description:
          "Our expertise lies in creating impactful marketing initiatives that resonate with your target audience and drive results.",
      },
      {
        title: "Tailored Services",
        description:
          "We understand that every business has its own objectives and challenges. That's why we customize our services to align with your specific goals.",
      },
      {
        title: "Advocacy for Digitalization",
        description:
          "We firmly advocate for digitalization as the essential path forward for any business aiming to excel in today's competitive landscape. Our commitment to this belief is evident in our dedication to digital marketing services.",
      },
    ],
  },
  {
    name: "Natural Language Processing",
    heading: "Natural Language Processing",
    description:
      "From sentiment analysis to chatbot development, our expert NLP Services cover a range of applications across industries. Our expertise involves creating models for computers to understand and generate natural language.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Understand Client Requirement",
        description:
          "Our team of NLP experts works closely with you to understand your specific needs and develop a tailored solution for your business.",
      },
      {
        title: "Commitment to Technological Innovation",
        description:
          "Our highly skilled professionals stay updated on the latest NLP tech to provide cutting-edge solutions and give our clients an innovation edge.",
      },
      {
        title: "Demonstrated Expertise in NLP",
        description:
          "Our track record of success and expertise in NLP serves as a testament to our commitment to excellence.",
      },
      {
        title: "Accelerating Business Growth",
        description:
          "Our ultimate goal is to accelerate our clients' growth with the transformative capabilities of natural language processing.",
      },
    ],
  },
  {
    name: "DevOps",
    heading: "DevOps",
    description:
      "Experience the transformative power of our DevOps Services, where seamless integration, automation, and AI-powered optimization converge to redefine your software development landscape.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "AI-Powered Optimization",
        description:
          "We infuse AI-powered optimization into every aspect of your software's lifecycle.",
      },
      {
        title: "CI/CD and Containerization Integration",
        description:
          "Our approach incorporates CI/CD practices to enable rapid responses to changes and containerization to maintain consistent performance across different environments.",
      },
      {
        title: "Drive Peak Efficiency",
        description:
          "Businesses can optimize IT operations and drive peak efficiency with our AI-powered optimization techniques.",
      },
      {
        title: "Accelerate Software Delivery",
        description:
          "Businesses can reduce software delivery time-to-market by streamlining development processes and automating deployment tasks.",
      },
    ],
  },
  {
    name: "UI/UX",
    heading: "UI/UX",
    description:
      "The importance of a first impression cannot be overstated. Whether it's your website or mobile app, the initial interaction with users sets the tone for their entire experience. Building a strong digital presence is imperative in today's competitive landscape.",
    benefitsTitle: "Business Benefits of Choosing Us",
    benefits: [
      {
        title: "Better User Engagement",
        description:
          "Our UI/UX Design Services focus on intuitive designs and seamless user experiences to boost user engagement.",
      },
      {
        title: "UI/UX Expertise",
        description:
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
      },
      {
        title: "Fusion of Creativity and Functionality",
        description:
          "We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
      },
      {
        title: "Stunning Interfaces",
        description:
          "For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    ],
  },
];
