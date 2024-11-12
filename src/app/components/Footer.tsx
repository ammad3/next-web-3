import Image from "next/image";
import logo from "@/app/assets/logo.png";
export default function Footer() {
  return (
    <footer className=" bg-[#043873] w-[1920px] h-[461px] gap-[200px] pt-[140] pb-8 px-[220px] top-[5195px] ml-[1px] text-white flex flex-col justify-end">
      <div className="w-[1480px] h-[289px] gap-[100px] flex flex-col">
        <div className="flex w-[1480px] h-[169px] gap-[100px]">
          <div className="w-[295px] h-[169px] flex flex-col gap-[15px]">
            <div className="w-[191px] h-[34px]">
              <Image
                src={logo} // Imported image
                alt="Logo"
              />
            </div>
            <p className="w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-left">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <nav className="w-[295px] h-[127px]">
            <ul className="text-white gap-[15px] flex flex-col ">
              <li className="font-bold">Products</li>
              <li className="text-[#FFE492]">Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </nav>
          <nav className="w-[295px] h-[130px]">
            <ul className="text-white gap-[16px] flex flex-col ">
              <li className="font-bold">Resources</li>
              <li>Blog</li>
              <li>Guide & tutorials</li>
              <li>Help center</li>
            </ul>
          </nav>
          <nav className="w-[295px] h-[130px] ">
            <ul className="text-white gap-[16px] flex flex-col ">
              <li className="font-bold">Company</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </nav>
        </div>
        
        <div className=" w-[1480px] h-[20px] flex flex-col justify-start text-center gap-5">
        <div className="border-[#2E4E73] border-t-[1px] border-solid w-[1480px]"></div>
         <p>©2021 Whitepace LLC.</p>
        </div>
      </div>
    </footer>
  );
}

