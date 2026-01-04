import Image from "next/image";
import { asset } from "@/asset";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";
export default function ProjectPage01() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">読売新聞 紙面ビューアー</h1>

      {/* メインビジュアル */}
      <Image
        src={asset("/works/01-01.png")}
        alt="紙面ビューアー"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />
      <div className="mb-12">
        <ExternalLinkButton
          href="https://www.yomiuri.co.jp/newviewer/"
          label="View Website"
        />
      </div>

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          大手新聞社のリニューアル案件。
          ブラウザ上で新聞画像を検索/閲覧できるWEBアプリケーションや、
          社内管理システムなどの計9プロジェクトにUI/UXデザイナーとして参画した。（2022年2月〜2024年1月）
        </p>
        <Image
          src={asset("/works/01-02.png")}
          alt="紙面ビューアー"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          設計の段階から参加し要望を聞き入れ、 競合他社/類似サービスの調査や、
          ターゲット層の利用シーンなどを考察しながら
          エンドユーザー目線での制作に心掛けた。
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          その他、販促物などのグラフィック業務や
          フロントエンド開発にも携わった。
        </p>
        <Image
          src={asset("/works/01-03.png")}
          alt="紙面ビューアー"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />
        <p className="space-y-6 text-lg leading-relaxed">
          2024年4月に施行される「改正障害者差別解消法」
          のWEBアクセシビリティ義務化対応についてmiCheckerを導入し「JIS X
          8341-3:2016」規格において、AAAを達成した。
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
          <dd className="text-zinc-600">Vue.js / PHP / SCSS</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
