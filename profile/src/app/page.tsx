import Link from "next/link"
export default function Home() {
  return (
<>
<span>Hello</span>
<span>Im&apos;Takoyaki.</span><br />
{/* 何回も書き直すアニメーションをつける (Framer-motion)*/}
<h1>about</h1>
<span>Takoyaki</span>
<span>WebDeveloper / InfrastructureEngineer</span><br />
<span>外はカリッと、中はトロッと。そんなたこ焼きのようにバランスの取れた開発者を目指しています。</span>
<h1>Works</h1>
<h1>contact</h1>
<h1>skills</h1>
<Link href="https://github.com/takoyaki-neonz-net">
  Github
  {/* アイコンはSVG を使う */}
</Link> 
<Link href="https://x.com/takoyaki_neonz">
  X
  {/* アイコンはSVG を使う */}
</Link>
    </>
  );
}
