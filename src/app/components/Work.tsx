import Image from "next/image";
import container from "@/app/assets/Image-container.png";
import work from "@/app/assets/Work-Together.png";
export default function Work() {
  return (
    <div className="bg-white w-[1920px] h-[1588px]  gap-[100px] py-[140px] px-[220px] flex flex-col justify-center items-center">
      <div className="w-[1480px] h-[547px] gap-[60px]  bg-# text-white flex justify-between">
        <div className="w-[672px] h-[411px] gap-[60px] flex flex-col ">
          <h1 className="text-[#212529] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-left">
            Project Management
          </h1>
          <p className="text-[#212529] font-normal text-[18px] leading-[30px] tracking-[-2%]">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 gap-[10px] font-medium text-lg leading-[23px] tracking-[-2%]">
            Get Started 🡢
          </button>
        </div>
        <div className="gap-1">
          <Image
            src={container} // Imported image
            alt="Example Image"
          />
        </div>
      </div>
      <div className=" w-[1480px] h-[661px] gap-[100px] text-white flex items-center">
        <div className="w-[710px] h-[661px] gap-1">
          <Image
            src={work} // Imported image
            alt="Example Image"
          />
        </div>
        <div className="flex flex-col w-[670px] h-[294px] gap-[60px]">
          <h1 className="text-[#212529] font-bold text-[72px] leading-[87.14px] tracking-[-2%] ">
            Work together
          </h1>
          <p className="text-[#212529] font-normal text-lg leading-[30px] ">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg py-5 px-10 gap-[10px] font-medium text-lg leading-[23px] tracking-[-2%]">
            Try it now 🡢
          </button>
        </div>
      </div>
    </div>
  );
}

// width: Fixed (1,920px)px;
// height: Hug (1,588px)px;
// top: 921px;
// left: 1px;
// padding: 140px 220px 140px 220px;
// gap: 100px;
// opacity: 0px;
//mt-[921px]
