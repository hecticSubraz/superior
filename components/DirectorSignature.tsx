import { cn } from "@/lib/utils";

interface DirectorSignatureProps {
  name: string;
  className?: string;
}

export default function DirectorSignature({ name, className }: DirectorSignatureProps) {
  return (
    <div
      className={cn("select-none", className)}
      aria-label={`Signature of ${name}`}
    >
      <p
        className={cn(
          "font-signature w-fit -rotate-1 transform",
          "text-[2rem] leading-none sm:text-[2.35rem] lg:text-[2.75rem]",
          "tracking-[0.02em] text-white/95",
          "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]",
          "antialiased"
        )}
        style={{
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {name}
      </p>
      <div
        className="mt-3 h-px w-28 bg-gradient-to-r from-accent/40 via-gold/30 to-transparent sm:w-36"
        aria-hidden="true"
      />
    </div>
  );
}
