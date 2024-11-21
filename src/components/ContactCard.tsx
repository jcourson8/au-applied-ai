export default function ContactCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-3xl shadow-lg p-8 md:p-12 ${className}`}>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
