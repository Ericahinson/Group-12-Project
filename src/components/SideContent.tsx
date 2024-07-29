import { FunctionComponent } from "react";

export type SideContentType = {
  className?: string;
};

const SideContent: FunctionComponent<SideContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base-2 text-gray-200 font-inter ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[35.5px]">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[33px]">
          9:41
        </a>
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2 text-xl text-black">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[75px] whitespace-nowrap">
            Sign Up
          </a>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-2 text-base text-gray-300">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[45px]">
            Name
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[4.7px] px-0 pb-0">
        <div className="flex flex-row items-end justify-start gap-[5.8px]">
          <div className="h-[11.9px] w-[39.9px] relative shrink-0">
            <img
              className="absolute top-[0px] left-[23.5px] w-[16.4px] h-[11.9px]"
              loading="lazy"
              alt=""
              src="/wifi.svg"
            />
            <img
              className="absolute top-[0.3px] left-[0px] w-[18.1px] h-[11.5px]"
              loading="lazy"
              alt=""
              src="/cellularconnection1.svg"
            />
          </div>
          <img
            className="h-[11.2px] w-[25.4px] relative shrink-0"
            loading="lazy"
            alt=""
            src="/battery2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideContent;
