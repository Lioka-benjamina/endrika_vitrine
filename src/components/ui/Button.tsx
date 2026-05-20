type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-endrika-red focus:ring-offset-2";

  const variants = {
    primary:
      "bg-endrika-red text-white hover:bg-endrika-dark",
    secondary:
      "border border-endrika-gray bg-white text-endrika-dark hover:border-endrika-red hover:text-endrika-red",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}