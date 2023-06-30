import type { ComponentProps } from 'react';

import { classNames } from '@/adaptors';

export default function Callout({ children }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames(
        `rounded-xl border border-zinc-400/30 bg-gray-100/50 px-4 py-4 dark:border-neutral-500/30
        dark:bg-neutral-900/50`,
      )}
    >
      {children}
    </div>
  );
}
