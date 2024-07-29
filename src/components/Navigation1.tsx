import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Navigation1Type = {
  className?: string;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/onboarding-1");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    // Please sync "Onboarding_3" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-center text-base text-blue font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[61px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <img
            className="h-2.5 w-[50px] relative"
            loading="lazy"
            alt=""
            src="/group-2.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div
            className="relative font-semibold inline-block min-w-[39px] cursor-pointer"
            onClick={onBackTextClick}
          >
            Back
          </div>
          <div className="w-[134px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[34px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/light--portrait-3.svg"
            />
          </div>
          <div
            className="relative font-semibold inline-block min-w-[37px] cursor-pointer"
            onClick={onNextTextClick}
          >
            Next
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation1;
