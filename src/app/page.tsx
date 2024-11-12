import Image from "next/image";
import Hero from "@/app/components/Hero";
import Work from "@/app/components/Work";
import Ext from "@/app/components/Ext";
import Customize from "@/app/components/Customize";
import Everywhere from "@/app/components/Everywhere";
import Sponsors from "@/app/components/Sponsors";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Work />
      <Ext />
      <Customize />
      <Everywhere />
      <Sponsors />
    </div>
  );
}
