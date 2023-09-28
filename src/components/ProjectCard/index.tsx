import clsx from 'clsx';

type ProjectCardProps = {
  label: string;
  link: string;
  children: string;
};

export default function ProjectCard({
  label,
  link,
  children,
}: ProjectCardProps) {
  return (
    <a
      className={clsx(
        'border-border border-5px border-solid border-rd-5',
        'bg-primary',
        'decoration-none',
        'transition-transform',
        'hover:skew-x-1',
      )}
      href={link}
      target="_blank"
    >
      <div
        className={clsx(
          'text-secondary lg:text-6 2xl:text-7 font-bold',
          'tracking-wide',
          'bg-secondary-10',
          'p-2',
        )}
      >
        {label}
      </div>
      <div
        className={clsx('text-secondary text-5', 'tracking-wider', 'px-6 py-3')}
      >
        {children}
      </div>
    </a>
  );
}
