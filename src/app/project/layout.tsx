import LayoutPerPage from '@/components/LayoutPerPage';
import Content from '@/components/Content';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutPerPage>
      <div className="prose prose-quoteless prose-neutral dark:prose-invert transition-colors dark:divide-gray-700">
        {children}
      </div>
    </LayoutPerPage>
  );
}
