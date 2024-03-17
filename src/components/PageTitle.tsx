type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="md:leading-14 font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl">
      {children}
    </h1>
  );
}
