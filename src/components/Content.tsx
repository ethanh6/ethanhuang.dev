import React from 'react';

type ContentProps = {
  children: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }: ContentProps) => {
  return (
    // <div className="flex w-full justify-center w-4/6">
    <>{children}</>
    // </div>
  );
};

export default Content;
