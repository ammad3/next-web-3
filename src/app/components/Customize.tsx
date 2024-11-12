import Image from "next/image";
import container2 from "@/app/assets/Image-2.png";
import Icon from "@/app/assets/Icon.png";

export default function Work() {
  return (
    <div className="bg-white w-[1921px] h-[812.09px]  gap-[100px] py-[140px] px-[220px] flex flex-col">
      <div className=" bg-white gap-[100px] bg-# text-white flex">
        <div className="gap-1">
          <Image
            src={container2} // Imported image
            alt="Example Image"
          />
        </div>
        <div className="flex flex-col w-[669px] h-[411px] gap-[60px]">
          <h1 className="text-[#212529] font-bold text-[72px] leading-[87.14px] tracking-[-2%] mb-6 text-left">
            Customise it to your needs
          </h1>
          <p className="text-[#212529] font-normal text-[18px] leading-[30px] tracking-[-2%] ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <button className=" flex  items-center justify-center w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 gap-[10px] font-medium text-lg leading-[23px] tracking-[-2%]">
            Let’s Go{" "}
            <Image
              src={Icon} // Imported image
              alt="Example Image"
              width={14}
              height={14}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
