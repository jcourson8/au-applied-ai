"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ContactCard from "@/components/ContactCard";
import Section from "@/components/Section";
import TableOfContents from "@/components/TableOfContents";

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <TableOfContents activeSection={activeSection} />

      {/* Hero Section */}
      <Section id="hero" ref={heroSection.ref} targetId="vision" message={true}>
        <div className="flex flex-col items-center">
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
      </Section>

      {/* Vision Section */}
      <Section id="vision" ref={visionSection.ref} bgColor="gray" targetId="impact">
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
      </Section>

      {/* Dual Impact Pipeline Section */}
      <Section id="impact" ref={impactSection.ref} targetId="approach">
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
              <span className="text-orange-600">hands-on experience</span> with
              real-world AI applications, bridging the gap between academic
              knowledge and industry demands.
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
                strengthen Auburn&apos;s research impact through better
                technical execution.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* Learning Approach Section */}
      <Section
        id="approach"
        ref={approachSection.ref}
        bgColor="gray"
        targetId="experience"
      >
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
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        ref={experienceSection.ref}
        bgColor="gray"
        targetId="role"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 tracking-tight">
            About Me
          </h2>

          <div className="text-left space-y-8">
            <div className="space-y-4 text-sm md:text-lg">
              <p className="text-gray-600 leading-relaxed">
                As a software engineer at Auburn&apos;s Military REACH Program,
                I&apos;ve led the modernization of{" "}
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
                I specialize in building practical AI solutions that combine
                modern web development with AI capabilities. My work includes
                developing{" "}
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
                Through Practical AI@AU, I would like to help students develop
                the same real-world implementation skills that bridge the gap
                between AI concepts and working solutions.
              </p>
            </div>

            {/* Desktop-only card */}
            <div className="hidden sm:block max-w-xl mx-auto">
              <ContactCard />
            </div>
          </div>
        </div>
      </Section>

      {/* Role Section */}
      <Section id="role" ref={roleSection.ref}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
          Proposed Role
        </h2>

        <div className="space-y-8">
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
            As an Practical AI Implementation Specialist, I would help students bridge the
            gap between AI theory and practical implementation through hands-on
            mentorship and project development.
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
      </Section>

      {/* Mobile-only floating card */}
      <div
        ref={cardRef}
        className={`
          block sm:hidden
          fixed right-0 top-1/2 -translate-y-1/2
          w-[90vw] max-w-[400px]
          z-40
          ${isCardVisible ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out
        `}
      >
        <ContactCard className="p-8" />
      </div>

      {/* Mobile Tab Button */}
      {(activeSection === "experience" || activeSection === "role") &&
        !isCardVisible && (
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
              <span className="text-sm font-medium">Tap to see my card</span>
            </span>
          </button>
        )}
    </div>
  );
}
