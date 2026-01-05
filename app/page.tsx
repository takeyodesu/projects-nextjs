import Image from "next/image";
import { asset } from "@/asset";
import WorkCard from "@/components/WorkCard";
import SocialIcon from "@/components/SocialIcon";
import FirstView from "@/components/FirstView";
import ScrollToTop from "@/components/ScrollToTop";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* =====================
        ファーストビュー
      ===================== */}
      <section
        className="min-h-[90vh] px-8 py-16 
      flex items-center justify-center
      bg-cover bg-center
      "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url(${asset(
            "/bg-grid.png"
          )})`,
        }}
      >
        <FirstView />
      </section>

      {/* =====================
        自己紹介セクション
      ===================== */}
      <section className="flex flex-wrap gap-12 justify-center md:flex-nowrap px-8 py-16 bg-zinc-200">
        <Image
          src={asset("/profile.png")}
          alt="プロフィール画像"
          width={200}
          height={200}
          className="border-2 border-zinc-800 shadow-[8px_8px_0_#60ffef]"
        />

        <div className="flex flex-wrap justify-center">
          <h2 className="text-3xl font-semibold">竹内</h2>
          <p className="mt-6 text-zinc-800 font-bold leading-relaxed">
            WEBとかアプリとかつくるニート。
            UIデザインとフロントエンド開発を中心にやってます。 このページはReact
            / Next.jsを使用して作成しました。
          </p>

          <ul className="mt-6 flex gap-6">
            <SocialIcon
              href="https://github.com/takeyodesu"
              image="/Github.svg"
              alt="GitHub"
            />
            <SocialIcon
              href="https://www.figma.com/proto/zxn8RGtFT49gWPFkknQLON/takeyo-projects?t=W5TYvNpKErSba2Qr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
              image="/Figma.svg"
              alt="Figma"
            />
            <SocialIcon
              href="https://twitter.com/takeyodesu"
              image="/X.png"
              alt="X (Twitter)"
            />
            <SocialIcon
              href="https://instagram.com/takeyodesu"
              image="/Instagram.png"
              alt="Instagram"
            />
          </ul>
        </div>
      </section>

      {/* =====================
        実績リスト
      ===================== */}
      <h2 className="overflow-hidden border-y-2 border-zinc-800 py-4 bg-zinc-50 works-list">
        <Marquee className="w-full" speedPxPerSec={40}>
          <span className="mr-12 text-3xl font-semibold">WORKS</span>
          <span className="mr-12 text-3xl font-semibold">WORKS</span>
          <span className="mr-12 text-3xl font-semibold">WORKS</span>
        </Marquee>
      </h2>
      <section className="px-8 py-16">
        <div className="flex flex-wrap gap-24">
          <WorkCard
            title="ホロアースクリエイターツールズ"
            image="/works/05-01.png"
            href="/works/project05"
          />
          <WorkCard
            title="ホロアースマーケットプレイスLP"
            image="/works/06-01.png"
            href="/works/project06"
          />
          <WorkCard
            title="ホロアースWEBショップ"
            image="/works/07-01.png"
            href="/works/project07"
          />
          <WorkCard
            title="読売新聞 紙面ビューアー"
            image="/works/01-01.png"
            href="/works/project01"
          />
          <WorkCard
            title="グラフィック"
            image="/works/04-10.png"
            href="/works/project04"
          />
          <WorkCard
            title="色覚異常"
            image="/works/02-01.png"
            href="/works/project02"
          />
          <WorkCard
            title="映画ポスター"
            image="/works/03-01.png"
            href="/works/project03"
          />
        </div>
      </section>
      <div className="flex justify-center mb-12">
        <ScrollToTop />
      </div>
      <section className="bg-zinc-50 py-2">
        <p className="text-xs text-center text-zinc-500">
          © 2026 takeyodesu. All Rights Reserved.
        </p>
      </section>
    </main>
  );
}
