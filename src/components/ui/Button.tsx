import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: "arrow" | "whatsapp" | "none";
  external?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#a85c25] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#6f341f] hover:shadow-md focus:ring-[#a85c25]",

  secondary:
    "bg-[#6f341f] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#4f2417] hover:shadow-md focus:ring-[#6f341f]",

  whatsapp:
    "bg-[#287a45] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#1f6438] hover:shadow-md focus:ring-[#287a45]",

  outline:
    "border border-[#d8c6b4] bg-white text-[#6f341f] hover:-translate-y-0.5 hover:bg-[#fffaf2] hover:border-[#a85c25] focus:ring-[#a85c25]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon = "arrow",
  external = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const Icon =
    icon === "whatsapp"
      ? MessageCircle
      : icon === "arrow"
        ? ArrowRight
        : null;

  const content = (
    <>
      <span>{children}</span>

      {Icon && (
        <Icon
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  /* =========================================
     LINK BUTTON
     ========================================= */

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${classes}`}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={`group ${classes}`}
      >
        {content}
      </Link>
    );
  }

  /* =========================================
     NORMAL BUTTON
     ========================================= */

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${classes}`}
    >
      {content}
    </button>
  );
}