import Image from "next/image";
import container from "@/app/assets/Image-container.png";
export default function Ext() {
  return (
    <div className=" bg-[#043873] w-[1921px] h-[759px] py-[140] px-[220px] top-[92px] bg-# text-white flex items-center">
      <div className="flex flex-col w-[679px] h-[294px] gap-[60px]">
        <h1 className="font-bold text-[64px] leading-[77.5px] tracking-[-0.02em] mb-6 text-left">
          Use as Extension
        </h1>
        <p className="font-normal text-lg leading-[30px] ">
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages or take screenshots as notes.
        </p>
        <button className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 gap-[10px] font-medium text-lg leading-[23px] tracking-[-2%]">
          Let’s Go 🡢
        </button>
      </div>
      <div className="flex gap-1">
        <Image
          src={container} // Imported image
          alt="Example Image"
        />
      </div>
    </div>
  );
}

