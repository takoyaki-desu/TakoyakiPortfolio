import Link from 'next/link';
// タイトルにはGloria Hallelujah を使う
export default function Header() {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/" className="text-2xl font-logo">
          iam
        </Link>
      </h1>
    </header>
  );
};

