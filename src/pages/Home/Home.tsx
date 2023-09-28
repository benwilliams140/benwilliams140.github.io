import clsx from 'clsx';
import { DownOutlined } from '@ant-design/icons';
import { useScrollablePanelContext } from '../../components/ScrollablePanel/ScrollablePanel.context';

export default function Home() {
  const { scrollToNextItem } = useScrollablePanelContext();

  return (
    <div className={clsx('page')}>
      <div
        className={clsx(
          'border-border border-solid border-8px lg:border-rd-r-full max-lg:border-r-none border-l-none box-border',
          'text-secondary font-extrabold tracking-wide',
          'bg-primary',
          'w-full lg:w-90%',
          'absolute top-72',
          'animate-fade-in-left animate-duration-650',
          'text-10 xs:text-12 sm:text-16 md:text-20 lg:text-24 xl:text-28 2xl:text-32',
          'text-center xs:text-start',
        )}
      >
        Benjamin Williams
        <div
          className={clsx(
            'text-5 sm:text-6 md:text-7 xl:text-8 font-bold tracking-normal',
            'relative xs:left-28 sm:left-40 md:left-48 lg:left-60 xl:left-75 bottom-1/2 xs:bottom-1 md:bottom-3',
            'text-center xs:text-start',
          )}
        >
          Frontend developer, UI enthusiast.
        </div>
      </div>
      <div
        className={clsx(
          'absolute bottom-4 w-full',
          'flex flex-col flex-items-center',
          'animate-fade-in-up animate-delay-500 animate-backwards',
        )}
      >
        <div className={clsx('text-secondary text-5 md:text-7')}>
          Welcome to my personal sandbox.
        </div>
        <DownOutlined
          className={clsx(
            'color-secondary',
            'animate-bounce',
            'pt-4',
            'outline-none',
          )}
          onClick={() => scrollToNextItem(0)}
        />
      </div>
    </div>
  );
}
