import { FunctionComponent } from "react";

const SplashScreen: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-3xs [background:linear-gradient(180deg,_#add8e6,_#000080)] overflow-hidden flex flex-col items-start justify-start gap-[266px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start gap-[243px] text-left text-[40px] text-white font-akaya-telivigala">
        <header className="self-stretch h-[115px] flex flex-row items-end justify-start pt-0 px-[227px] pb-0 box-border gap-[92px]">
          <img
            className="ml-[-277px] h-[150px] w-[185px] relative object-cover shrink-0"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="h-[150px] w-[210.1px] relative object-cover shrink-0"
            alt=""
            src="/image-15@2x.png"
          />
        </header>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="relative inline-block min-w-[125px]">Chaleur</div>
        </div>
      </section>
      <section className="self-stretch h-[140px] flex flex-row items-start justify-start py-0 pr-[205px] pl-[222px] box-border gap-[52px]">
        <img
          className="ml-[-272px] h-[183.3px] w-[220px] relative object-cover shrink-0"
          loading="lazy"
          alt=""
          src="/unsplashotwlz2mn7w@2x.png"
        />
        <div className="h-[140px] w-[220px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border shrink-0">
          <img
            className="self-stretch h-[163.2px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/unsplashckka-jsngpm@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default SplashScreen;
