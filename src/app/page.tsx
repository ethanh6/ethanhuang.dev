import Image from 'next/image';
import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';
import Content from '@/components/Content';

export default function Home() {
  return (
    <Content>
      <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
        <h4> Hi! </h4>
        <p> I'm Ethan Huang. Welcome to my personal website.</p>
        <p> I'm a software engineer. </p>
        <p> I have experience with Python, C++ and Typescript. </p>
      </article>
    </Content>
  );
}
