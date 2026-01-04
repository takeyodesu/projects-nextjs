import Image from "next/image";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage01() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">
        ホロアースクリエイターツールズ
      </h1>

      {/* メインビジュアル */}
      <Image
        src="/works/05-01.png"
        alt="ホロアースクリエイターツールズ"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />
      <div className="mb-12">
        <ExternalLinkButton
          href="https://creator.holoearth.com/creator/items/"
          label="View Website"
        />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          メタバースサービスのUGCサービス新規開発案件にUIデザイナーとして参画した。(2024年3月〜2025年9月)
        </p>
        <Image
          src="/works/05-02.png"
          alt="ホロアースクリエイターツールズ"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          イラスト画像を3Dアバターの服に貼り付け
          オリジナルアイテムを作って販売することができる。
          また販売アイテムの管理や、売上などが確認できる。
        </p>
        <Image
          src="/works/05-03.png"
          alt="ホロアースクリエイターツールズ"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          UGC類似サービスを参考にクリエイターが使いやすくわかりやすいツールを目指し制作した。
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          またこのサービスの審査運用サイトの設計デザイン開発も行った。
        </p>
      </section>

      {/* 役割など */}
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <dt className="font-semibold">Role</dt>
          <dd className="text-zinc-600">UI Design / Frontend</dd>
        </div>

        <div>
          <dt className="font-semibold">Tech</dt>
          <dd className="text-zinc-600">React / TypeScript / Panda CSS</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
