type ProjectType = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  date: string;
  slug: string;
};

type ContentData = {
  content: string;
  data: ProjectType | PostType;
};

type ContentType = 'post' | 'project';

type PostType = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
};
