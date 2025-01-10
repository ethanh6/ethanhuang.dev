import Link from 'next/link';
import CustomLink from '@/components/CustomLink';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center pt-10">
      <h2 className="text-center text-xl">
        Page Not Found. Go back to{' '}
        <a href="/" className="highlight-link">
          {' '}
          home page{' '}
        </a>
        ?
      </h2>
    </div>
  );
}
