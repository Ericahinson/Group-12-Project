import { FunctionComponent, useCallback } from "react";
import BarsStatusBarIPhoneL from "../components/BarsStatusBarIPhoneL";
import TitleContainer from "../components/TitleContainer";
import { useNavigate } from "react-router-dom";

const Onboarding: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNextTextClick = useCallback(() => {
    navigate("/onboarding-2");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-white overflow-hidden flex flex-col items-end justify-start pt-2.5 pb-[5px] pr-[13px] pl-3 box-border gap-[130px] leading-[normal] tracking-[normal]">
      <BarsStatusBarIPhoneL />
      <main className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-[13px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-end justify-start gap-[90px] max-w-full text-center text-base text-blue font-inter">
          <TitleContainer />
          <div className="w-[234px] flex flex-col items-start justify-start gap-[65px]">
            <div className="flex flex-row items-start justify-start py-0 px-[42px]">
              <img
                className="h-2.5 w-[50px] relative"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[71px]">
              <div
                className="relative font-semibold inline-block min-w-[37px] cursor-pointer"
                onClick={onNextTextClick}
              >
                Next
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <img
                  className="h-[5px] w-[134px] relative"
                  loading="lazy"
                  alt=""
                  src="/barshomeindicatoriphonelightportrait.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Onboarding;
