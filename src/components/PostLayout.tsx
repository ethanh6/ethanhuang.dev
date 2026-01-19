import CustomLink from '@/components/CustomLink';
import PageTitle from '@/components/PageTitle';
import formatDate from '@/lib/formatDate';
import { CustomMDX } from '@/components/CustomMDX';

export default async function PostLayout({ children }) {
  return (
    <>
      <div className="transition-colors dark:divide-gray-700">
        <div className="prose-quoteless">
          {children}
        </div>
      </div>
    </>
  );
}
