import { StaticImageData } from 'next/image';

import CryptoArbImg from '../../public/images/projects/CryptoArbImage.png';

export type ProjectType = {
  title: string;
  description: string;
  links: {
    post: string;
    github: string;
    site: string;
  };
  image: {
    src: string | StaticImageData;
    alt: string;
    placeholder: 'blur' | 'empty';
  };
};

export const ProjectData: Array<ProjectType> = [
  {
    title: 'CryptoArb',
    description:
      'A crypto trading system that executes arbitrage strategies across multiple exchanges.',
    links: {
      post: '/posts/cryptoarb',
      github: 'https://github.com/ethanh6/CryptoArb',
      site: 'https://github.com/ethanh6/CryptoArb',
    },
    image: {
      src: CryptoArbImg,
      alt: 'crypto image',
      placeholder: 'blur',
    },
  },
];
