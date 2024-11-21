import { forwardRef } from "react";
import ScrollButton from "./ScrollButton";

// Type definitions
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLElement>;
  bgColor?: "gray" | "white";
  targetId?: string;
  message?: boolean;
};

// Reusable section component
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { children, className = "", id, bgColor = "white", targetId, message },
    ref
  ) => (
    <section
      ref={ref}
      id={id}
      className={`min-h-[100dvh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative isolate ${className} ${
        bgColor === "gray" ? "bg-gray-50" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-8">{children}</div>
      {targetId && (
        <ScrollButton
          targetId={targetId}
          ariaLabel="Scroll to next section"
          message={message}
        />
      )}
    </section>
  )
);
Section.displayName = "Section";

export default Section;
