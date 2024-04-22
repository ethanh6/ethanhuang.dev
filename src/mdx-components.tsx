import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { CustomMdxComponent } from '@/components/CustomMDX';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...CustomMdxComponent,
    ...components,
  };
}
