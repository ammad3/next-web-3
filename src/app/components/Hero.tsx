import Image from "next/image";
import container from "@/app/assets/Image-container.png";
export default function Hero() {
  return (
    <div className="w-[1920px] h-[829px] bg-[#043873] py-[140] px-[220px] ml-[1px] top-[92px] text-white flex items-center">
      <div className="flex flex-col gap-[60px] w-[656px] h-[361px]">
        <h1 className="font-bold text-[64px] leading-[77.5px] tracking-[-0.02em] text-left">
          Get more Done With whitespace
        </h1>
        <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] ">
          Project management software that enables your teams to collaborate,
          plan, analyze and manage everyday tasks
        </p>
        <button className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg py-5 gap-[10px] font-medium text-[18px] leading-[23px] tracking-[-2%]">
          Try Whitepace free 🡢
        </button>
      </div>
      <div className="gap-1 w-824px h-549px">
        <Image
          src={container} // Imported image
          alt="Example Image"

        />
      </div>
    </div>
  );
}

