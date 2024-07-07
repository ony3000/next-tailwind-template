type BoxLinkProps = {
  href: string;
  title: string;
  description: string;
};

export default function BoxLink({ href, title, description }: BoxLinkProps) {
  return (
    <a
      href={href}
      className="group space-y-2 rounded-xl border border-zinc-500/0
        bg-gray-400/0 p-4 transition-colors duration-200 dark:border-stone-300/0
        dark:bg-stone-500/0 non-touchscreen:hover:border-zinc-500/[.15]
        non-touchscreen:hover:bg-gray-400/10
        dark:non-touchscreen:hover:border-stone-300/[.15]
        dark:non-touchscreen:hover:bg-stone-500/10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="font-semibold">
        {title}{' '}
        <span
          className="inline-block transition-transform duration-200
            motion-safe:non-touchscreen:group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </h2>
      <p className="text-[14px] opacity-60">{description}</p>
    </a>
  );
}
