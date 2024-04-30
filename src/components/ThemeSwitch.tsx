'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeSwitch() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <Button
      aria-label="Toggle Dark Mode"
      type="button"
      className="hidden h-10 w-10 p-2 transition-all md:block"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {mounted && isDark ? (
        <div
          className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        >
          <Moon />
        </div>
      ) : (
        <div
          className={`transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        >
          <Sun />
        </div>
      )}
    </Button>
  );
}
