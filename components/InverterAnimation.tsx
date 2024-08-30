import Image from "next/image";
import {
  BottomLeftSVG,
  BottomRightSVG,
  TopLeftSVG,
  TopRightSVG,
} from "./AnimatedSVG";

export default function InverterAnimation() {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-col items-center relative">
        {/* Top Left SVG Placement */}
        <div className="relative flex items-center">
          {/* Text/Image Block */}
          <div className="absolute -ml-[100px] -mt-20 flex flex-col items-center z-0">
            <span>Production</span>
            <span className="font-bold">3.67 kW</span>
            <Image
              src="/inverter/topleft.png"
              alt="Top Left Image"
              width={65}
              height={65}
            />
          </div>
          {/* SVG */}
          <TopLeftSVG />
        </div>

        {/* Bottom Left SVG Placement */}
        <div className="relative flex items-center mt-10">
          {/* Text/Image Block */}
          <div className="absolute -ml-[100px] mt-20 flex flex-col items-center z-0">
            <span>Battery 55%</span>
            <span className="font-bold">4.07 kW</span>
            <Image
              src="/inverter/bottomleft.png"
              alt="Bottom Left Image"
              width={65}
              height={65}
            />
          </div>
          {/* SVG */}
          <BottomLeftSVG />
        </div>
      </div>

      {/* Center Inverter Image */}
      <div className="mx-6 pt-[136px] z-20">
        <Image
          src="/inverter/inverter.png"
          alt="InverterHero"
          width={100}
          height={160}
        />
      </div>
      {/* nye */}
      <div className="flex flex-col items-center relative">
        {/* Top Left SVG Placement */}
        <div className="relative flex items-center">
          {/* Text/Image Block */}
          <div className="absolute ml-[400px] -mt-20 flex flex-col items-center z-0">
            <span>Grid</span>
            <span className="font-bold truncate">233.00 W</span>
            <Image
              src="/inverter/topright.png"
              alt="toprightImg"
              width={65}
              height={65}
            />
          </div>
          {/* SVG */}
          <TopRightSVG />
        </div>

        {/* Bottom Left SVG Placement */}
        <div className="relative flex items-center mt-10">
          {/* Text/Image Block */}
          <div className="absolute mt-20 ml-[400px] flex flex-col items-center z-0">
            <span>Consumption</span>
            <span className="font-bold truncate">331.00 W</span>
            <Image
              src="/inverter/bottomright.png"
              alt="Bottom Left Image"
              width={65}
              height={65}
            />
          </div>
          {/* SVG */}
          <BottomRightSVG />
        </div>
      </div>
    </div>
  );
}
