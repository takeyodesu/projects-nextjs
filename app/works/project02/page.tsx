import Image from "next/image";
import { asset } from "@/asset";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage02() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">色覚異常</h1>

      {/* メインビジュアル */}
      <Image
        src={asset("/works/02-01.png")}
        alt="色覚異常"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />
      <div className="mb-12">
        <ExternalLinkButton
          href="https://www.instagram.com/shikikakuijou"
          label="View Instagram"
        />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          2019年学生時代制作課題
          インスタグラム上で色覚異常を体験することができるフィルターを作成した。
        </p>
        <Image
          src={asset("/works/02-02.png")}
          alt="色覚異常"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          meta社のsparkARを使用し作成。
          instagram上で@shikikakuijouのアカウントをフォロー/閲覧することで
          フィルターをストーリーズで利用することができる。
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          P型/D型/T型の色覚や、強弱の度合いも確認することができる。
          フィルター5作品の他、色覚異常やユニバーサルデザインに関する投稿も作成。
        </p>
        <Image
          src={asset("/works/02-03.png")}
          alt="色覚異常"
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
          <dd className="text-zinc-600">UI Design / Graphic Design</dd>
        </div>

        <div>
          <dt className="font-semibold">Tech</dt>
          <dd className="text-zinc-600">SparkAR</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
