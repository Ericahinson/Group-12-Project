import { FunctionComponent } from "react";

export type DeliveryInfoType = {
  className?: string;
};

const DeliveryInfo: FunctionComponent<DeliveryInfoType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[329px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full text-left text-5xl text-gray-300 font-montserrat ${className}`}
    >
      <div className="h-[387px] flex-1 relative">
        <div className="absolute top-[300px] left-[23px] flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[57px] pl-[58px]">
            <h3 className="m-0 relative text-inherit font-bold font-inherit">
              Fast Delivery
            </h3>
          </div>
          <div className="relative text-base font-inter text-center">
            <p className="m-0">Have all your meals delivered to your</p>
            <p className="m-0">door step in no time.</p>
          </div>
        </div>
        <div className="absolute top-[131px] left-[0px] text-xs font-inter text-white inline-block min-w-[17px]">
          fjkj
        </div>
        <img
          className="absolute top-[0px] left-[23px] w-[280px] h-[280px] object-cover"
          loading="lazy"
          alt=""
          src="/take-awaypana-1@2x.png"
        />
      </div>
    </section>
  );
};

export default DeliveryInfo;
