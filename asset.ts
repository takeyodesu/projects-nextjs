const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/projects-nextjs" : "";

/**
 * public 配下のアセット参照を、GH Pages の basePath に対応させる
 * 例: asset("/works/04-01.png")
 * - dev:  /works/04-01.png
 * - prod: /projects-nextjs/works/04-01.png
 */
export const asset = (p: string) => {
  const path = p.startsWith("/") ? p : `/${p}`;
  return `${prefix}${path}`;
};
