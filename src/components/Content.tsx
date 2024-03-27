import React from 'react';

type ContentProps = {
  title: string;
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ title, children }: ContentProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-4/6">
        {title && (
          <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
            <h2 className="text-right">{title}</h2>
          </article>
        )}
        {children}
      </div>
    </div>
  );
};

export default Content;
