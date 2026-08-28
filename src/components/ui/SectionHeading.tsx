import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div
      className={`max-w-3xl ${alignment} ${className}`.trim()}
    >
      {kicker && (
        <span
          className="
            inline-block
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#a85c25]
          "
        >
          {kicker}
        </span>
      )}

      <h2
        className="
          mt-3
          text-3xl
          font-bold
          leading-tight
          tracking-[-0.03em]
          text-[#3d1f14]
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-[#766960]
            sm:text-lg
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}