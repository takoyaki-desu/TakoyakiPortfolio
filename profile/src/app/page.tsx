import Link from "next/link"
export default function Home() {
  return (
<>
<span>Takoyaki.</span>
{/* 何回も書き直すアニメーションをつける (Framer-motion)*/}
<div className="About">
<h1>about</h1>
<span>Takoyaki</span>
<span>WebDeveloper / InfrastructureEngineer</span><br />
<span>外はカリッと、中はトロッと。そんなたこ焼きのようにバランスの取れた開発者を目指しています。</span><br />
<Link href="https://github.com/takoyaki-neonz-net">
  Github
  {/* アイコンはSVG を使う */}
</Link> 
<Link href="https://x.com/takoyaki_neonz">
  X
  {/* アイコンはSVG を使う */}
</Link>
</div>
<Link href="/">もっと知りたい / Explore further</Link>
<h1>Works</h1>
<Link href="/">もっと見たい / See more</Link>
<h1>contact</h1>
{/* フォームを追加する*/}
    </>
  );
}
