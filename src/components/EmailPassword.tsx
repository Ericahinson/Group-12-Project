import { FunctionComponent } from "react";

export type EmailPasswordType = {
  className?: string;
  email?: string;
};

const EmailPassword: FunctionComponent<EmailPasswordType> = ({
  className = "",
  email,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[15px] pr-[7px] pl-2 box-border max-w-full text-left text-base text-gray-300 font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[41px]">
          {email}
        </a>
        <div className="self-stretch h-[39px] relative rounded-3xs box-border border-[1px] border-solid border-gainsboro" />
      </div>
    </div>
  );
};

export default EmailPassword;
