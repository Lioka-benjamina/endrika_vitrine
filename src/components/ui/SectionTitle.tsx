type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-endrika-red">
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-endrika-dark"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-white/70" : "text-endrika-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}