'use client';

import { useState } from 'react';
import clsx from 'clsx';

type Props = {
  command: string;
};

export function CopyableCommand({ command }: Props) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      aria-label="Copy to Clipboard"
      onClick={onClick}
      className={clsx(
        'rounded p-1.5 transition-colors',
        copied
          ? 'text-green-500 dark:text-green-400'
          : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {copied ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        )}
      </svg>
    </button>
  );
}
