import { FunctionComponent } from "react";

export type BarsStatusBarIPhoneLType = {
  className?: string;
};

const BarsStatusBarIPhoneL: FunctionComponent<BarsStatusBarIPhoneLType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-end justify-between gap-[20px] text-left text-base-2 text-gray-200 font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-0">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[33px] shrink-0">
          9:41
        </a>
      </div>
      <div className="w-[71.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[5.6px]">
          <img
            className="h-[11.5px] w-[18.1px] relative"
            loading="lazy"
            alt=""
            src="/cellularconnection.svg"
          />
          <img
            className="h-[11.9px] w-[16.4px] relative min-h-[12px]"
            loading="lazy"
            alt=""
            src="/wifi.svg"
          />
          <img
            className="h-[11.2px] w-[25.4px] relative"
            loading="lazy"
            alt=""
            src="/battery.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default BarsStatusBarIPhoneL;
