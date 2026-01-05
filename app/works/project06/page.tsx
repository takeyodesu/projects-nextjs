import Image from "next/image";
import { asset } from "@/asset";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage06() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">マーケットプレイスLP</h1>

      {/* メインビジュアル */}

      <Image
        src={asset("/works/06-01.png")}
        alt="マーケットプレイスLP"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />

      <div className="mb-12">
        <ExternalLinkButton
          href="https://holoearth.com/marketplace-lp/"
          label="View Website"
        />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          ホロアース クリエイターサービスPR用LP
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          構成やビジュアルのディレクション、デザインまで担当した。
        </p>
        <Image
          src={asset("/works/06-02.png")}
          alt="マーケットプレイスLP"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />

        <Image
          src={asset("/works/06-03.png")}
          alt="マーケットプレイスLP"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          編集ツールでよく見かけるUIパーツやオブジェクトをモチーフにすることで、制作に携わる方々にとって親しみやすく、共感を得やすいデザインを意識した。
        </p>
        <Image
          src={asset("/works/06-04.png")}
          alt="マーケットプレイスLP"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          クリエイターの「作りたい」、「オリジナルをみんなにお披露目したい」といった気持ちを刺激するようなワクワク期待感があるLPに仕上げた。
        </p>
      </section>

      {/* 役割など */}
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <dt className="font-semibold">Role</dt>
          <dd className="text-zinc-600">Art Direction / UI Design</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
