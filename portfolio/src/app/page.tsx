import Link from "next/link"
export default function Home() {
  return (
<>
  {/*svg*/}
<div className="About">
<h1 className="text-xl underline decoration-solid decoration-4" >About Me</h1>
<span>Takoyaki.</span>
{/* 何回も書き直すアニメーションをつける (Framer-motion)*/}
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
<Link href="/">もっと知りたい / Explore further</Link>
</div>
<div>
<h1 className="text-xl">Works</h1>
<Link href="/">もっと見たい / See more</Link>
</div>
<div>
<h1 className="text-xl">contact</h1>
{/* フォームを追加する*/}
</div>
    </>
  );
}
