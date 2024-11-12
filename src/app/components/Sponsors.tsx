import Image from "next/image";
import sponsors from "@/app/assets/sponsors.png";
export default function Work() {
  return (
    <div className="bg-white w-[1922px] h-[538px]  gap-[100px] py-[140px] px-[220px] flex-col items-center justify-center">
      <div className="w-[1482px] h-[87px]">
        <h1 className="text-[#212529] font-bold text-[64px] leading-[77.5px] tracking-[-0.02em] mb-6 text-center">
          Our Sponsors
        </h1>
      </div>
      <br />
      <br />
      <div className="w-[1482px] h-[87px] flex-col justify-between">
        <Image
          src={sponsors} // Imported image
          alt="Example Image"
        />
      </div>
    </div>
  );
}
