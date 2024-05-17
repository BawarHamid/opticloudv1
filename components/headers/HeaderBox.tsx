import React from "react";

type HeaderBoxProps = {
  headerType?: "withUser" | "title";
  title: string;
  subtext?: string;
  user?: string;
};

const HeaderBox: React.FC<HeaderBoxProps> = ({
  headerType,
  title,
  subtext,
  user,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[24px] leading-[30px]">
        {title}
        {headerType === "withUser" && (
          <span className="text-primary">, {user}</span>
        )}
      </h1>
      <p className="text-[14px] leading-[20px] font-normal text-gray-600">
        {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;
