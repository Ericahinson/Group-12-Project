import { FunctionComponent, useCallback } from "react";
import SideContent from "../components/SideContent";
import EmailPassword from "../components/EmailPassword";
import { useNavigate } from "react-router-dom";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/pop-up-message");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "Onboarding_3" to the project
  }, []);

  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-white overflow-hidden flex flex-col items-start justify-start pt-2.5 px-3 pb-0 box-border gap-[104px] leading-[normal] tracking-[normal] text-left text-xs text-white font-inter">
      <div className="absolute !m-[0] top-[291px] left-[25px] inline-block min-w-[17px]">
        fjkj
      </div>
      <form className="m-0 self-stretch flex flex-col items-end justify-start py-0 pr-px pl-0 box-border gap-[5px] max-w-full">
        <SideContent />
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[15px] pr-[7px] pl-2 box-border max-w-full">
          <input
            className="[outline:none] bg-[transparent] h-[39px] flex-1 relative rounded-3xs box-border min-w-[201px] max-w-full border-[1px] border-solid border-gainsboro"
            type="text"
          />
        </div>
        <EmailPassword email="Email" />
        <EmailPassword email="Password" />
        <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[25px] pr-[7px] pl-1.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="w-[139px] flex flex-row items-start justify-start">
              <div className="relative text-base font-inter text-gray-300 text-left z-[1]">
                Confirm Password
              </div>
              <div className="relative text-xs font-inter text-white text-left inline-block min-w-[17px] ml-[-123px]">
                fjkj
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
              <input
                className="[outline:none] bg-[transparent] h-[39px] flex-1 relative rounded-3xs box-border min-w-[201px] max-w-full border-[1px] border-solid border-gainsboro"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2 box-border max-w-full">
          <button
            className="cursor-pointer py-2.5 px-5 bg-blue flex-1 rounded-3xs box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full border-[1px] border-solid border-gainsboro"
            onClick={onGroupButtonClick}
          >
            <div className="h-[39px] w-[335px] relative rounded-3xs bg-blue box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
            <div className="relative text-xs font-medium font-inter text-whitesmoke-100 text-left inline-block min-w-[90px] z-[1]">
              Create Account
            </div>
          </button>
        </div>
      </form>
      <div className="w-1 h-[7px] relative overflow-hidden shrink-0 hidden z-[2]" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[41px] pr-[45px] pl-[42px] text-[14px] text-black">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
          <div className="self-stretch h-px relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] box-border border-t-[1px] border-solid border-whitesmoke-200" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[19px]">
            <div
              className="relative cursor-pointer"
              onClick={onAlreadyHaveAnClick}
            >
              <span>Already have an account?</span>
              <b> Sign in</b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
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

export default SignUp;
