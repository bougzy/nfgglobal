import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl",
        hover &&
          "hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
