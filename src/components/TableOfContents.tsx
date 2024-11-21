import { NAVIGATION_ITEMS } from "@/app/page";

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

export default TableOfContents;
