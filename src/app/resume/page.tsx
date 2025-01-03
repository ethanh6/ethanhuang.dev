import type { NextPage, Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';
import { siteConfigs } from '@/configs/siteConfigs';
import CustomLink from '@/components/CustomLink';

export const metadata: Metadata = {
  title: 'About',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
      <div className="flex items-center justify-end text-right text-gray-700 dark:text-gray-300">
        <a
          href="/files/Resume-Ethan-Huang.pdf"
          download="EthanHuangResume.pdf"
          className="cursor-pointer rounded-lg border-2 border-gray-700 px-4 py-2 font-semibold text-gray-700 transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-gray-300"
        >
          Download Resume
        </a>
      </div>

      <div className="itmes-center flex justify-center text-center">
        <p className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          Ethan Huang
        </p>
      </div>

      <div className="my-4 grid grid-cols-4 gap-4 text-center text-gray-700 dark:text-gray-300">
        <CustomLink
          href="https://ethanhuang.dev"
          className="hidden font-semibold transition-colors hover:text-slate-400 lg:block"
        >
          ethanhuang.dev
        </CustomLink>
        <CustomLink
          href="https://github.com/ethanh6"
          className="hidden font-semibold transition-colors hover:text-slate-400 lg:block"
        >
          GitHub
        </CustomLink>
        <CustomLink
          href="https://www.linkedin.com/in/ethanhuang0606"
          className="hidden font-semibold transition-colors hover:text-slate-400 lg:block"
        >
          LinkedIn
        </CustomLink>
        <CustomLink
          href="mailto:ethanhuangjob@gmail.com"
          className="hidden font-semibold transition-colors hover:text-slate-400 lg:block"
        >
          Email
        </CustomLink>
      </div>
      <div className="">
        <p className="highlight my-4">Professional Experience</p>
      </div>
      <div className="">
        <p className="highlight my-4">Education</p>
      </div>
      <div className="">
        <p className="highlight my-4">Projects and Open Source</p>
      </div>
      <div className="">
        <p className="highlight my-4">Technical Skills</p>
      </div>
    </article>
  );
};

export default Home;
