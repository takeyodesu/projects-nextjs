import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // GitHub Pages は静的ホスティングなので export する
  output: "export",

  // 末尾スラッシュにして /about -> /about/ -> /about/index.html の形に寄せる（Pagesで安定）
  trailingSlash: true,

  // GitHub Pages のプロジェクトページ配下で動くようにする
  // 例: https://<user>.github.io/projects-nextjs/
  basePath: isProd ? "/projects-nextjs" : "",
  assetPrefix: isProd ? "/projects-nextjs/" : "",

  // next/image を使っている場合、静的 export では最適化サーバが無いので無効化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
