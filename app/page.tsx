import Image from "next/image";
import WorkCard from "@/components/WorkCard";
import SocialIcon from "@/components/SocialIcon";
import FirstView from "@/components/FirstView";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* =====================
        ファーストビュー
      ===================== */}
      <section className="min-h-[80vh] px-8 py-16">
        <FirstView />
      </section>

      {/* =====================
        自己紹介セクション
      ===================== */}
      <section className="flex flex-wrap gap-12 justify-center md:flex-nowrap px-8 py-16 bg-zinc-200">
        <Image
          src="/profile.png"
          alt="プロフィール画像"
          width={200}
          height={200}
          className="border-2 border-zinc-800 shadow-[8px_8px_0_#60ffef]"
        />

        <div className="flex flex-wrap justify-center">
          <h2 className="text-3xl font-semibold">竹内</h2>
          <p className="mt-6 text-zinc-800 font-bold leading-relaxed">
            フロントエンド開発とUIデザインを中心に活動しています。
            このページはNext.jsを使用して作成しました。
          </p>

          <ul className="mt-6 flex gap-6">
            <SocialIcon
              href="https://github.com/username"
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
              href="https://twitter.com/takeyodesu"
              image="/Instagram.png"
              alt="Instagram"
            />
          </ul>
        </div>
      </section>

      {/* =====================
        実績リスト
      ===================== */}
      <section className="px-8 py-16" id="works">
        <h2 className="mb-12 text-3xl font-semibold ">Works</h2>

        <div className="flex flex-wrap gap-24">
          <WorkCard
            title="ホロアースクリエイターツールズ"
            image="/works/05-01.png"
            href="/works/project01"
          />
          <WorkCard
            title="ホロアースマーケットプレイスLP"
            image="/works/06-01.png"
            href="/works/project02"
          />
          <WorkCard
            title="ホロアースWEBショップ"
            image="/works/07-01.png"
            href="/works/project03"
          />
        </div>
      </section>
    </main>
  );
}
