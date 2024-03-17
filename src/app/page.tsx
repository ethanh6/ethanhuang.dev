import Image from 'next/image';
import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';
import Content from '@/components/Content';

export default function Home() {
  return (
    <LayoutPerPage>
      <Content title={''}>
        <div className="grid grid-cols-2">
          <div className="prose dark:prose-dark md:prose-lg col-span-1 my-12 py-24 transition-colors">
            <h1 className="text-left">I build software.</h1>
          </div>
          <div className="grid grid-rows-3 justify-end">
            <div className="row-start-2 justify-self-end">
              <Image src={Me} height={168} width={140} alt="me" />
            </div>
            <div className="prose dark:prose-dark md:prose-lg row-start-3 my-9 space-y-2 transition-colors md:space-y-4">
              <p className="text-right"> I'm a software engineer. </p>
              <p className="text-right">
                {' '}
                I have experience with Python, C++ and Typescript.{' '}
              </p>
            </div>
          </div>
        </div>
      </Content>
    </LayoutPerPage>
  );
}
