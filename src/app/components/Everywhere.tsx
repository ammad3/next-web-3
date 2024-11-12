import Image from "next/image";
export default function Everywhere() {
  return (
    <div className=" bg-[#043873] text-white  w-[1921px] h-[574px] py-[140] px-[220px] top-[4080px] ml-[1px] flex items-center ">
      <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="w-[1064px] h-[72px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-left">
            Your work, everywhere you are
          </h1>
          <p className=" w-[1064px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-center ">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <button className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg p-5 gap-[10px] font-medium text-lg leading-[23px] tracking-[-2%]">
          Try Taskey 🡢
        </button>
      </div>
    </div>
  );
}
