import LayoutPerPage from '@/components/LayoutPerPage';
import Content from '@/components/Content';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-quoteless prose-neutral dark:prose-invert dark:divide-gray-700">
      {children}
    </div>
  );
}
