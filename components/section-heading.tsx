type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase text-terracotta">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-bold leading-tight text-espresso md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 text-lg leading-8 text-espresso/70">{body}</p> : null}
    </div>
  );
}
