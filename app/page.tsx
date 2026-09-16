import Image from "next/image";
import { asset } from "@/asset";
import WorkCard from "@/components/WorkCard";
import SocialIcon from "@/components/SocialIcon";
import FirstView from "@/components/FirstView";
import FloatingIcon from "@/components/FloatingIcon";
import ScrollToTop from "@/components/ScrollToTop";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* =====================
        ファーストビュー
      ===================== */}
      <section
        className="relative min-h-[90vh] px-8 py-16 overflow-hidden
      flex items-center justify-center
      bg-cover bg-center
      "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url(${asset(
            "/bg-grid.png"
          )})`,
        }}
      >
        {/* 背景テキスト（PC） */}
        <p
          aria-hidden
          className="
            pointer-events-none select-none
            absolute z-0
            hidden min-[800px]:block
            left-[-22px] top-[-24px]
            whitespace-nowrap leading-none font-bold
            font-[family-name:var(--font-line-seed-jp)]
            text-[16.5vw] text-[#c1ff1e]
          "
        >
          UI Designer
        </p>

        {/* 背景テキスト（SP） */}
        <div
          aria-hidden
          className="
            pointer-events-none select-none
            absolute z-0 inset-y-0 top-0 left-0
            min-[800px]:hidden
            w-[16vh]
            flex items-center justify-center
          "
        >
          <p className="rotate-90 whitespace-nowrap leading-none font-bold font-[family-name:var(--font-line-seed-jp)] text-[16vh] text-[#c1ff1e] mt-16 -ml-10">
            UI Designer
          </p>
        </div>

        {/* MVアイコン（PC） */}
        <FloatingIcon
          icon="/icons/icon-globe.svg"
          size={72}
          rotate={-30}
          className="left-[5%] top-[10%] z-[5] min-[800px]:top-[70%]"
          animationDelay="0s"
        />
        <FloatingIcon
          icon="/icons/icon-music.svg"
          size={72}
          rotate={11}
          className="left-[40%] top-[5%] z-[5] min-[800px]:left-[10%] min-[800px]:top-[53%]"
          animationDelay="0.4s"
        />
        <FloatingIcon
          icon="/icons/icon-heart.svg"
          size={80}
          rotate={19}
          className="right-[5%] top-[90%] z-[5] min-[800px]:top-[66%]"
          animationDelay="0.8s"
        />
        <FloatingIcon
          icon="/icons/icon-controller.svg"
          size={76}
          rotate={-26}
          className="z-[5] right-[8%] top-[15%] min-[800px]:right-[5%] min-[800px]:top-[38%]"
          animationDelay="1.2s"
        />
        <FloatingIcon
          icon="/icons/icon-gem.svg"
          size={64}
          rotate={-17}
          className="z-[5] left-[25%] top-[86%]"
          animationDelay="1.6s"
        />

        <FirstView />
      </section>

      {/* =====================
        自己紹介セクション
      ===================== */}
      <section className="px-8 py-16 bg-zinc-200">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-12 justify-center md:flex-nowrap">
            <Image
              src={asset("/profile.png")}
              alt="プロフィール画像"
              width={200}
              height={200}
              className="border-2 border-zinc-800 shadow-[8px_8px_0_#c8ff00]"
            />

            <div className="flex flex-wrap justify-center md:flex-col md:justify-start">
              <h2 className="text-3xl font-semibold">竹内</h2>

              <p className="mt-6 text-zinc-800 font-bold leading-relaxed">
                UIデザインなどを中心にWEBやアプリの開発をやってます。
                このページはNext.jsを使用して作成しました。
              </p>

              <ul className="mt-6 flex gap-6">
                {/* <SocialIcon
                  href="https://www.figma.com/proto/zxn8RGtFT49gWPFkknQLON/takeyo-projects?t=W5TYvNpKErSba2Qr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
                  image="/Figma.svg"
                  alt="Figma"
                /> */}
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
          </div>
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
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            <WorkCard
              title="hololive 新配信アプリ"
              image="/works/08-01.png"
              href="/works/project08"
            />

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
