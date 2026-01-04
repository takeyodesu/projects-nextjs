import Image from "next/image";

export default function SocialIcon({}: FirstView) {
  return (
    <>
      <div className="flex justify-between p-2 bg-zinc-200 border-2 border-b-0 border-zinc-800">
        <Image src="/favicon.png" alt="" width={24} height={24} />
        <div className="flex gap-2">
          <div className="flex justify-center p-1 w-fit bg-gray-50 shadow-[2px_2px_0_#666666]">
            <Image
              className="text-zinc-800"
              src="/Music-gray.svg"
              alt=""
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-center p-1 w-fit bg-gray-50 shadow-[2px_2px_0_#666666]">
            <Image
              className="text-zinc-800"
              src="/Github-gray.svg"
              alt=""
              width={16}
              height={16}
            />
          </div>
          <div className="flex justify-center p-1 w-fit bg-gray-50 shadow-[2px_2px_0_#666666]">
            <Image
              className="text-zinc-800"
              src="/Figma-gray.svg"
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit p-8 bg-gradient-to-b from-[#666] to-[#efefef] border-2 border-zinc-800 shadow-[8px_8px_0_#60ffef]">
        <h1 className="w-fit text-3xl font-bold bg-[#60ffef] p-2">
          こんにちは
        </h1>
        <h2 className="w-fit text-3xl font-bold text-white bg-zinc-800 p-2 mt-2">
          TAKEUCHI です
        </h2>

        <p className="mt-6 text-xl font-bold text-zinc-800">
          Web / UI Designer & Frontend Developer
        </p>

        {/* 後でクリック・アニメ追加しやすい */}
        <button className="mt-12 w-fit rounded-full border px-6 py-3 text-sm transition hover:bg-black hover:text-white">
          View Works
        </button>
        <div className="absolute -bottom-20 -right-8">
          <Image src="/kuma.png" alt="うちの猫です" width={120} height={160} />
          <p className="text-xs font-bold bg-zinc-50 p-2 border-2 border-zinc-800 mt-1">
            ※この画像はうちの熊です
          </p>
        </div>
      </div>
    </>
  );
}
