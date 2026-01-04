import Image from "next/image";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage03() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">ホロアースWEBショップ</h1>

      {/* メインビジュアル */}

      <Image
        src="/works/07-01.png"
        alt="マーケットプレイスLP"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />

      <div className="mb-12">
        <ExternalLinkButton
          href="https://creator.holoearth.com/shop/products"
          label="View Website"
        />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          ホロアースアプリ内で使用可能な
          アバターアイテムをWEB上で購入できるショップサイトの開発
          一般的なファッションECサイトの設計をベースに、メタバース特有の仕様を取り入れ、直感的でスムーズな操作性を実現した。
        </p>
        <Image
          src="/works/07-02.png"
          alt="マーケットプレイスLP"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          TypeScript /React のフロントエンド開発も一部担当した。
          約3ヶ月の短い期間で開発しリリースした。
        </p>
        <Image
          src="/works/07-03.png"
          alt="マーケットプレイスLP"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          プロモーション用バナーなども担当した。
        </p>
      </section>

      {/* 役割など */}
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <dt className="font-semibold">Role</dt>
          <dd className="text-zinc-600">Art Direction / UI Design</dd>
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
