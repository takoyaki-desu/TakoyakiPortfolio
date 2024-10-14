import Link from 'next/link';
// タイトルにはGloria Hallelujah を使う
export default function Header() {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/" className="text-2xl font-logo">
        takoyaki-logo
        </Link>
        <Link href="/" className="ml-4 text-xl font-logo text-right">
        light-logo
        {/* アイコンはSVG を使う,animation */}
        </Link>
      </h1>
    </header>
  );
};

