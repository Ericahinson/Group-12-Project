import { FunctionComponent } from "react";
import DeliveryInfo from "../components/DeliveryInfo";
import Navigation1 from "../components/Navigation1";

const Onboarding1: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-2.5 px-3 pb-0 box-border gap-[90px] leading-[normal] tracking-[normal]">
      <header className="self-stretch flex flex-row items-start justify-between pt-0 pb-10 pr-px pl-0 gap-[20px] text-left text-base-2 text-gray-200 font-inter">
        <div className="relative inline-block min-w-[33px]">9:41</div>
        <div className="w-[71.1px] flex flex-col items-start justify-start pt-[4.7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[5.8px]">
            <div className="h-[11.9px] w-[39.9px] relative">
              <img
                className="absolute top-[0px] left-[23.5px] w-[16.4px] h-[11.9px]"
                loading="lazy"
                alt=""
                src="/wifi1.svg"
              />
              <img
                className="absolute top-[0.3px] left-[0px] w-[18.1px] h-[11.5px]"
                loading="lazy"
                alt=""
                src="/cellularconnection.svg"
              />
            </div>
            <img
              className="h-[11.2px] w-[25.4px] relative"
              loading="lazy"
              alt=""
              src="/battery1.svg"
            />
          </div>
        </div>
      </header>
      <DeliveryInfo />
      <Navigation1 />
    </div>
  );
};

export default Onboarding1;
