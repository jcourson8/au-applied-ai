"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ScrollButton from "@/components/ScrollButton";

// Update navigation items to include new role section
const NAVIGATION_ITEMS = [
  { id: "hero", label: "Intro" },
  { id: "vision", label: "Vision" },
  { id: "impact", label: "Impact" },
  { id: "approach", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "role", label: "Role" },
];

// Add TableOfContents component
const TableOfContents = ({ activeSection }: { activeSection: string }) => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="max-w-[105rem] h-full mx-auto relative">
        <nav className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 space-y-1.5 lg:space-y-3 lg:max-w-[200px] pointer-events-auto">
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-xs px-1 py-2 md:text-sm md:px-1.5 md:py-3 lg:px-3 lg:py-1.5 tracking-wide transition-colors duration-200 rounded-md
                ${
                  activeSection === id
                    ? "text-orange-600 bg-orange-50 font-medium"
                    : "text-gray-500 bg-inherit hover:text-gray-900"
                }
                writing-mode-vertical-rl text-orientation-mixed rotate-180
                lg:writing-mode-horizontal lg:rotate-0 lg:text-left`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Type definitions
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLElement>;
};

// Reusable section component
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className = "", id }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative isolate ${className}`}
    >
      {children}
    </section>
  )
);
Section.displayName = "Section";

// Main page component
export default function ProposalPage() {
  const [activeSection, setActiveSection] = React.useState("hero");

  // Create individual hooks for each section
  const heroSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("hero");
    },
  });

  const visionSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("vision");
    },
  });

  const approachSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("approach");
    },
  });

  const roleSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("role");
    },
  });

  const impactSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("impact");
    },
  });

  const experienceSection = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setActiveSection("experience");
    },
  });

  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsCardVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <TableOfContents activeSection={activeSection} />

      {/* Hero Section */}
      <Section id="hero" ref={heroSection.ref} className="relative">
        <div className="max-w-4xl mx-auto px-8 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight font-sans">
            Practical AI
            <span className="text-3xl sm:text-4xl lg:text-5xl relative top-[-0.1em]">
              @
            </span>
            AU
          </h1>
          <div className="space-y-4 mb-12">
            <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Through the AI@AU Initiative and the MS in Artificial Intelligence
              Engineering program, Auburn University has established itself as a
              leader in AI education.
            </p>
            <p className="text-md sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              While students master advanced AI concepts, a dedicated{" "}
              <span className="text-orange-600">applied practice</span> will
              empower them to turn this knowledge into{" "}
              <span className="text-orange-600">practical solutions</span> and{" "}
              <span className="text-orange-600">career-ready skills</span>.
            </p>
          </div>
        </div>
        <ScrollButton
            targetId="vision"
            ariaLabel="Scroll to next section"
            message={true}
          />
      </Section>

      {/* Vision Section */}
      <Section
        id="vision"
        ref={visionSection.ref}
        className="bg-gray-50 relative"
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
            Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">
                Current Landscape
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Auburn University&apos;s AI@AU Initiative and MS in Artificial
                Intelligence Engineering program have established a strong
                foundation. Now, we have the opportunity to complement this
                foundation with hands-on implementation experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">
                Practical Impact
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Practical AI@AU will create a space where students gain the
                development skills essential for real-world success. Through
                hands-on projects and mentoring, students will develop practical
                abilities that complement their classroom knowledge and prepare
                them for industry challenges.
              </p>
            </div>
          </div>
        </div>
        <ScrollButton targetId="impact" ariaLabel="Scroll to next section" />
      </Section>

      {/* Dual Impact Pipeline Section */}
      <Section id="impact" ref={impactSection.ref} className="relative">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
            Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">
                Industry Preparation
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Students will build portfolio-ready projects and gain{" "}
                <span className="text-orange-600">hands-on experience</span>{" "}
                with real-world AI applications, bridging the gap between
                academic knowledge and industry demands.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight">
                Research Development
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Research-focused students will develop practical implementation
                skills to accelerate prototyping and{" "}
                <span className="text-orange-600">
                  strengthen Auburn&apos;s research impact through better technical
                  execution.
                </span>
              </p>
            </div>
          </div>
        </div>
        <ScrollButton targetId="approach" ariaLabel="Scroll to next section" />
      </Section>

      {/* Learning Approach Section */}
      <Section
        id="approach"
        ref={approachSection.ref}
        className="relative bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 tracking-tight">
            Approach
          </h2>

          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight text-gray-900">
                Hands-on Project Experience
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Build real AI applications from scratch - chatbots, computer
                vision apps, and more.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight text-gray-900">
                Interactive Learning
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Weekly sessions and one-on-one project mentorship.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-2xl font-semibold tracking-tight text-gray-900">
                Develop Practical Skills
              </h3>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Master essential tools and techniques - from API integration to
                deployment.
              </p>
            </div>
          </div>
        </div>
        <ScrollButton
          targetId="experience"
          ariaLabel="Scroll to next section"
        />
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        ref={experienceSection.ref}
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 tracking-tight pt-10">
            About Me
          </h2>

          <div className="text-left space-y-8">
            <div className="space-y-4 text-sm md:text-lg">
              <p className="text-gray-600 leading-relaxed">
                As a software engineer at Auburn&apos;s Military REACH Program, I&apos;ve led the modernization of{" "}
                <a
                  href="https://militaryreach.auburn.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors underline"
                >
                  production web applications
                </a>{" "}
                that efficiently process thousands of research documents.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I specialize in building practical AI solutions that combine modern web development with AI capabilities. My work includes developing{" "}
                <a
                  href="https://www.linkedin.com/posts/james-courson-447960161_artificialintelligence-largelanguagemodels-activity-7209236169648209921-JLDl?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors underline"
                >
                  retrieval-augmented generation systems
                </a>
                ,{" "}
                <a
                  href="https://james-courson.vercel.app/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors underline"
                >
                  custom chatbots
                </a>
                , and{" "}
                <a
                  href="https://github.com/jcourson8/code-select"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors underline"
                >
                  interactive tools
                </a>{" "}
                that streamline interactions with LLM.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Through Practical AI@AU, I would like to help students develop the same real-world implementation skills that bridge the gap between AI concepts and working solutions.
              </p>
            </div>

            {/* Desktop-only card */}
            <div className="hidden sm:block max-w-xl mx-auto">
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Image Container */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src="/james.jpeg"
                        alt="James Courson"
                        className="w-full h-full object-cover filter saturate-[0.95] hover:saturate-100 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">
                      James Courson
                    </h3>
                    
                    <div className="space-y-1.5 mb-6 text-base text-gray-500 font-light">
                      <p>Software Engineer</p>
                      <p>Military REACH @ Auburn</p>
                      <p>MS, Cybersecurity Engineering</p>
                      <p>jbc0071@auburn.edu</p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-center md:justify-start gap-6">
                      <a
                        href="https://james-courson.vercel.app/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center"
                      >
                        <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-200">
                          Resume
                        </span>
                        <svg 
                          className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/james-courson-447960161/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center"
                      >
                        <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-200">
                          LinkedIn
                        </span>
                        <svg 
                          className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollButton targetId="role" ariaLabel="Scroll to next section" />
      </Section>

      {/* Role Section */}
      <Section
        id="role"
        ref={roleSection.ref}
        className="relative"
      >
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
            Proposed Role
          </h2>
          
          <div className="space-y-8">
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              As an AI Implementation Specialist, I would help students bridge the gap between AI theory and practical implementation through hands-on mentorship and project development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                  Technical Mentorship
                </h3>
                <ul className="text-sm space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Guide real AI application development
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Provide hands-on development assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Support implementation challenges
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                  Project Development
                </h3>
                <ul className="text-sm  space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Create project templates and starter kits
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Develop hands-on training materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Host weekly implementation workshops
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Lead one-on-one project guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mobile-only floating card */}
      <div 
        ref={cardRef}
        className={`
          block sm:hidden
          bg-white rounded-3xl shadow-lg p-8
          fixed right-0 top-1/2 -translate-y-1/2
          w-[90vw] max-w-[400px]
          z-40
          ${isCardVisible ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out
        `}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Image Container */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
              <img 
                src="/james.jpeg"
                alt="James Courson"
                className="w-full h-full object-cover filter saturate-[0.95] hover:saturate-100 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="text-center">
            <h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">
              James Courson
            </h3>
            
            <div className="space-y-1.5 mb-6 text-base text-gray-500 font-light">
              <p>Software Engineer</p>
              <p>Military REACH @ Auburn</p>
              <p>MS, Cybersecurity Engineering</p>
              <p>jbc0071@auburn.edu</p>
            </div>

            {/* Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://james-courson.vercel.app/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center"
              >
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-200">
                  Resume
                </span>
                <svg 
                  className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/james-courson-447960161/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center"
              >
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-200">
                  LinkedIn
                </span>
                <svg 
                  className="w-4 h-4 ml-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Button */}
      {(activeSection === 'experience' || activeSection === 'role') && !isCardVisible && (
        <button 
          onClick={() => setIsCardVisible(true)}
          className={`
            block sm:hidden
            fixed right-0 top-1/2 -translate-y-1/2 
            bg-orange-600 text-white px-2 pr-7 py-8 
            rounded-l-lg shadow-lg
            hover:bg-orange-700 transition-all duration-300
            animate-subtle-pulse
            z-50 transform-gpu
          `}
        >
          <span className="writing-mode-vertical-rl rotate-180 flex items-center gap-2">
            <span className="text-sm font-medium">
              Tap to see my card
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
