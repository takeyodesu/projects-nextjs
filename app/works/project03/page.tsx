import Image from "next/image";
import { asset } from "@/asset";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import BackToTopButton from "@/components/BackToTopButton";

export default function ProjectPage03() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      {/* タイトル */}
      <h1 className="text-4xl font-bold mb-8">映画ポスター</h1>

      {/* メインビジュアル */}
      <Image
        src={asset("/works/03-01.png")}
        alt="映画ポスター"
        width={1200}
        height={800}
        className="border-2 border-zinc-800 mb-12"
        unoptimized
      />

      {/* 説明 */}
      <section className="mt-16 space-y-12">
        <p className="space-y-6 text-lg leading-relaxed">
          2019年制作物 二人体制の共同作品
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          早稲田大学人間科学部道岡円香さんとのコラボ作品として映画「めぐみ」のポスター制作。
          ぴあフィルムフェスティバルにて掲載された。
        </p>
        <p className="space-y-6 text-lg leading-relaxed">
          美術大学を目指し絵画の練習をする主人公のように実際にキャンバス地の布に
          アクリル絵の具を溜まりを撮影し、デザインを作成。
          17歳の多感な時期の迷いや両親の離婚と再婚、様々な感情を混沌とした配色、塗り方で表現した。
        </p>
        <Image
          src={asset("/works/03-02.png")}
          alt="映画ポスター"
          width={1200}
          height={800}
          className="border-2 border-zinc-800 mb-12"
          unoptimized
        />

        <p className="space-y-6 text-lg leading-relaxed">
          “映画の新しい才能の発見と育成”をテーマとした若手クリエイターの作品を上映する映画祭。
          2019年、国立映画アーカイブにて開催され、ポスターが朝日新聞、会場に掲載された。
          学生時代のゼミナールの活動の一部としてぴあの方を通して本プロジェクトに参加させて頂きました。
        </p>
      </section>

      {/* 役割など */}
      <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <dt className="font-semibold">Role</dt>
          <dd className="text-zinc-600">Graphic Design</dd>
        </div>
      </dl>
      {/* もどるボタン */}
      <BackToTopButton />
    </main>
  );
}
