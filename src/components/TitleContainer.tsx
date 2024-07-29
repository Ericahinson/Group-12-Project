import { FunctionComponent } from "react";

export type TitleContainerType = {
  className?: string;
};

const TitleContainer: FunctionComponent<TitleContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border max-w-full text-left text-xs text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start py-0 pr-[19px] pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[154px] max-w-[107%] shrink-0">
          <div className="relative inline-block min-w-[17px]">fjkj</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-5xl text-gray-300 font-montserrat">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[67px] pl-[63px]">
              <h3 className="m-0 relative text-inherit font-bold font-inherit">
                Delicious Meals
              </h3>
            </div>
            <div className="relative text-base font-inter text-center">
              <p className="m-0">Enjoy delicious delicacies from the comfort</p>
              <p className="m-0">of your home with one click.</p>
            </div>
          </div>
        </div>
        <div className="h-[387px] flex flex-col items-start justify-start ml-[-299px]">
          <img
            className="w-[280px] h-[280px] relative object-cover"
            loading="lazy"
            alt=""
            src="/fast-foodbro-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
