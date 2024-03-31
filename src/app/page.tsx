import Image from 'next/image';
import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';
import Content from '@/components/Content';

export default function Home() {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
      <h4 className="mb-4 mt-8 text-2xl font-bold">Hi!</h4>
      <p className=""> I'm Ethan Huang. Welcome to my personal website.</p>
    </article>
  );
}
