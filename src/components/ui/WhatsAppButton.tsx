import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl } from "@/components/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function WhatsAppButton({
  message = "Hello Maa Vindhyavasini, I want to know more about your Gud Ki Chai products.",
  label = "WhatsApp Enquiry",
  className = "",
  size = "md",
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-3.5 text-base",
  };

  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#a85c25]
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#6f341f]
        hover:-translate-y-0.5
        hover:shadow-md
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <MessageCircle size={size === "sm" ? 15 : 17} />

      <span>{label}</span>
    </a>
  );
}