import Image from "next/image";
import { asset } from "@/asset";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage04() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">グラフィック</h1>

      {/* メインビジュアル */}
      <Image
        src={asset("/works/04-10.png")}
        alt="グラフィック"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          バナー、ロゴ、印刷物などのグラフィック制作
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          たまにイラストも描いてます
        </p>
        <Image
          src={asset("/works/04-09.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-11.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-12.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-13.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-01.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-06.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-07.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <Image
          src={asset("/works/04-08.png")}
          alt="グラフィック"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
      </section>

      {/* 役割など */}
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <dt className="font-semibold">Role</dt>
          <dd className="text-zinc-600">Graphic Design</dd>
        </div>
        <div>
          <dt className="font-semibold">Tech</dt>
          <dd className="text-zinc-600">Adobe Illustrator / Adobe Photoshop</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
