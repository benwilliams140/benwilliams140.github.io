import clsx from 'clsx';
import { useCallback, useState, type FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [contactDisabled, setContactDisabled] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleContactSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setContactDisabled(true);
      emailjs.sendForm(
        'service_co847ib',
        'template_z3jdb5f',
        event.currentTarget,
        '_bVVL_GPj21d0P7BO',
      );
    },
    [],
  );

  return (
    <div
      className={clsx(
        'page',
        'flex flex-col',
        'px-10',
        'justify-center align-middle',
      )}
    >
      <div className={clsx('h-72', 'pb-10', 'flex flex-col')}>
        <span className={clsx('text-secondary text-12')}>
          Send me a message
        </span>
        <form
          className={clsx('flex flex-col', 'pl-5', 'flex-grow')}
          onSubmit={handleContactSubmit}
          ref={formRef}
        >
          <span>
            Feel free to get in touch, say hello, or discuss possible project
            collaborations.
          </span>
          <label>
            Name: <input type="text" name="from_name" />
          </label>
          <label>
            E-Mail: <input type="email" name="from_email" />
          </label>
          <label>
            Subject: <input type="text" name="subject" />
          </label>
          <label className={clsx('flex flex-col flex-grow')}>
            Message:{' '}
            <textarea
              className={clsx('resize-none', 'flex-grow')}
              name="message"
            />
          </label>
          <button formAction="submit" disabled={contactDisabled}>
            Send Message
          </button>
        </form>
      </div>
      <div className={clsx('flex flex-col')}>
        <span className={clsx('text-secondary text-12')}>
          Find me on social media
        </span>
        <div className={clsx('pl-5')}>
          <a
            href="https://www.linkedin.com/in/ben-williams-707b93174/"
            target="_blank"
          >
            <img
              src="./src/assets/linkedin.svg"
              className={clsx('w-24 h-24')}
            />
          </a>
          <a href="https://github.com/benwilliams140" target="_blank">
            <img src="./src/assets/github.svg" className={clsx('w-24 h-24')} />
          </a>
        </div>
      </div>
    </div>
  );
}
