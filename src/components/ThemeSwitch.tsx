'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  const showDark = mounted && isDark;

  return (
    <Button
      aria-label="Toggle Dark Mode"
      type="button"
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-md border border-input bg-background p-2 transition-colors hover:text-gray-900 dark:hover:text-gray-200"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {showDark ? (
        <div className="transition-opacity duration-300 opacity-100">
          <Moon className="h-5 w-5" />
        </div>
      ) : (
        <div className="transition-opacity duration-300 opacity-100">
          <Sun className="h-5 w-5" />
        </div>
      )}
    </Button>
  );
}
