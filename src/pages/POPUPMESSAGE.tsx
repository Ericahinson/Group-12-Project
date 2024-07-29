import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const POPUPMESSAGE: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/onboarding-1");
  }, [navigate]);

  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white overflow-hidden flex flex-col items-end justify-start pt-2.5 pb-0 pr-[13px] pl-3 box-border gap-[351px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[228px] text-left text-xs text-white font-inter">
        <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base-2 text-gray-200 font-inter">
          <div className="relative inline-block min-w-[33px]">9:41</div>
          <div className="w-[71.1px] flex flex-col items-start justify-start pt-[4.7px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[5.8px]">
              <div className="h-[11.9px] w-[39.9px] relative">
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
                  src="/cellularconnection.svg"
                />
              </div>
              <img
                className="h-[11.2px] w-[25.4px] relative"
                loading="lazy"
                alt=""
                src="/battery.svg"
              />
            </div>
          </div>
        </header>
        <div className="w-[298px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[35px]">
            <div className="flex flex-col items-start justify-start pt-[33px] px-0 pb-0">
              <div className="relative inline-block min-w-[17px]">fjkj</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-xl text-mediumblue font-poppins">
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <img
                  className="h-[50px] w-[50px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-13.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[62px]">
                  <h2 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[96px]">
                    Success !
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-xs text-gray-100">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-2">
                    <div className="flex-1 relative font-semibold">
                      You have successfully signed in
                    </div>
                  </div>
                  <button
                    className="cursor-pointer [border:none] pt-[9px] pb-3 pr-[5px] pl-[31px] bg-[transparent] self-stretch flex flex-row items-start justify-start relative whitespace-nowrap"
                    onClick={onRectangleButtonClick}
                  >
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-blue" />
                    <div className="flex-1 relative text-base font-medium font-roboto text-white text-left z-[1]">
                      LET’S GET STARTED
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-1 h-[7px] relative overflow-hidden shrink-0 hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
        <img
          className="h-[34px] w-[134px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/light--portrait-3.svg"
        />
      </div>
    </div>
  );
};

export default POPUPMESSAGE;
