import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'virtual:uno.css';

import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> extends AttributifyAttributes {
    position?: boolean | string;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
