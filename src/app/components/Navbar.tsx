import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({subsets:['latin']})

export default function Navbar() {
  return (
    <>
      <div className="w-[1920x] h-[92px] py-4 px-[220px] bg-[#043873] flex items-center justify-between">
        <div className="w-[191px] h-[34px]">
          <Image
            src={logo} // Imported image
            alt="Logo whitespace"
          />
        </div>
        <div className="w-[737.5px] h-[60px] flex items-center  justify-between">
          <div className={`${dmSans.className} w-[549px] h-[23px] gap-8 `}>
            <ul className="flex flex-flow  text-white font-medium text-lg gap-[60px]">
              <li className=" hover:text-[#FFE492]" ><a href="#">Products</a></li>
              <li className=" hover:text-[#FFE492]" ><a href="#">Solutions</a></li>
              <li className=" hover:text-[#FFE492]" ><a href="#">Resources</a></li>
              <li className=" hover:text-[#FFE492]" ><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="flex w-[126px] h-[60px] gap-[24px]">
            <button className="flex gap-[10px] px-10 py-4 rounded-lg hover:bg-[#FFE492] bg-[#ffffff] text-[#043873] text-lg font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
