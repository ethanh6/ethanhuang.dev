type ContentType = 'Post' | 'Project';

type ContentMetadataType = {
  title: string;
  description: string;
  date: string;
  slug: string;
  type: ContentType;
  imgSrc?: string;
  imgAlt?: string;
  tags?: string;
};

type ParsedContentType = {
  metadata: ContentMetadataType;
  content: string;
};

type Nullable<T> = T | null;
