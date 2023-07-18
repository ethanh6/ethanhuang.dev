import React from 'react';

type ContentProps = {
  children?: React.ReactNode;
  title?: string;
};

const Content: React.FC<ContentProps> = ({
  title = 'Ethan Huang',
  children,
}) => {
  return (
    <div className="grid grid-cols-6 pt-3">
      <div className="col-span-4 col-start-2">{children}</div>
    </div>
  );
};

export default Content;
