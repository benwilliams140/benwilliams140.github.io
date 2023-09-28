import clsx from 'clsx';
import portrait from '../../assets/portrait.jpg';

export default function About() {
  return (
    <div className={clsx('page')}>
      <div className={clsx('w-100% h-100%', `flex flex-col md:flex-row`)}>
        <div
          className={clsx('w-50%', 'pt-48 pl-10', 'z-$z-index-about-content')}
        >
          <span
            className={clsx(
              'text-secondary text-extrabold tracking-wide text-28',
            )}
          >
            Hello!
          </span>
          <p className={clsx('text-secondary text-6', 'w-70%', 'pl-10')}>
            I'm Ben - a frontend developer and Carleton University Alumni. I
            recently graduated with a Bachelor's of Computer Science, with
            distinction and co-op designation, and a specialization in game and
            graphics development. I love to explore different concepts and learn
            new things, so I created this "personal sandbox" - a place where I
            can showcase my skills, experiment with new tech, and generally have
            fun developing. This will act as an ever-evolving portfolio that
            reflects my passion and curiosity for frontend development.
          </p>
        </div>
        <div className={clsx('w-50%', 'flex', 'z-$z-index-about-content')}>
          <img
            className={clsx(
              'border-rd-full border-7px border-border border-solid',
              'm-auto',
              'w-90% h-55%',
              'object-cover',
            )}
            src={portrait}
          />
        </div>
      </div>
      <div
        className={clsx(
          'absolute top-0 right-0',
          'w-60% h-100%',
          'border-rd-l-full',
          'bg-primary-50',
          'z-$z-index-about-background',
        )}
      />
    </div>
  );
}
