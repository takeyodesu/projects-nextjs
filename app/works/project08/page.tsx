import Image from "next/image";
import { asset } from "@/asset";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage08() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">hololive 新配信アプリ</h1>

      {/* メインビジュアル */}

      <Image
        src={asset("/works/08-01.png")}
        alt="新配信アプリ"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />

      <div className="mb-12">
        <ExternalLinkButton href="https://youtu.be/CYce1mozNRo?t=1844" label="View Youtube" />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">ホロライブプロダクション所属タレントが利用する配信アプリのUIを担当した(2025年10月〜2026年8月)</p>
        <p className="space-y-6 text-lg leading-relaxed">専門知識なしでも高品質な3D配信を「楽に」「楽しく」実現できるアプリを実現</p>
        <Image
          src={asset("/works/08-02.png")}
          alt="タイトルを入力"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">関連するモバイルアプリや、視聴者参加型クイズゲームのUIも担当した</p>
        <Image
          src={asset("/works/08-03.png")}
          alt="タイトルを入力"
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
          <dd className="text-zinc-600">UI Design</dd>
        </div>
        <div>
          <dt className="font-semibold">Tech</dt>
          <dd className="text-zinc-600">Unity</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
